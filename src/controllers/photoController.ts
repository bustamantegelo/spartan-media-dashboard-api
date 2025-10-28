import { Request, Response } from 'express';
import { getSpreadsheetData } from '../_lib/google';

export const getPhotoData = async (req: Request, res: Response) => {
  const { day } = req.params;

  try {
    const data = await getSpreadsheetData('Dashboard', `A${+day+1}:E${+day+1}`);
    res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching photo data:', error);
    res.status(500).json({ error: 'Failed to fetch photo data' });
  }
}
