# Next.js Project Setup Guide

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install Dependencies

After setting up the project in your code editor, run the following commands to install the dependencies:

```bash
npm install
# or
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Run the Development Server

Start the development server with one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

After running the development server, open http://localhost:3000 in your browser to see the result.

## Project Setup Guide

Once you have the project set up in your editor, follow the steps below for proper configuration.

### 3. Setting Up the Project (Additional Setup)

You can refer to the following resources for a more detailed project setup:

- [Project Setup PDF](https://nickelfoxnet-my.sharepoint.com/:b:/g/personal/rahul_gupta_nickelfox_com/EdrY8ZJ8p2BBp_BaCh3k6LQB_v7TylRS-TuiNb2WUiacjg?e=m5TYfM)
- [Project Setup Drive](https://nickelfoxnet-my.sharepoint.com/:b:/g/personal/rahul_gupta_nickelfox_com/ETRvMaM_un9OkdXE_uLiCV4Bafieyd9B8I6B-TVn9ORmUA?e=qh8Jx7)
- [Project Setup Sheet](https://nickelfoxnet-my.sharepoint.com/:b:/g/personal/rahul_gupta_nickelfox_com/EX4AGTY_Y_VMrbVvBi1KXYIBOHz00-60ZZBTBDG3sr4j_Q?e=T9zl8V)

These documents will guide you through additional configuration steps, including setting up the project-specific services, APIs, and database integrations.

## Configuring Environment Variables

### 4. Create the .env.local File

Next, you'll need to create an environment configuration file:

1. In your project's root directory, create a file named `.env.local`.
2. Copy the contents from the `.env.example` file into the newly created `.env.local` file.
3. Add the following required environment variables:
```bash
GOOGLE_SHEET_ID=your_google_sheet_id_here
DRIVE_FOLDER_ID=your_drive_folder_id_here
```

### 5. Set the Correct Values
**GOOGLE_SHEET_ID**: Replace `your_google_sheet_id_here` with the actual ID of your Google Sheet.

**DRIVE_FOLDER_ID**: Replace `your_drive_folder_id_here` with the ID of the relevant folder in your Google Drive.

These values are critical for interacting with your Google Sheets and Drive Folder. You can obtain these IDs from the respective URLs of your Google Sheet and Drive Folder.

## Project Files Setup
### 6. Add Project Setup Files
Once you have the necessary files downloaded from the links above, follow these steps:

1. Copy the contents of the file downloaded from the **Project Setup Drive** to the `ceew.json` file located inside the `serviceFiles` folder in the root directory of the project.

2. Copy the contents of the file downloaded from the **Project Setup Sheet** to the `gSheet.json` file located inside the same `serviceFiles` folder.

These files are essential for the integration with Google Sheets and Drive, and the contents should match the configuration required for your project.

### 7. Share Access with `client_email`

To give the necessary access to the Google Sheet and Drive, follow these steps:

1. **Share access to the Google Sheet**:
   - Open the downloaded `gSheet.json` file.
   - Extract the `client_email` value from the file.
   - Grant the `client_email` access to the Google Sheet with `edit` permissions.
   - You can share the Google Sheet by adding the `client_email` to the "Share" section of the document (accessible by clicking the "Share" button at the top-right of the Google Sheet).

2. **Share access to the Google Drive folder**:
   - Open the downloaded `ceew.json` file.
   - Extract the `client_email` value from the file.
   - Grant the `client_email` access to the Google Drive folder with `edit` permissions.
   - You can share the Drive folder by right-clicking on the folder in Google Drive, selecting "Share," and entering the `client_email` to provide access.

---

### Font Setup

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family by Vercel. You don't need to do anything additional to enable this feature as it's automatically configured.

---

### Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

Additionally, you can check out [the Next.js GitHub repository](https://github.com/vercel/next.js). Your feedback and contributions are always welcome!


### Deploy on Vercel

Once you're ready to deploy your app, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), which is also created by the makers of Next.js.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
