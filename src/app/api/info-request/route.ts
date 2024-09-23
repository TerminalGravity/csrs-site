import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import axios from 'axios';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = formidable({});

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return resolve(NextResponse.json({ error: 'Form parse error' }, { status: 500 }));
      }

      const name = fields.name?.[0];
      const email = fields.email?.[0];
      const phone = fields.phone?.[0];
      const file = files.file?.[0];

      if (!name || !email || !phone || !file) {
        return resolve(NextResponse.json({ error: 'Missing required fields' }, { status: 400 }));
      }

      const fileData = fs.readFileSync(file.filepath);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('file', new Blob([fileData]), file.originalFilename || 'file');

      try {
        // Replace with your actual GoHighLevel endpoint
        const goHighLevelEndpoint = process.env.GOHIGHLEVEL_ENDPOINT;
        const goHighLevelApiKey = process.env.GOHIGHLEVEL_API_KEY;

        if (!goHighLevelEndpoint || !goHighLevelApiKey) {
          throw new Error('GoHighLevel configuration is missing');
        }

        await axios.post(goHighLevelEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${goHighLevelApiKey}`,
          },
        });

        resolve(NextResponse.json({ message: 'Information request submitted successfully' }));
      } catch (error) {
        console.error('GoHighLevel API error:', error);
        resolve(NextResponse.json({ error: 'Failed to process your request' }, { status: 500 }));
      }
    });
  });
}
