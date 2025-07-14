'use client'
import React from 'react'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image';
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
      description: "RDesigned with young and emerging investors in mind, our affordable subscription plans make professional-grade research accessible. We empower beginners to learn about and invest in the stock market without breaking the bank"
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center  z-10">
        <div className="w-62 h-40 sm:w-70 sm:h-50 rounded-lg overflow-hidden  mb-4 lg:mb-2">
        <Image
          src="/images/HD.png" 
          alt="Logo"
          width={200}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>

        {/* Heading with animated underline 
        <style jsx>{`
          @keyframes slideInUnderline {
            0% {
              width: 0%;
              opacity: 0;
            }
            100% {
              width: 100%;
              opacity: 1;
            }
          }
          
          .animate-underline {
            animation: slideInUnderline 1.5s ease-out 0.8s both;
          }
        `}</style>
        
        <h1 className="text-base sm:text-lg md:text-xl text-gray-700 lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium mb-1 sm:mb-2 text-center leading-tight">
        Cultivating Superior Investment Opportunities
        </h1>
        <h1 className="text-base sm:text-lg md:text-xl text-gray-700 lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
        Unearthing High-Potential Investments for{' '}
        <span className="relative inline-block">
          Discerning investors
          <span className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gray-700 animate-underline"></span>
        </span>
        
        </h1>
        */}

        {/* Paragraphs  */}
      
    <div className="text-xs sm:text-sm md:text-base lg:text-2xl font-normal max-w-7xl text-center space-y-0.5 sm:space-y-1 px-2">
          <p className="leading-tight">
            Our research bridges complex financial analysis and retail investor needs, targeting high-growth opportunities across small-cap to large-cap stocks. We provide robust, unbiased analysis, practical stock ideas for short- to medium-term investors, and clear, actionable insights for informed decisions
          </p>
          <br/>
          <p className="leading-tight">
            Tailored for young, emerging, and cost-conscious investors, our affordable subscription plans deliver professional-grade research, empowering beginners to confidently invest in the stock market without breaking the bank.
          </p>
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

    


    <section id="ready-to-work" className="bg-white py-8 mb-16">
  <div className="container max-w-7xl mx-auto px-10">
    <div className="flex flex-col md:flex-row justify-center items-center">
      {/* Button */}
      <div>
        <Link
          href="/Soon"
          className="inline-flex flex-col rounded-2xl items-center bg-blue-50 text-gray-700 px-10 py-6 border border-gray-300 font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 transition-transform"
        >
          <span className="text-2xl font-bold">Subscribe</span>
          <span className="text-sm italic mt-1">Coming Soon</span>
        </Link>
      </div>
    </div>
  </div>
    </section>

    

    {/* Footer */}
    <Footer/>

  </>
  
  )
}

export default page 