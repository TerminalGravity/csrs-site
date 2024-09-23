import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Roofing & Solar Company', description = 'Professional roofing and solar services.' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Canyon State Solar & Roofing
          </Link>
          <div className="space-x-4">
            <Link href="/info-request" className="hover:underline">
              Request Info
            </Link>
            <Link href="/schedule-appointment" className="hover:underline">
              Schedule Appointment
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
      <footer className="bg-gray-200 mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Canyon State Solar & Roofing. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
