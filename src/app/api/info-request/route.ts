import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { createInfoRequestsTable } from '@/lib/db';
import formidable from 'formidable';
import axios from 'axios';

const GOHIGHLEVEL_API_KEY = process.env.GOHIGHLEVEL_API_KEY;
const GOHIGHLEVEL_LOCATION_ID = process.env.GOHIGHLEVEL_LOCATION_ID;

export async function POST(req: NextRequest) {
  const form = formidable({});

  try {
    const formData = await req.formData();
    const fields = Object.fromEntries(formData);
    const file = formData.get('file') as File | null;

    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0];
    const message = fields.message?.[0];
    const file = files.file?.[0];

    if (!name || !email || !phone || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

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

    // Send data to GoHighLevel
    const goHighLevelData = {
      contact: {
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' '),
        email: email,
        phone: phone,
        customField: {
          message: message || '',
          fileUrl: fileUrl
        }
      },
      locationId: GOHIGHLEVEL_LOCATION_ID
    };

    const goHighLevelResponse = await axios.post('https://rest.gohighlevel.com/v1/contacts/', goHighLevelData, {
      headers: {
        'Authorization': `Bearer ${GOHIGHLEVEL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (goHighLevelResponse.status !== 200) {
      throw new Error('Failed to send data to GoHighLevel');
    }

    return NextResponse.json({ message: 'Information request submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 });
  }
}

