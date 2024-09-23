import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { createInfoRequestsTable } from '@/lib/db';
import formidable from 'formidable';
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

      try {
        // Ensure the info_requests table exists
        await createInfoRequestsTable();

        // TODO: Implement file upload to a storage service (e.g., AWS S3)
        // For now, we'll just store the file name
        const fileUrl = file.originalFilename || 'file';

        // Insert the info request into the database
        await sql`
          INSERT INTO info_requests (name, email, phone, file_url)
          VALUES (${name}, ${email}, ${phone}, ${fileUrl})
        `;

        resolve(NextResponse.json({ message: 'Information request submitted successfully' }));
      } catch (error) {
        console.error('Database error:', error);
        resolve(NextResponse.json({ error: 'Failed to process your request' }, { status: 500 }));
      }
    });
  });
}
