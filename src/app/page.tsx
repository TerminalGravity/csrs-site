import Layout from './components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-sunsetOrange font-sans">Harness the Power of the Arizona Sun</h1>
          <p className="text-xl mb-8 text-gray-700">Your trusted partner for innovative roofing and solar solutions in the Grand Canyon State.</p>
          <div className="flex gap-4">
            <Link href="/info-request" className="bg-cactusGreen hover:bg-skyBlue text-white font-bold py-2 px-4 rounded transition duration-300">
              Request Information
            </Link>
            <Link href="/schedule-appointment" className="bg-sunsetOrange hover:bg-skyBlue text-white font-bold py-2 px-4 rounded transition duration-300">
              Schedule an Appointment
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/solar-roof.jpg"
            alt="Solar Roof Installation in Arizona"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-sunsetOrange font-sans">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-desertSand p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-sunsetOrange">Solar Panel Installation</h3>
            <p className="text-gray-700">Harness the power of the Arizona sun with our state-of-the-art solar panel systems.</p>
          </div>
          <div className="bg-desertSand p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-sunsetOrange">Roof Repair and Replacement</h3>
            <p className="text-gray-700">Protect your home from the harsh desert climate with our expert roofing services.</p>
          </div>
          <div className="bg-desertSand p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-sunsetOrange">Energy Efficiency Consulting</h3>
            <p className="text-gray-700">Optimize your home's energy usage to beat the Arizona heat while saving money.</p>
          </div>
          <div className="bg-desertSand p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-sunsetOrange">Maintenance and Support</h3>
            <p className="text-gray-700">Keep your systems running smoothly in the desert environment with our comprehensive maintenance plans.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
