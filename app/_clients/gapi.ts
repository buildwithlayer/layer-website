/// <reference types="gapi" />
/// <reference types="gapi.client.sheets" />

declare const gapi: any;

export async function appendRowToSheet(
  values: any[][],
  spreadsheetId: string,
  range: string
): Promise<void> {
  try {
    await new Promise((resolve) => gapi.load("client", resolve));

    await gapi.client.init({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets",
    });

    await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "RAW",
      resource: {
        values: values,
      },
    });
  } catch (error) {
    console.error("Error appending row:", error);
    throw error;
  }
}
