import { google } from 'googleapis';

export const getGoogleAuth = () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    return google.sheets({ version: 'v4', auth });
}

export const getSpreadsheetData = async (sheets: string, range: string) => {
    try {
        const response = await getGoogleAuth().spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `${sheets}!${range}`,
        });
        return response.data.values || [];
    } catch (error) {
        console.error('Error fetching spreadsheet data:', error);
        throw new Error('Failed to fetch spreadsheet data');
    }
};
