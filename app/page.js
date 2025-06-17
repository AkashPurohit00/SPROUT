'use client'

import Image from "next/image";
import React from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Section 1 */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="./images/pic5.jpg"
          alt="Background"
          fill
          className="object-cover object-top"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-20 text-black">
          <h1 className="text-6xl font-medium mb-8">Sprout Partners Private Limited</h1>
          <p className="text-lg">
            Leverage the unparalleled expertise and strategic guidance of Sprout Partners. Our team excels in financial restructuring, developing business
          </p>
          <p className="text-lg">
            strategies and crafting tailored financial models and strategic insights across a wide range of sectors. With 75 years of collective experience
          </p>
          <p className="text-lg">
            and deep industry-specific knowledge, we empower organizations to make informed decisions in corporate finance and navigate capital
          </p>
          <p className="text-lg mb-10">
            markets with confidence.
          </p>
          <button className="bg-white text-black px-8 py-2 font-semibold border border-black rounded-full transition-transform duration-300 hover:-translate-y-2">
            Enquire Now 
          </button>
        </div>
      </div>

      
      {/* Section 2 */}
      <div className="w-full h-[110vh] bg-white">
        <div className="w-full min-h-[100vh] bg-white flex flex-col items-center justify-start py-3.5 pt-14 px-6 space-y-12">
          <h1 className="text-5xl text-center font-medium">
            Why Choose Sprout Partners?
          </h1>

          <p className="max-w-3xl text-center text-lg leading-relaxed">
            Empower your organization with the exceptional guidance of Sprout Partners. Together, we’ll unlock opportunities and create a clear path for<br />
            <span className="block">sustained growth and success.</span>
          </p>

          {/* Three horizontally aligned boxes */}
          <div className="flex flex-row items-center justify-center space-x-12">
            <div className="w-[25rem] h-80 border mb-28 border-black rounded-md bg-white flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-3.5">Unmatched Expertise</h1>
              <p>
                With 75 years of collective experience across diverse
              </p>
              <p>sectors in the capital markets, we have a proven</p>
              <p>track record of driving success</p>
            </div>
            <div className="w-[25rem] h-80 mt-36 border border-black rounded-md bg-white flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-3.5">Strategic Insights</h1>
              <p>
                Our innovative solutions are driven by data analysis
              </p>
              <p>and deep industry expertise, delivering actionable</p>
              <p>insights to help you navigate complexity</p>
            </div>
            <div className="w-[25rem] h-80 mb-28 border border-black rounded-md bg-white flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-3.5">Collaborative Approach</h1>
              <p>
                We work hand-in-hand with your team , aligning our
              </p>
              <p>expertise with your goals to deliver tailored financial</p>
              <p>strategies</p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full h-[100vh] bg-gray-100">
        <div className="w-full h-full flex flex-col items-center justify-start pt-14 px-6 space-y-8">
          <h1 className="text-5xl mb-4 font-medium">Our Process: From Seed to Success</h1>
          <h2 className="text-xl text-gray-600 text-center">
            Let us guide you through every stage of your journey, from seed to success
          </h2>

          {/* Flex row for steps + image */}
          <div className="flex flex-row w-full max-w-[1200px] mt-10">
            {/* Left side: Steps (50%) */}
            <div className="flex flex-col space-y-2 w-1/2 pr-6">
              <div className="p-6 bg-gray-100 transition-transform transition-colors duration-300 hover:-translate-y-2 hover:bg-blue-100 rounded-lg">
                <h1 className="text-xl font-semibold mb-2">Planting the Seed</h1>
                <p>
                  We begin by understanding your business needs, challenges and <br />
                  aspirations to lay a strong foundation for success.
                </p>
              </div>

              <div className="p-6 bg-gray-100 transition-transform transition-colors duration-300 hover:-translate-y-2 hover:bg-blue-100 rounded-lg">
                <h1 className="text-xl font-semibold mb-2">Nurturing the Growth</h1>
                <p>
                  We work closely with you to develop tailored strategies, optimize operations, and ensure steady progress.
                </p>
              </div>

              <div className="p-6 bg-gray-100 transition-transform transition-colors duration-300 hover:-translate-y-2 hover:bg-blue-100 rounded-lg">
                <h1 className="text-xl font-semibold mb-2">Harvesting Success</h1>
                <p>
                  Finally, we help you scale and sustain your growth with expert insights and execution support.
                </p>
              </div>
            </div>

            {/* Right side: Image (50%) */}
            <div className="w-1/2 flex justify-center items-center">
              <img
                src="./images/pic4.jpg"
                alt="Growth Illustration"
                className="w-[100%] h-[400px] rounded-md shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full h-[100vh] bg-white ">
        <h1 className="text-5xl text-center mt-12 font-medium">Get to Know Us</h1>
        <div className="w-full h-full flex flex-row">
          {/* Left: Text Content */}
          <div className="w-1/2 pr-6 ml-14 flex flex-col justify-center">
            <p className="text-lg leading-relaxed">
              In today’s dynamic and challenging financial environment, choosing the right path <br />
              is essential for long-term business success. At Sprout Partners, we understand <br />
              the importance of tailored guidance and expert advice to help you stay ahead.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Our team excels in providing strategic advice, financial restructuring, forensic <br />
              analysis, and developing advanced financial models customized for various <br />
              industries. With 75 years of collective experience, we provide the knowledge, <br />
              insight, and strategic acumen needed to confidently navigate complexities and <br />
              seize opportunities.
            </p>
            <button className="bg-white border mt-6 border-black rounded-full px-0 py-2 transition-transform duration-300 hover:-translate-y-2">Read More</button>
          </div>

          {/* Right: Image */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative">
              <img
                src="./images/pic3.jpg"
                alt="Financial strategy illustration"
                className="max-w-full h-auto rounded-lg"
              />

              {/* Quote */}
              <div className="absolute bottom-20 right-[-40px] bg-white bg-opacity-70 text-black text-lg font-serif p-3 rounded-md whitespace-nowrap">
                <p>
                  “We don’t have to be smarter than the rest. We have
                </p>
                <p>
                  to be more disciplined than the rest”
                </p>
                <p className="mt-1 text-right text-xs">– Warren Buffett</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 – Our Services */}
      <section id="services" className="w-full bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              All-encompassing solutions for your business’s financial journey
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div>
              <img src="./images/pic1.jpg" alt="Our Process" className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>

            {/* Service Steps */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 transform hover:-translate-y-2 hover:bg-blue-100 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center transition duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive research on listed and unlisted companies, equipping businesses with actionable insights to make informed decisions.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 transform hover:-translate-y-2 hover:bg-blue-100 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center transition duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Fundraising Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialization in advising and facilitating strategic capital-raising solutions in both primary funding and secondary transaction opportunities.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 transform hover:-translate-y-2 hover:bg-blue-100 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center transition duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Advisory Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advisory services to help corporates optimize their financial and capital structures, and align their business models towards success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Ready to work with us? */}
      <section id="ready-to-work" className="bg-blue-50 py-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Content */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Ready to work with us ?
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Reach out and we can create magic together
              </p>
            </div>
            {/* Button */}
           <div>
  <a
    href="#contact"
    className="inline-flex items-center bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 transition-transform"
  >
    Get Started
    <svg
      className="w-5 h-5 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </a>
</div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
