import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { createAppointmentsTable } from '@/lib/db';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, appointmentDate } = body;

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

    return NextResponse.json({ message: 'Appointment scheduled successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to schedule appointment' }, { status: 500 });
  }
}
