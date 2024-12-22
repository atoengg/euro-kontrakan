import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Image from "@/models/Image";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method === "POST") {
        const { url, uploadedBy } = req.body

        if (!url || !uploadedBy) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const newImage = await Image.create({ url, uploadedBy });
            res.status(201).json(newImage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to save image' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}