'use client'
import React from 'react'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image';



const page = () => {
  const advantages = [
    {
      id: 1,
      image: "/images/rmage1.png",
      title: "Curated Selection",
      description: "Meticulously researched investment ideas, carefully chosen for their growth potential and supported by comprehensive analysis"
    },
    {
      id: 2,
      image: "/images/rmage2.png",
      title: "Flash Ideas",
      description: "Discover quick insights on opportunities where we provide brief but impactful investment arguments"
    },
    {
      id: 3,
      image: "/images/rmage3.png",
      title: "Focus on Excellence",
      description: "Our approach targets high-growth potential across various market capitalizations, ensuring a diversified portfolio of top-tier opportunities"
    },
    {
      id: 4,
      image: "/images/rmage4.png",
      title: "Comprehensive Insights",
      description: "Benefit from in-depth analysis that backs each recommendation, providing you with a clear understanding of the investment's potential"
    },
    {
      id: 5,
      image: "/images/rmage5.png",
      title: "Strategic Guidance",
      description: "Gain access to precise entry and exit strategies for every investment, tailored to maximize your returns"
    },
    {
      id: 6,
      image: "/images/rmage6.png",
      title: "Continuous Monitoring",
      description: "Stay updated with regular reviews and updates on all existing recommendations, ensuring you're always informed on the latest developments"
    }
  ];
  

  return (
    <>
<Header/>
{/* Background Image and Content */}
<div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
  <Image
    src="/images/pic5.jpg" // make sure this path is correct
    alt="Background"
    fill
    className="object-cover object-top z-0"
    priority
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20 z-10">
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-4xl mx-auto px-4 mb-14 mt-6 relative z-20'>
     {/*Sprout*/}
      <div className="h-20 sm:h-24 md:h-32 lg:h-36 xl:h-44 rounded-lg overflow-hidden flex items-center justify-center -mx-1 relative z-20">
        <Image
          src="/images/HD.png"
          alt="Logo"
          className="object-contain w-full h-full"
          width={400}
          height={200}
        />
      </div>
       {/* Cross3 */}
      <div className="h-20 sm:h-24 md:h-32 lg:h-36 xl:h-44 rounded-lg overflow-hidden flex items-center justify-center -mx-1 relative z-20">
        <Image
          src="/images/cross3.png"
          alt="Logo"
          className="object-contain w-full h-full"
          width={400}
          height={200}
        />
      </div>
      {/* Trudence */}
      <div className="h-20 sm:h-24 md:h-32 lg:h-36 xl:h-44 rounded-lg overflow-hidden flex items-center justify-center -mx-1 relative z-20">
        <Image
          src="/images/Trudence.png"
          alt="Logo"
          className="object-contain w-full h-full"
          width={400}
          height={200}
        />
      </div>
    </div>

    
    
   

    {/* Paragraphs  */}
   
 <div className="text-xs sm:text-sm md:text-base lg:text-2xl font-normal max-w-5xl text-center space-y-0.5 sm:space-y-1 px-2  ">
      <p className="leading-tight">
      Sprout Research PCG, collaborates with Trudence Capital Advisory Pvt Ltd, a SEBI-registered Corporate 
      Research Advisor. At Sprout Research, we deliver comprehensive research services rooted in detailed fundamental
       and forensic analysis. Our mission is to safeguard your investments by employing strategic risk management and 
       vigilant monitoring, enabling timely adjustments in response to evolving market conditions.
      </p>
     
    </div>
    <div className="text-xs sm:text-sm md:text-base lg:text-2xl font-normal max-w-5xl text-center space-y-0.5 sm:space-y-1 px-2 py-8 ">
      <p className="leading-tight">
     We excel in uncovering high-growth investment opportunities ahead of the curve. Through rigorous analysis and a selective approach,
      we aim to provide you with a decisive edge in the ever-changing landscape of equity investing.
      </p>
     
    </div>
  </div>
</div>


{/*section 3  */}
<section id="about" className=" bg-white w-full min-h-screen mt-20">
  <div className="container max-w-7xl mx-auto px-6 py-6 bg-blue-200 min-h-screen">
    {/* Features Grid */}
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:gap-6">
      {/* Feature 1 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2  lg:mt-32 w-full h-full flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Early Identification</h3>
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
          Leverage advanced screening tools, market trends, and strategic foresight to pinpoint opportunities before they gain widespread attention.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-12 w-full h-full flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Rigorous Analysis</h3>
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
            Conduct exhaustive due diligence to validate the investment thesis.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-32 w-full h-full flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Thematic Overlay</h3>
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
          Identify transformative macro trends and align investments with these growth drivers.
        </p>
      </div>
    </div>
  </div>
</section>
{/*Section 4 with Image and Text */}
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium mb-16">
        Sprout Research Advantage
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage) => (
          <div
            key={advantage.id}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-100"
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
{/* Section 5 with Research Reports */}
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
    Why SPROUT Research?
  </h1>
  <p className='text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-12    '>We prioritize protecting your investments with a strategic approach to risk management, ensuring your<br/>
   capital remains safeguarded while pursuing growth.</p>

  <div className="flex flex-col ">
    {/* Report 1 */}
    <div className="bg-white p-6 rounded-lg border border-black shadow transition flex-col flex items-start space-x-6 min-h-[200px]  ">
      
      <div>
        <ol className="list-decimal list-inside text-gray-800 space-y-4 text-base md:text-2xl ">
    <li> <span className='font-bold'>Pioneering Insights:</span> Our recommendations often center on companies poised for exponential growth, frequently overlooked by larger institutional investors.</li>
    <li><span className='font-bold'>Fundamental Excellence:</span> Each recommendation is underpinned by thorough analysis of business models, market opportunities, and competitive landscapes.</li>
    <li><span className='font-bold'>Proactive Oversight:</span> Our vigilant monitoring ensures timely adjustments to our recommendations as market conditions evolve.</li>
    <li><span className='font-bold'>Risk Mitigation:</span> We provide clear exit strategies to protect your investments, demonstrating our commitment to preserving and growing your capital.</li>
    <li><span className='font-bold'>Optimized Returns:</span> Our timely alerts are designed to help you maximize returns at the opportune moment.</li>
  </ol>
      
        
            
                
      </div>
    </div>

    </div>
</div>
{/* Section 6 with Research Reports */}
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24 ">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
    Our Methodology: From Identification to Realization
  </h1>
  

  <div className="flex flex-col ">
    {/* Report 1 */}
    <div className="bg-white p-6 rounded-lg border border-black shadow transition flex-col flex items-start space-x-6 min-h-[200px]  ">
      
      <div>
        <ol className="list-decimal list-inside text-gray-800 space-y-4 text-base md:text-2xl ">
    <li> <span className='font-bold'>Systematic Screening:</span> We employ advanced algorithms and expert insight to identify companies with exceptional growth potential.</li>
    <li><span className='font-bold'>Comprehensive Due Diligence: </span> Our team conducts exhaustive research, including financial analysis, management assessments, and competitive positioning evaluations.</li>
    <li><span className='font-bold'>Sophisticated Modeling:</span> We develop detailed financial models to stress-test our hypotheses and project future performance under various scenarios.</li>
    <li><span className='font-bold'>Strategic Recommendations:</span> Each investment idea is presented with a comprehensive report, including nuanced risk assessment.</li>
    <li><span className='font-bold'>Ongoing Evaluation:</span>We maintain constant vigilance over our recommendations, providing timely updates and adjusting our stance as market dynamics shift.</li>
  </ol>
      
        
            
                
      </div>
    </div>

    </div>
</div>
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
  <Link
    href="https://trudencecapital.com/sprout/"
    className="inline-flex items-center bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 transition-transform"
  >
    Subscribe 
   
  </Link>
</div>

          </div>
        </div>
      </section>

<Footer/>

    </>
  )
}

export default page 