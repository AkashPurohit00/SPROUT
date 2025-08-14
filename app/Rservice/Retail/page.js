'use client'
import React from 'react'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import SampleReportSection from '@/Components/Samplereport'
import Newsletter from '@/Components/Newsletter'

const page = () => {
  const advantages = [
    {
      id: 1,
      image: "/images/rmage1.png",
      title: "Curated Selection",
      description: "Receive 35-40 well- researched investment ideas each year, carefully chosen for their growth potential and supported by detailed investment argument"
    },
    {
      id: 2,
      image: "/images/rmage2.png",
      title: "Independent and Unbiased Research",
      description: "Our research is free from the conflicts of interest often found in sell-side reports. By maintaining independence, we provide objective, trustworthy analysis that retail investors can rely on to make confident investment choices"
    },
    {
      id: 3,
      image: "/images/rmage3.png",
      title: "Affordable Plans",
      description: "Designed with young and emerging investors in mind, our affordable subscription plans make professional-grade research accessible. We empower beginners to learn about and invest in the stock market without breaking the bank"
    },
    {
      id: 4,
      image: "/images/rmage4.png",
      title: "Short- to Medium-Term Investment Focus",
      description: "Our analysis aligns with a 9-12 month investment horizon, offering projections that help retail investors plan for short- to medium-term gains. This approach balances growth potential with manageable risk for optimal results"
    },
    {
      id: 5,
      image: "/images/rmage5.png",
      title: "Accessible and Actionable Insights",
      description: "We prioritize intuitive, user-friendly interfaces that deliver simplified insights, practical stock ideas, and educational content. Complex financial data is transformed into clear, easy-to-understand information, empowering retail investors to confidently navigate the market"
    },
    {
      id: 6,
      image: "/images/rmage6.png",
      title: "Pursuit of High-Growth Opportunities",
      description: "Our research targets high-growth potential across various market capitalizations, from small-cap gems to established large-caps. This focus ensures a diversified portfolio of top-tier opportunities, maximizing returns for retail investors"
    },
    
  ];
  

  return (
  <>
    <Header/>

    {/* Background Image and Content */}
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <Image
        src="/images/pic5.jpg" 
        alt="Background"
        fill
        className="object-cover object-top z-0"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center z-10">
        {/* Logo and Retail Text - Centered Together */}
        <div className="flex flex-col justify-center items-center mb-6 sm:mb-8 md:mb-7 lg:mb-7">

          {/* Divider - Seamlessly connected to logo */}
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-sans mb-2 lg:mb-4 lg:whitespace-nowrap">
            <h1 className="leading-none">Sprout Research-Retail</h1>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-lg max-w-4xl lg:whitespace-nowrap text-center mb-4 lg:mb-4 italic">
            <p>Research Reports Subscription for Retail Investors</p>
          </div>
          
        </div>
        
        
        {/* Paragraphs - Properly spaced below the logo unit */}
        <div className="text-sm sm:text-base md:text-lg lg:text-lg max-w-5xl">
          <p className="leading-tight ml-4 mr-4 mb-4">
           Our research empowers retail investors by delivering professional-grade, unbiased financial analysis tailored to young, emerging, and cost-conscious individuals. We simplify complex market insights, offering actionable stock ideas across small-cap to large-cap opportunities for short- to medium-term investing. With affordable subscription plans, we provide clear, high-growth-focused reports to help beginners confidently navigate the stock market without financial strain
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white w-full py-16 px-6 sm:px-12 lg:px-24">      
      <div className="flex justify-center px-4 py-10">
  <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-200 max-w-6xl w-full transition-transform duration-300 group hover:scale-[1.02]">
    <div className="relative space-y-4">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
        What You Get with a Sprout Research-Retail Subscription?
      </h2>

      <ul className="space-y-4 max-w-5xl items-center text-center flex flex-col mx-auto">
        {[
          "Research service focused on fundamental and forensic analysis, suitable for active investors",
          "35-40 stocks annually with detailed research notes",
          "Offers long-term, tactical, and high-risk/high-reward picks, plus weekend insights on macro topics and sectors",
          "Subscription pricing: INR 25,000/year or INR 15,000/half-year",
        ].map((item, index) => (
          <li key={index} className="flex items-start text-gray-700 text-xl sm:text-2xl leading-relaxed">
            <img
              src="/images/LEAVESONLY2.png" // Replace with your actual image path
              alt="bullet point"
              className="w-6 h-8 mt-1 mr-3"
            />
            <span className="flex-1">
              {index === 3 ? (
                <>
                  Subscription pricing: {' '}
                  <span className="font-semibold text-gray-900">INR 25,000/year</span>
                  <span className=""> or </span>
                  <span className="font-semibold text-gray-900">INR 15,000/half-year</span>
                </>
              ) : (
                item
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
      </div>
    </div>


    {/*section 3  */}
    {/* <section id="about" className="bg-gray-100 w-full py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-32 w-full min-h-[300px] sm:min-h-[350px] lg:h-3/4 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="bg-white border-2 border-gray-300 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Early Identification</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-grow">
              Leverage advanced screening tools, market trends, and strategic foresight to pinpoint opportunities before they gain widespread attention.
            </p>
          </div>

       
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-12 w-full min-h-[280px] sm:min-h-[320px] lg:h-2/3 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="bg-white border-2 border-gray-300 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Rigorous Analysis</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-grow">
              Conduct exhaustive due diligence to validate the investment thesis.
            </p>
          </div>

          
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-32 w-full min-h-[300px] sm:min-h-[350px] lg:h-3/4 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="bg-white border-2 border-gray-300 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Thematic Overlay</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-grow">
              Identify transformative macro trends and align investments with these growth drivers.
            </p>
          </div>
        </div>
      </div>
    </section> */}


    {/*Section 4 with Image and Text */}
    <div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium mb-4">
            Sprout Research Advantage
          </h1>
          <p className='text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-12    '>
          Our stock research service is tailored to empower retail investors with high-quality, accessible, and actionable insights. Here’s why it stands out:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-100"
              >
                {/* Circular Image Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-blue-400 transition- duration-300 group-hover:rotate-6 transform">
                    <img
                      src={advantage.image}
                      alt={advantage.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay effect */}
                    
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-center text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>
                
                {/* Animated bottom border */}
                <div className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
    </div>  


    
    <div className="bg-white w-full py-16 px-6 sm:px-12 lg:px-24">
     
      
      <div className="flex justify-center">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 max-w-6xl group">
          <div className="relative">
             <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 mb-4">
              Why It Fits Retail Investors?
            </h2>
            <p className="text-gray-700 text-xl md:text-1xl lg:text-1xl leading-relaxed text-center ">
              Our service is built to bridge the gap between complex financial research and the needs of retail investors. By combining affordability, independence, and a focus on education with high-quality analysis, we empower new and young investors to build wealth confidently in the stock market.
            </p>
            
          
          </div>
        </div>
      </div>
    </div>

      {/* ADD YOUR SAMPLE REPORT SECTION HERE */}
    <SampleReportSection />

    

    <section id="ready-to-work" className="bg-gradient-to-b from-white to-slate-50/30 py-12 mb-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Subscribe to Sprout Research - Retail below
          </h2>
          {/* <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Select the category that best describes you to access tailored financial solutions
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Individual Button - Left Side */}
          <div className="flex-1 max-w-sm mx-auto lg:mx-0">
            <Link
              href="https://live.meon.co.in/sproutresearch/analyst"
              className="group relative block w-full h-full"
            >
              <div className="relative bg-white rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col justify-between overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Individual Investors
                  </h3>
                  {/* <p className="text-gray-600 mb-6 leading-relaxed">
                    Personalized investment solutions designed for Indian individuals seeking financial growth
                  </p> */}
                  
                  {/* Features */}
                  {/* <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      Tax-efficient planning
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      Mutual funds & SIPs
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      Portfolio management
                    </div>
                  </div> */}
                </div>

                {/* CTA */}
                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-100 group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300">
                    <span className="font-semibold text-blue-700">Subscribe</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full group-hover:bg-blue-400 transition-colors delay-75"></div>
                      <div className="w-2 h-2 bg-blue-200 rounded-full group-hover:bg-blue-300 transition-colors delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center my-4 shadow-sm">
              <span className="text-gray-400 text-xs font-medium">OR</span>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Horizontal Divider for Mobile */}
          <div className="lg:hidden flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="w-12 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-4 shadow-sm">
              <span className="text-gray-400 text-xs font-medium">OR</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Corporate Button - Right Side */}
          <div className="flex-1 max-w-sm mx-auto lg:mx-0">
            <Link
              href="/Soon"
              className="group relative block w-full h-full"
            >
              <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col justify-between overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  SOON
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                    NRI & Corporates
                  </h3>
                  {/* <p className="text-gray-600 mb-6 leading-relaxed">
                    Specialized financial services for Non-Resident Indians and Corporate entities
                  </p> */}
                  
                  {/* Features */}
                  {/* <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                      NRI investment solutions
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                      Corporate treasury management
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                      Cross-border transactions
                    </div>
                  </div> */}
                </div>

                {/* CTA */}
                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200 group-hover:from-slate-100 group-hover:to-slate-200/50 transition-all duration-300">
                    <span className="font-semibold text-slate-600">Coming Soon</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-6 h-1 bg-slate-300 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Need help choosing? <a href="/Contact" className="text-blue-600 hover:text-blue-700 font-medium underline">Contact our experts</a>
          </p>
        </div>
      </div>
    </section>

    

    {/* Footer */}
    <Footer/>

  </>
  
  )
}

export default page 