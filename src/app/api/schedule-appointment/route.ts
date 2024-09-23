import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, appointmentDate } = body;

  if (!name || !email || !phone || !appointmentDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const data = {
    name,
    email,
    phone,
    appointmentDate,
  };

  try {
    await axios.post('https://api.gohighlevel.com/v1/your-endpoint', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GOHIGHLEVEL_API_KEY}`,
      },
    });

    return NextResponse.json({ message: 'Appointment data sent to GoHighLevel' });
  } catch (error) {
    console.error('GoHighLevel API error:', error);
    return NextResponse.json({ error: 'Failed to send data to GoHighLevel' }, { status: 500 });
  }
}
