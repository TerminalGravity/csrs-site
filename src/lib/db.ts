import { sql } from '@vercel/postgres';

export async function createAppointmentsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Appointments table created successfully');
  } catch (error) {
    console.error('Error creating appointments table:', error);
  }
}

export async function createInfoRequestsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS info_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        file_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Info requests table created successfully');
  } catch (error) {
    console.error('Error creating info requests table:', error);
  }
}
