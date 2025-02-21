# Steps to set up your GCP project for using the Google Drive API:

## 1. Create a new GCP project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project drop-down at the top of the page.
3. Click "New Project" in the modal that appears.
4. Enter a project name and click `Create`.

## 2. Select your project

1. Once the project is created, make sure it's selected in the project drop-down at the top of the page.
2. If it's not selected, click the project drop-down and choose your newly created project.

## 3. Enable the Google Drive API

1. In the left sidebar, click on `APIs & Services` or search for `APIs & Services` > `Library`.
2. Search for `Google Drive API` and click on it.
3. Click the `Enable` button.

## 4. Create a service account

1. In the left sidebar, click on `Credentials`.
2. Click the `CREATE CREDENTIALS` button.
3. Select `Service account`
4. Enter a name for the service account and click `CREATE AND CONTINUE`.
5. (Optional) Grant this service account access to the project if needed. You can skip this step and click "Continue".
6. (Optional) Grant users access to this service account if needed. You can skip this step and click `Done`.
7. On the Service Accounts page, find your newly created service account and click on it > `KEYS`.
8. Click `ADD KEY` > `Create new key`.
9. Choose `JSON` as the key type and click `CREATE`.
10. The JSON key file will be downloaded to your computer.
11. Use this JSON to authenticate your application to GCP.

Make sure to provide the access of the google drive folder to the Email generated through `Service Accounts`
