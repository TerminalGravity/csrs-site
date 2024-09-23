import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Canyon State Solar & Roofing', description = 'Professional roofing and solar services in Arizona.' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <header className="bg-sunsetOrange text-white p-4 shadow-md">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-sans mb-4 md:mb-0">
            Canyon State Solar & Roofing
          </Link>
          <div className="space-x-4 font-sans">
            <Link href="/info-request" className="hover:text-skyBlue transition duration-300">
              Request Info
            </Link>
            <Link href="/schedule-appointment" className="hover:text-skyBlue transition duration-300">
              Schedule Appointment
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4 font-body">{children}</main>
      <footer className="bg-adobeBeige mt-12 py-6 text-sunsetOrange">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Canyon State Solar & Roofing. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
