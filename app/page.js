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
    src="/images/pic5.jpg"
    alt="Background"
    fill
    className="object-cover object-top"
  />

  <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20">
    
    {/* Heading  */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8 lg:whitespace-nowrap">
      Sprout Partners Private Limited
    </h1>

    {/* Paragraphs  */}
    <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
      Leverage the unparalleled expertise and strategic guidance of Sprout Partners. Our team excels in financial restructuring, developing business
    </p>
    <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
      strategies and crafting tailored financial models and strategic insights across a wide range of sectors. With 75 years of collective experience
    </p>
    <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
      and deep industry-specific knowledge, we empower organizations to make informed decisions in corporate finance and navigate capital
    </p>
    <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6 lg:mb-10 max-w-5xl lg:whitespace-nowrap">
      markets with confidence.
    </p>

    <button className="bg-white text-black px-6 sm:px-8 py-2 font-semibold border border-black rounded-full transition-transform duration-300 hover:-translate-y-2">
      Enquire Now
    </button>
  </div>
</div>


      
      {/* Section 2 */}
   <section id="about" className="py-20 bg-gray-50 w-full min-h-screen">
  <div className="container max-w-7xl mx-auto px-6">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Choose Sprout Partners?
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Empower your organization with the exceptional guidance of Sprout Partners. Together, we’ll unlock opportunities and create a clear path for sustained growth and success.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
      {/* Feature 1 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="flex justify-center mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Unmatched Expertise</h3>
        <p className="text-gray-600 text-center leading-relaxed">
          With 75 years of collective experience across diverse sectors in the capital markets, we have a proven track record of driving success
        </p>
      </div>

      {/* Feature 2 */}
     <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-16 w-full h-full">
  <div className="flex justify-center mb-6">
    <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Strategic Insights</h3>
  <p className="text-gray-600 text-center leading-relaxed">
    Our innovative solutions are driven by data analysis and deep industry expertise, delivering actionable insights that drive growth and value
  </p>
</div>



      {/* Feature 3 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="flex justify-center mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Collaborative Approach</h3>
        <p className="text-gray-600 text-center leading-relaxed">
          We work hand-in-hand with your team, aligning our expertise with your goals to deliver tailored financial strategies
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Section 3 */}
   
    <section id="research" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process: From Seed to Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Let us guide you through every stage of your journey, from seed to success
          </p>
        </div>

        {/* Grid: Process steps + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-100 bg-gray-100 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Planting the Seed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We begin by understanding your business needs, challenges and aspirations to lay a strong foundation for success.
                  </p>
                </div>
              </div>
              <div className="w-0.5 h-8 bg-gray-300 ml-6 mt-4"></div>
            </div>

            {/* Step 2 */}
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-100 bg-gray-100 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">In-Depth Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through comprehensive research, financial modeling and industry benchmarking, we identify key opportunities and challenges.
                  </p>
                </div>
              </div>
              <div className="w-0.5 h-8 bg-gray-300 ml-6 mt-4"></div>
            </div>

            {/* Step 3 */}
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-100 bg-gray-100 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Strategic Roadmap</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unlocking valuable insights, we craft a tailored strategy designed to achieve your goals efficiently and effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Image */}
          <div className="w-full h-full">
            <Image
              src="/images/pic4.jpg"
              alt="Our Process"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  


      {/* Section 4 */}
     <section id="get-to-know-us" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
      Get to Know Us
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
      {/* Text Content */}
      <div className="space-y-6 flex flex-col justify-center h-full">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          In today’s dynamic and challenging financial environment, choosing the
          right path is essential for long-term business success. At Sprout
          Partners, we understand the importance of tailored guidance and expert
          advice to help you stay ahead.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Our team excels in providing strategic advice, financial restructuring,
          forensic analysis, and developing advanced financial models customized
          for various industries. With 75 years of collective experience, we
          provide the knowledge, insight, and strategic acumen needed to
          confidently navigate complexities and seize opportunities.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="border-2 border-gray-300 rounded-full px-6 py-2 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Image and Quote */}
      <div className="relative flex justify-center items-center h-full">
        {/* Image with Animation */}
       <div className="rounded-lg w-full max-w-md overflow-hidden">
  <img
    src="/images/pic3.jpg"
    alt="Financial Charts"
    className="w-full h-auto object-cover "
  />
</div>

        {/* Quote with Dotted Border */}
        <div className="absolute bottom-2 right-3.5 bg-white p-6 rounded-lg shadow-lg border-l-8 border-dotted border-purple-500 max-w-[400px]">
          <p className="text-gray-700 italic text-lg">
            "We don’t have to be smarter than the rest. We have to be more
            disciplined than the rest"
          </p>
          <p className="text-gray-900 font-semibold mt-2 text-right">
            – Warren Buffett
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


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
              <img src="/images/pic1.jpg" alt="Our Process" className="w-full h-full object-cover rounded-lg shadow-md" />
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
