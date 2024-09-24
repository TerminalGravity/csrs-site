import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { createAppointmentsTable } from '@/lib/db';
import axios from 'axios';

const GOHIGHLEVEL_API_KEY = process.env.GOHIGHLEVEL_API_KEY;
const GOHIGHLEVEL_LOCATION_ID = process.env.GOHIGHLEVEL_LOCATION_ID;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, appointmentDate, message } = body;

  if (!name || !email || !phone || !appointmentDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Ensure the appointments table exists
    await createAppointmentsTable();

    // Insert the appointment into the database
    await sql`
      INSERT INTO appointments (name, email, phone, appointment_date)
      VALUES (${name}, ${email}, ${phone}, ${new Date(appointmentDate)})
    `;

    // Send data to GoHighLevel
    const goHighLevelData = {
      contact: {
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' '),
        email: email,
        phone: phone,
        customField: {
          appointmentDate: appointmentDate,
          message: message || ''
        }
      },
      locationId: GOHIGHLEVEL_LOCATION_ID,
      calendar: {
        title: 'Roofing Estimate Appointment',
        description: message || 'Roofing estimate appointment',
        start: appointmentDate,
        end: new Date(new Date(appointmentDate).getTime() + 60*60*1000).toISOString() // 1 hour duration
      }
    };

    const goHighLevelResponse = await axios.post('https://rest.gohighlevel.com/v1/appointments/', goHighLevelData, {
      headers: {
        'Authorization': `Bearer ${GOHIGHLEVEL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (goHighLevelResponse.status !== 200) {
      throw new Error('Failed to send data to GoHighLevel');
    }

    return NextResponse.json({ message: 'Appointment scheduled successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to schedule appointment' }, { status: 500 });
  }
}
