import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Image from '@/models/Image';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const images = await Image.find({});
      res.status(200).json(images);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
