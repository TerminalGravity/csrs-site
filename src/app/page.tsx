import Layout from './components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to SolarRoof Pro</h1>
          <p className="text-xl mb-8">Your trusted partner for innovative roofing and solar solutions.</p>
          <div className="flex gap-4">
            <Link href="/info-request" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Request Information
            </Link>
            <Link href="/schedule-appointment" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Schedule an Appointment
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/solar-roof.jpg"
            alt="Solar Roof Installation"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Solar Panel Installation</h3>
            <p>Harness the power of the sun with our state-of-the-art solar panel systems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Roof Repair and Replacement</h3>
            <p>Protect your home with our expert roofing services, using high-quality materials.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Energy Efficiency Consulting</h3>
            <p>Optimize your home's energy usage with our professional consulting services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Maintenance and Support</h3>
            <p>Keep your systems running smoothly with our comprehensive maintenance plans.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
