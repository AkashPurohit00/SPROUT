import React from 'react';
import Header from '@/Components/Header';

export default function Page() {
  return (
    <>
      <Header />
      {/* Contact Page Content */}
      <div className="relative min-h-screen bg-amber-950">
        {/* Background Image */}
        <img
          src="/images/pic1.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Overlay Section with transparent blue container */}
        <div className="relative z-10 flex items-center justify-center min-h-[120vh] px-4 py-12 sm:py-16">
          <div className="bg-blue-200/50 backdrop-blur-md rounded-xl p-6 sm:p-8 md:flex md:flex-row flex-col w-full max-w-5xl shadow-2xl min-h-[100vh]">

            {/* Left Contact Info */}
            <div className="md:w-1/2 w-full pr-0 md:pr-8 mb-6 md:mb-0 text-black">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact Information</h2>
              <ul className="space-y-6 sm:space-y-8 text-base sm:text-lg">
                <li>📞 +91-7838135315</li>
                <li>📧 team@sproutpartners.in</li>
                <li>
                  🏢 2nd Floor, Indure House,<br />
                  Savitri Cinema Complex,<br />
                  Greater Kailash-II,<br />
                  New Delhi-110048
                </li>
              </ul>
            </div>

            {/* Right Form with white bg, rounded corners, margin inside blue container */}
            <form className="md:w-1/2 w-full bg-white rounded-xl p-6 sm:p-8 mx-0 sm:mx-4 md:mx-0 shadow-lg space-y-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-6">Say Hello!</h2>

  <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-4 sm:space-y-0">
    <input
      type="text"
      placeholder="First Name"
      className="w-full sm:w-1/2 p-3 border rounded"
      required
      name="firstName"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="w-full sm:w-1/2 p-3 border rounded"
      required
      name="lastName"
    />
  </div>

  <input
    type="email"
    placeholder="Email Address"
    className="w-full p-3 border rounded"
    required
    name="email"
  />

  <input
    type="tel"
    placeholder="Contact Number"
    className="w-full p-3 border rounded"
    required
    name="contact"
  />

  <textarea
    placeholder="Your Message"
    rows={5}
    className="w-full p-3 border rounded"
    required
    name="message"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-blue-400 text-white py-3 rounded font-semibold hover:bg-blue-500 transition"
  >
    Submit Application
  </button>
</form>

          </div>
        </div>
      </div>
      {/*location of the comapny*/}
      <div className='min-h-screen '>
        
      </div>
    </>
  );
}
