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
      <footer className="bg-adobeBeige mt-24 py-10 text-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-sunsetOrange mb-2">Canyon State Solar & Roofing</h3>
              <p>Your trusted partner for innovative roofing and solar solutions in Arizona.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-sunsetOrange mb-2">Contact Us</h4>
              <p>Email: info@canyonstatesolar.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold text-sunsetOrange mb-2">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block hover:text-sunsetOrange transition duration-300">Privacy Policy</Link>
                <Link href="/terms-of-service" className="block hover:text-sunsetOrange transition duration-300">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p>&copy; 2024 Canyon State Solar & Roofing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
