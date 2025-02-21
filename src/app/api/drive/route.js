import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';

const KEYFILEPATH = `./serviceFiles/${process.env.DRIVE_CREDENTIALS_FILE_NAME}`;
const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file"
];

const folderId = process.env.DRIVE_FOLDER_ID;
const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES
});

const driveService = google.drive({ version: "v3", auth });

export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get("file")

    if (!file) {
        return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
        return NextResponse.json({ message: "Invalid file type, only PDF files are allowed" }, { status: 400 });
    }

    const maxSize = Number(process.env.FILE_SIZE || 100) * 1024 * 1024;
    if (file.size > maxSize) {
        return NextResponse.json({ message: "File size exceeds the limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }
    const filePath = path.join(tempDir, file.name);
    await writeFile(filePath, buffer);

    try {
        const appendTimestampToFileName = (fileName) => {
            const timestamp = new Date().toLocaleString().replace(/[/:]/g, '-');
            const lastDotIndex = fileName.lastIndexOf('.');
            return lastDotIndex === -1
                ? `${fileName}_${timestamp}`
                : `${fileName.slice(0, lastDotIndex)}_${timestamp}${fileName.slice(lastDotIndex)}`;
        };

        const fileMetadata = {
            name: appendTimestampToFileName(file.name),
            parents: [folderId]
        };

        const media = {
            mimeType: file.type,
            body: fs.createReadStream(filePath)
        };

        const driveFile = await driveService.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: "id"
        });

        fs.unlinkSync(filePath);

        return NextResponse.json({ message: "PDF file uploaded successfully", fileId: driveFile.data.id });
    } catch (error) {
        console.error("Error uploading PDF:", error);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return NextResponse.json({ message: "Error uploading PDF", error: (error).message }, { status: 500 });
    }
}