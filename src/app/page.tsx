import Layout from './components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-sunsetOrange font-sans leading-tight">Harness the Power of the Arizona Sun</h1>
          <p className="text-2xl mb-10 text-gray-800">Your trusted partner for innovative roofing and solar solutions in the Grand Canyon State.</p>
          <div className="flex gap-6">
            <Link href="/info-request" className="bg-cactusGreen hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md">
              Get a Free Quote
            </Link>
            <Link href="/schedule-appointment" className="bg-sunsetOrange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md">
              Book Now
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
      <section className="mt-24 mb-16">
        <h2 className="text-4xl font-bold mb-10 text-sunsetOrange font-sans text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Solar Panel Installation</h3>
            <p className="text-gray-800">Harness the power of the Arizona sun with our state-of-the-art solar panel systems.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Roof Repair and Replacement</h3>
            <p className="text-gray-800">Protect your home from the harsh desert climate with our expert roofing services.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Energy Efficiency Consulting</h3>
            <p className="text-gray-800">Optimize your home's energy usage to beat the Arizona heat while saving money.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Maintenance and Support</h3>
            <p className="text-gray-800">Keep your systems running smoothly in the desert environment with our comprehensive maintenance plans.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
