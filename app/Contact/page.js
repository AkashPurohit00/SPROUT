import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

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
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">Say Hello!</h2>

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
    <div className='min-h-screen flex flex-col items-center mb-[-10px] sm:mb-[-20px] lg:mb-[-80px]'>
  <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'>Our Location</h1>
  <div className="pt-16 w-full max-w-[1400px] px-4 sm:px-6 lg:px-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.927846691444!2d77.2378744751996!3d28.541888388191754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d53fffffff%3A0xda321c128846ffae!2sIndure%20House%20(savex%20technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1750328431513!5m2!1sen!2sin"
      className="w-full h-[700px] sm:h-[700px] lg:h-[500px]"
      style={{ border: 0, borderRadius: '10px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
        <Footer />
    </>
  );
}
