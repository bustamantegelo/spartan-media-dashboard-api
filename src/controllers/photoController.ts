import { Request, Response } from 'express';
import { getSpreadsheetData } from '../_lib/google';
import { formatString } from '../_lib/format';

export const getPhotoData = async (req: Request, res: Response) => {
  const { day } = req.params;

  try {
    const headersRequest = await getSpreadsheetData('Dashboard', 'A1:Z1');
    const data = await getSpreadsheetData('Dashboard', `A${+day+1}:Z${+day+1}`);
    const headers = formatString(headersRequest[0]);
    const response = data[0].map((item: any, index: number) => {
      const data: any = {};
      data[headers[index]] = +item;

      return data;
    });
    const formattedResponse = response.reduce((acc, item) => {
      return { ...acc, ...item };
    }, {});

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error('Error fetching photo data:', error);
    res.status(500).json({ error: 'Failed to fetch photo data' });
  }
}
