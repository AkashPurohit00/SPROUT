import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image';


const page = () => {
  return (
    <>
<Header/>
{/* Background Image and Content */}
 <div className="relative w-full h-[90vh]">
  <Image
    src="/images/pic5.jpg" // make sure this path is correct
    alt="Background"
    fill
    className="object-cover object-top z-0"
    priority
  />
   <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20">
   <div className="w-72 h-44 sm:w-96 sm:h-44 rounded-lg overflow-hidden border-4 border-white mb-4 lg:mb-6">
  <Image
    src="/images/pic2.jpg"
    alt="Logo"
    width={400}
    height={200}
    className="object-cover w-full h-full"
  />
</div>


     
     {/* Heading  */}
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2 lg:mb-3 lg:whitespace-nowrap">
      Sprout Research, an associate 
     </h1>
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8 lg:whitespace-nowrap">
     of Sprout Partners
     </h1>
 
     {/* Paragraphs  */}
     <p className="text-sm sm:text-sm md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
       Sprout Research delivers comprehensive research services rooted in detailed fundamental and forensic analysis. Its
     </p>
     <p className="text-sm sm:text-sm md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
       mission is to safeguard your investments by employing strategic risk management and vigilant monitoring, enabling timely
     </p>
     <p className="text-sm sm:text-sm md:text-lg lg:text-lg max-w-5xl lg:whitespace-nowrap">
       adjustments in response to evolving market conditions. Sprout Research excels in uncovering high-growth investment
     </p>
     <p className="text-sm sm:text-sm md:text-lg lg:text-lg  max-w-5xl lg:whitespace-nowrap">
       opportunities ahead of the curve. Through rigorous analysis and a selective approach, it aims to provide you with a decisive
     </p>
     <p className="text-sm sm:text-sm md:text-lg lg:text-lg  max-w-5xl lg:whitespace-nowrap">
      edge in the ever-changing landscape of equity investing.
     </p>
 
     
   </div>
 </div>
{/* Section 2 with Image and Text */}
 <div className="min-h-screen w-full bg-white py-16 px-6 sm:px-12 lg:px-24 text-center">
 
  <div className="relative max-w-[1920px] mx-auto mb-8">
  <Image
    src="/images/rmage7.png"
    alt="Section 2 Image"
    width={1920}
    height={600}
    className="w-full h-auto rounded-lg object-cover"
    priority
  />

  {/* Bottom-right overlay content */}
  <div className="absolute inset-0 flex flex-col justify-end items-end p-4 sm:p-6 lg:p-10 z-10">
    <div className=" p-4 rounded-md max-w-3xl">
      {/* Heading aligned to right */}
      <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left">
        Sprout Research: Cultivating Superior<br/> Investment Opportunities
      </h2>

      {/* Paragraph wraps from left */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-left">
        Sprout Research, an associate of Sprout Partners Pvt Ltd, collaborates with Trudence Capital Advisory Pvt Ltd,
        a SEBI-registered Corporate Research Advisor. This collaboration offers stock recommendations founded on
        comprehensive fundamental analysis and forensic financial examination.
      </p>
    </div>
  </div>
</div>
</div>
{/*section 3  */}
<section id="about" className=" bg-white w-full min-h-screen mt-[-40px]">
  <div className="container max-w-7xl mx-auto px-6 bg-blue-200 min-h-screen">
    {/* Features Grid */}
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:gap-6">
      {/* Feature 1 */}
      <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-32 w-full h-full flex flex-col">
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
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
          With 75 years of collective experience across diverse sectors in the capital markets, we have a proven track record of driving success
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Strategic Insights</h3>
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
          Our innovative solutions are driven by data analysis and deep industry expertise, delivering actionable insights that drive growth and value
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Collaborative Approach</h3>
        <p className="text-gray-600 text-center leading-relaxed flex-grow">
          We work hand-in-hand with your team, aligning our expertise with your goals to deliver tailored financial strategies
        </p>
      </div>
    </div>
  </div>
</section>
{/*Section 4 with Image and Text */}
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
  <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium">
    Sprout Research Advantage
  </h1>
{/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
    {/* CARD 1 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/rmage1.png"
        alt="Curated Selection"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Curated Selection</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Meticulously researched investment ideas,<br />
        carefully chosen for their growth potential and<br />
        supported by comprehensive analysis
      </p>
    </div>

    {/* CARD 2 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/rmage2.png"
        alt="Flash Ideas"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Flash Ideas</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Discover quick insights on opportunities where we<br />
        provide brief but impactful investment arguments
      </p>
    </div>

    {/* CARD 3 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/rmage3.png"
        alt="Focus on Excellence"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Focus on Excellence</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Our approach targets high-growth potential across<br />
        various market capitalizations, ensuring a<br />
        diversified portfolio of top-tier opportunities
      </p>
    </div>

    {/* CARD 4 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/rmage4.png"
        alt="Comprehensive Insights"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Comprehensive Insights</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Benefit from in-depth analysis that backs each<br />
        recommendation, providing you with a clear<br />
        understanding of the investment’s potential
      </p>
    </div>

    {/* CARD 5 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/rmage5.png"
        alt="Strategic Guidance"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Strategic Guidance</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Gain access to precise entry and exit strategies for<br />
        every investment, tailored to maximize your<br />
        returns
      </p>
    </div>

    {/* CARD 6 */}
    <div className="flex flex-col items-center text-center ">
      <Image
        src="/images/rmage6.png"
        alt="Continuous Monitoring"
        width={800}
        height={1000}
        className="w-[350px] h-[350px] rounded-lg object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 whitespace-nowrap sm:whitespace-normal">Continuous Monitoring</h1>
      <p className="text-gray-500 pt-3.5 whitespace-nowrap sm:whitespace-normal">
        Stay updated with regular reviews and updates on<br />
        all existing recommendations, ensuring you’re<br />
        always informed on the latest developments
      </p>
    </div>
  </div>
</div>
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
    Sprout Research Reports
  </h1>

  <div className="flex flex-col ">
    {/* Report 1 */}
    <div className="bg-gray-100 p-6 rounded-lg border-b border-b-black shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo1.png" alt="Logo 1" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Equity Market Outlook</h2>
        <p className="text-gray-600 text-sm">An overview of expected equity trends for Q3 2025, highlighting sector rotations and valuations.</p>
      </div>
    </div>

    {/* Report 2 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo2.png" alt="Logo 2" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Debt Market Analysis</h2>
        <p className="text-gray-600 text-sm">Interest rate movements, RBI policy impacts, and corporate bond dynamics covered here.</p>
      </div>
    </div>

    {/* Report 3 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo3.png" alt="Logo 3" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Commodities Insight</h2>
        <p className="text-gray-600 text-sm">In-depth view on gold, crude oil, and agri-commodities performance and projections.</p>
      </div>
    </div>

    {/* Report 4 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo4.png" alt="Logo 4" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Tech Sector Trends</h2>
        <p className="text-gray-600 text-sm">Analysis of emerging technologies, earnings, and innovation across tech companies.</p>
      </div>
    </div>

    {/* Report 5 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo5.png" alt="Logo 5" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Banking Sector Pulse</h2>
        <p className="text-gray-600 text-sm">Credit growth, NPAs, and fintech disruptions reshaping traditional banking models.</p>
      </div>
    </div>

    {/* Report 6 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo6.png" alt="Logo 6" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Startups & VC Watch</h2>
        <p className="text-gray-600 text-sm">Tracking high-potential startups, funding rounds, and investor sentiment.</p>
      </div>
    </div>

    {/* Report 7 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo7.png" alt="Logo 7" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Global Economy Digest</h2>
        <p className="text-gray-600 text-sm">Macroeconomic updates, geopolitical risks, and their implications on global trade.</p>
      </div>
    </div>

    {/* Report 8 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo8.png" alt="Logo 8" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">IPO Watch</h2>
        <p className="text-gray-600 text-sm">All you need to know about recent and upcoming IPOs — valuation, sentiment, and performance.</p>
      </div>
    </div>

    {/* Report 9 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo9.png" alt="Logo 9" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">ESG & Impact Investing</h2>
        <p className="text-gray-600 text-sm">Reports on sustainable and responsible investing, with a focus on ESG metrics.</p>
      </div>
    </div>

    {/* Report 10 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo10.png" alt="Logo 10" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Currency Markets</h2>
        <p className="text-gray-600 text-sm">USD/INR, Euro, Yen — exchange rate trends and how they impact international trade.</p>
      </div>
    </div>

    {/* Report 11 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo11.png" alt="Logo 11" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Insurance Sector Outlook</h2>
        <p className="text-gray-600 text-sm">Growth prospects, policy innovations, and changes in consumer behavior post-pandemic.</p>
      </div>
    </div>

    {/* Report 12 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex items-start space-x-6">
      <img src="/logos/logo12.png" alt="Logo 12" className="h-12" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Real Estate Report</h2>
        <p className="text-gray-600 text-sm">Residential and commercial property trends, REITs, and infrastructure investments.</p>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </>
  )
}

export default page 