import { google } from 'googleapis';
import fs from 'fs';
import { NextResponse } from 'next/server';
import { convertToOriginalCase, convertToTitleCase } from '@/app/utils/helper';

const CREDENTIALS = JSON.parse(fs.readFileSync(`./serviceFiles/${process.env.SHEETS_CREDENTIALS_FILE_NAME}`, 'utf-8'));
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.JWT({
    email: CREDENTIALS.client_email,
    key: CREDENTIALS.private_key,
    scopes: SCOPES,
});

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const sheets = google.sheets({ version: 'v4', auth });

async function getNextAvailableRow() {
    const range = 'Sheet1!A:C';
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: range,
    });

    const values = response.data.values || [];
    return values.length + 1;
}

async function getHeaders() {
    const range = 'Sheet1!1:1';
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: range,
    });

    const headers = response.data.values ? response.data.values[0] : [];
    return headers;
}

async function rearrangeKeys(questionKeys = []) {
    const firstKeys = [
        'name_of_individual',
        'email',
        'project_title',
        'beginning_year',
        'end_year',
        'location_of_project',
        'area_of_project',
        'description_of_project'
    ];

    const remainingKeys = questionKeys.filter(key => !firstKeys.includes(key));
    const rearrangedKeys = [...firstKeys, ...remainingKeys];
    return rearrangedKeys;
}

async function insertData(payload, questionKeys = []) {
    const nextRow = await getNextAvailableRow();
    const rearrangedKeys = await rearrangeKeys(questionKeys);
    const headers = await getHeaders();
    const headersNeedUpdate = !rearrangedKeys.every(key => headers.includes(key));
    
    if (headersNeedUpdate) {
        const formattedHeaders = rearrangedKeys?.map((elem) => convertToTitleCase(elem));
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!1:1',
            valueInputOption: 'RAW',
            resource: {
                values: [formattedHeaders],
            },
        });

        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: {
                requests: [
                    {
                        repeatCell: {
                            range: {
                                sheetId: 0,
                                startRowIndex: 0,
                                endRowIndex: 1,
                            },
                            cell: {
                                userEnteredFormat: {
                                    textFormat: {
                                        bold: true,
                                    },
                                },
                            },
                            fields: 'userEnteredFormat.textFormat.bold',
                        },
                    },
                ],
            },
        });
    }

    const originalKeys = rearrangedKeys.map((elem) => convertToOriginalCase(elem))
    const values = originalKeys.map(key => payload[key] || '');

    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1',
        valueInputOption: 'RAW',
        resource: {
            values: [values],
        },
    });
}

export async function POST(request) {
    try {
        const payload = await request.json();
        const questionKeys = Object.keys(payload);
        await insertData(payload, questionKeys);
        return NextResponse.json({ message: 'Data saved to Google Sheet' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}