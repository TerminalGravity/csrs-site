'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  file: FileList;
};

export default function InfoRequest() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (data.file[0]) {
      formData.append('file', data.file[0]);
    }

    try {
      const response = await fetch('/api/info-request', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Request Information | SolarRoof Pro" description="Request information about our roofing and solar services.">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Request Information</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid phone number, please enter 10 digits'
                }
              })}
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Electrical Bill</label>
            <input
              {...register('file', { required: 'Electrical bill is required' })}
              type="file"
              id="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {errors.file && <p className="mt-1 text-sm text-red-600">{errors.file.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            Your information has been successfully submitted. We'll be in touch soon!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            There was an error submitting your information. Please try again later.
          </div>
        )}
      </div>
    </Layout>
  );
}
