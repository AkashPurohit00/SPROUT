import React from 'react';
import Image from 'next/image';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-amber-950">
        {/* Background Image */}
        <Image
          src="/images/pic5.jpg"
          alt="Contact Us"  
          fill
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Overlay Section */}
        <div className="relative z-10 flex items-center justify-center min-h-[120vh] px-4 py-12 sm:py-16">
          <div className="bg-blue-200/50 backdrop-blur-md rounded-xl p-6 sm:p-8 md:flex md:flex-row flex-col w-full max-w-5xl shadow-2xl min-h-[100vh]">

            {/* Left Contact Info */}
            <div className="md:w-1/2 w-full pr-0 md:pr-8 mb-6 md:mb-0 text-black">
              <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-20 mt-10">Contact Information</h2>
              <ul className="space-y-6 sm:space-y-8 text-base sm:text-lg">
                <li>📞 +91-9811744587 / +91-7838135315</li>
                <li>📧 sproutresearch.equity@gmail.com</li>
                <li>📌 A 35 FIRST FLOOR, Chittaranjan Park, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019</li>
              </ul>
            </div>

            {/* Right Form */}
            <form className="md:w-1/2 w-full bg-white rounded-xl p-6 sm:p-8 mx-0 sm:mx-4 md:mx-0 shadow-lg space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-6">Say Hello!</h2>

              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded"
                required
                name="firstName"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded"
                required
                name="email"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-3 border rounded"
                required
                name="contact"
              />

              {/* Checkboxes */}
              <div className="space-y-2">
                <p className="font-semibold text-gray-700">Select Your Queries:</p>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="query1" className="h-4 w-4" />
                  <span>Get in touch to subscribe to our PCG research</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="query2" className="h-5 w-6" />
                  <span>Register interest as a Corporate Entity / NRI for Sprout Research-Retail Subscription</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="query2" className="h-4 w-4" />
                  <span>Subscribe to our weekly insights</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="query3" className="h-4 w-4" />
                  <span>Other Queries</span>
                </label>
              </div>

              {/* Optional Message */}
              <textarea
                placeholder="Your Message (Optional)"
                rows={4}
                className="w-full p-3 border rounded"
                name="message"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 rounded font-semibold hover:bg-blue-500 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
