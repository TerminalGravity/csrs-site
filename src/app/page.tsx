import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roofing & Solar Company</title>
        <meta name="description" content="Professional roofing and solar services." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Roofing & Solar Company</h1>
        <p className="text-xl mb-8">Your trusted partner for roofing and solar solutions.</p>
        <div className="flex gap-4">
          <Link href="/info-request" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Request Information
          </Link>
          <Link href="/schedule-appointment" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Schedule an Appointment
          </Link>
        </div>
      </main>
    </>
  );
}
