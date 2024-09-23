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
    // Replace with your actual GoHighLevel endpoint
    const goHighLevelEndpoint = process.env.GOHIGHLEVEL_APPOINTMENT_ENDPOINT;
    const goHighLevelApiKey = process.env.GOHIGHLEVEL_API_KEY;

    if (!goHighLevelEndpoint || !goHighLevelApiKey) {
      throw new Error('GoHighLevel configuration is missing');
    }

    await axios.post(goHighLevelEndpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${goHighLevelApiKey}`,
      },
    });

    return NextResponse.json({ message: 'Appointment scheduled successfully' });
  } catch (error) {
    console.error('GoHighLevel API error:', error);
    return NextResponse.json({ error: 'Failed to schedule appointment' }, { status: 500 });
  }
}
