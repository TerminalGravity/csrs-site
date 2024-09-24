'use client';

import { useState } from 'react';
import Layout from '@/app/components/Layout';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  file: FileList;
  message: string;
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
    formData.append('message', data.message);
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
    <Layout title="Request Solar Estimate | Canyon State Solar & Roofing" description="Request a solar estimate by uploading your electrical bill.">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-sunsetOrange">Request Solar Estimate</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">Electrical Bill</label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, JPEG, or PNG (MAX. 10MB)</p>
                </div>
                <input
                  {...register('file', { required: 'Electrical bill is required' })}
                  type="file"
                  id="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />
              </label>
            </div>
            {errors.file && <p className="mt-2 text-sm text-red-600">{errors.file.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
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
            Your information has been successfully submitted. We'll get back to you shortly with your solar estimate!
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
