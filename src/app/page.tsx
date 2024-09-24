import Layout from './components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { FaSolarPanel, FaHome, FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-sunsetOrange font-sans leading-tight">Power Your Home with Solar & Protect it with Quality Roofing</h1>
          <p className="text-2xl mb-10 text-gray-800">Experience energy independence and superior home protection with our innovative solar and roofing solutions.</p>
          <div className="flex gap-6">
            <Link href="/info-request" className="bg-cactusGreen hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md">
              Request Solar Estimate
            </Link>
            <Link href="/schedule-appointment" className="bg-sunsetOrange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md">
              Schedule Roofing Estimate
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

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-10 text-sunsetOrange font-sans text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange flex flex-col items-center text-center">
            <FaSolarPanel className="text-5xl mb-4 text-sunsetOrange" />
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Solar Installation</h3>
            <p className="text-gray-800">Harness the power of the Arizona sun with our state-of-the-art solar panel systems.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange flex flex-col items-center text-center">
            <FaHome className="text-5xl mb-4 text-sunsetOrange" />
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Roofing Repair & Replacement</h3>
            <p className="text-gray-800">Protect your home from the harsh desert climate with our expert roofing services.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-sunsetOrange flex flex-col items-center text-center">
            <FaChartLine className="text-5xl mb-4 text-sunsetOrange" />
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Energy Efficiency Consulting</h3>
            <p className="text-gray-800">Optimize your home's energy usage to beat the Arizona heat while saving money.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-10 text-sunsetOrange font-sans text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-desertSand p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Local Expertise</h3>
            <p className="text-gray-800">With years of experience in Arizona, we understand the unique challenges and opportunities of our climate.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Quality Materials</h3>
            <p className="text-gray-800">We use only the highest quality, most durable materials to ensure long-lasting performance in the desert heat.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Customer Satisfaction</h3>
            <p className="text-gray-800">Our commitment to excellence has earned us a reputation for superior customer service and satisfaction.</p>
          </div>
          <div className="bg-desertSand p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-sunsetOrange">Comprehensive Solutions</h3>
            <p className="text-gray-800">From solar to roofing, we offer end-to-end solutions to meet all your home energy and protection needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-10 text-sunsetOrange font-sans text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg italic">
            <p className="mb-4">"Canyon State Solar & Roofing transformed our home. We're saving on energy bills and our roof looks amazing!"</p>
            <p className="font-bold">- Sarah J., Phoenix</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg italic">
            <p className="mb-4">"Professional, efficient, and friendly. They made going solar a breeze. Highly recommended!"</p>
            <p className="font-bold">- Mike T., Scottsdale</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
