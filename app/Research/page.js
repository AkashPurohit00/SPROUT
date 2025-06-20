import React from 'react'
import Link from 'next/link'
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
 <div className="min-h-screen w-full bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-12 xl:px-24 text-center">
  <div className="relative max-w-[1920px] mx-auto mb-8">
    <Image
      src="/images/rmage7.png"
      alt="Section 2 Image"
      width={1920}
      height={600}
      className="w-full h-auto rounded-lg object-cover"
      priority
    />

    {/* Overlay content with improved mobile responsiveness */}
    <div className="absolute inset-0 flex flex-col justify-end items-end z-10">
      <div className="w-full sm:w-auto max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 sm:mr-4 md:mr-6 lg:mr-[-20px]  xl:mr-[-20px] ">
        {/* Responsive heading */}
        <h2 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-left leading-tight">
          Sprout Research: Cultivating Superior<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Investment Opportunities
        </h2>

        {/* Responsive paragraph */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 text-left leading-relaxed">
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
{/* Section 5 with Research Reports */}
<div className="bg-white w-full min-h-screen py-16 px-6 sm:px-12 lg:px-24">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
    Sprout Research Reports
  </h1>

  <div className="flex flex-col ">
    {/* Report 1 */}
    <div className="bg-white p-6 rounded-lg border border-black shadow transition flex-col flex items-start space-x-6 min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 1" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">KEY MARITIME ANCILLARY PLAYER </h2>
        <p className="text-gray-600 text-sm">Unearthing the Depths…</p>
            <div className=" sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The company, commanding over 80% of its market, enjoys robust revenue visibility backed by a healthy pipeline of contracts. With a massive market opportunity <br/>
                projected over the next decade, and strategic support from Maritime India Vision 2030, the company is poised for sustained growth.</p>
                <p>To support this growth…</p>
                 <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 2 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px]  ">
      <img src="/images/pic2.jpg" alt="Logo 2" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">A MICROFINANCE PLAYER</h2>
        <p className="text-gray-600 text-sm">Emerging Stronger from a Period of Stress…</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The microfinance (MFI) sector is witnessing early signs of recovery, underpinned by improved collections and reduced borrower stress. Recent rate cuts and <br/>
                enhanced liquidity measures by the RBI have played a pivotal role in fostering a more resilient lending environment. These macroeconomic tailwinds have<br/>
                 alleviated pressure on borrowers, driving stabilization in the sector and setting the stage for a potential rebound in asset quality and profitability…</p>
                  <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 3 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 3" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">ELECTRIFYING INDIA</h2>
        <p className="text-gray-600 text-sm">Capitalizing on Transmission & Distribution Growth</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
        <p>Executive Summary</p>
        <p>Expanding transmission networks and grid interconnectivity is key to stabilizing renewable energy. While electrification is the future, progress is hindered by <br/>
            technological, economic, and political challenges. Governments and MNCs are investing heavily in greener grids and advanced transmission technologies,<br/>
             making electricity transmission the biggest beneficiary of the global energy shift.</p>
             <p>India’s transmission sector has…</p>
              <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 4 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 4" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">CASH FLOWS AT THE CORE</h2>
        <p className="text-gray-600 text-sm">Comfortable valuations for stable cashflows</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>As uncertainty clouds the market, attempts to predict its bottom have left most observers as uncertain as anyone else. Expectations for the Union Budget 2025<br/>
                 remain subdued, with little clarity on critical issues such as Trump tariffs on India, potential rate cuts, currency stabilization, or the trajectory of foreign money<br/>
                  flows.</p>
            <p>Amid this uncertainty, it’s…</p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 5 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 5" className="h-28" />
      <div>
        <h2 className="ttext-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">FINANCIAL SERVICES PLAYER</h2>
        <p className="text-gray-600 text-sm">Re-rating candidate post amalgamation</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The company is a comprehensive financial services platform offering loans, investments, insurance, and payments through its subsidiaries and joint ventures.<br/>
                 The company’s NBFC arm ranks among the top private sector NBFCs, while its other key businesses include housing finance, life insurance (JV), and asset<br/>
                  management.</p>
                   <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 6 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 6" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">A QUALITY CEMENT COMPANY</h2>
        <p className="text-gray-600 text-sm">Green in the grey…</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The quality cement company, backed by a strong group, has a capacity of 4.40 MTPA. Though constituting less than 1% of India’s total cement capacity, it stands<br/>
            out as a compelling investment opportunity for the following three key reasons…</p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 7 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 7" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">PREMIUM LUBRICANT PLAYER</h2>
        <p className="text-gray-600 text-sm">Strong and Stable Cash flows …</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The company stands as a premier investment opportunity in the lubricants sector, fortified by its strong parentage and an enduring legacy of market leadership.<br/>
            Over the decade from 2013 to 2023, the company showcased consistent growth, achieving a revenue CAGR of 4.7% and profit CAGR of 5.4%…</p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 8 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black  min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 8" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">THEMATIC IDEA</h2>
        <p className="text-gray-600 text-sm">Atomization of Clean Energy…</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>rillions of dollars are being funnelled into greening global supply chains, marking the most transformative shift since the coal revolution of the 19th century.<br/>
             While this transition will be complex and gradual, significant progress is underway in renewable energy, electric batteries, and advanced nuclear technologies.<br/>
             Key milestones include the planned 2028 revival of the Three Mile Island nuclear plant….
            </p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 9 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 9" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">LEADING BITUMEN AND LOGISTICS PLAYER</h2>
        <p className="text-gray-600 text-sm">Embarking on a Long Voyage…</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
            <p>Executive Summary</p>
            <p>The company is a leading supplier of bitumen products and provides logistics services for Liquefied Petroleum Gas (LPG) and bituminous products. Through its<br/>
                UAE-based 100% subsidiary, the company has also expanded into the ship operating….
            </p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 10 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 10" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">A REGIONAL HOSPITAL PLAYER</h2>
        <p className="text-gray-600 text-sm">Compelling Valuations amidst Expansion …</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
        <p>Executive Summary</p>
        <p>The company, a Coimbatore-based hospital chain, is embarking on significant expansion, combining brownfield and greenfield projects. This expansion will boost <br/>
            its total bed capacity from….</p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>

    {/* Report 11 */}
    <div className="bg-white p-6 rounded-lg shadow  transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 11" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">LIKELY TURNAROUND IN REAL ESTATE AND HOSPITALITY</h2>
        <p className="text-gray-600 text-sm">Land aggregator coming out of woods…</p>
        <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
        <p>Executive Summary</p>
        <p>The company faced significant challenges during the last decade but has since made considerable progress in overcoming this difficult phase. For the last 2<br/>
             years, the company has been actively cleansing its balance sheet and improving corporate governance and disclosure practices.  Further, successful one-time….</p>
              <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>

      </div>
    </div>

    {/* Report 12 */}
    <div className="bg-white p-6 rounded-lg shadow transition flex flex-col items-start space-x-6 border border-black min-h-[400px] ">
      <img src="/images/pic2.jpg" alt="Logo 12" className="h-28" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">CHEMICAL PLAYER WITH VISIBILITY AND TURNAROUND</h2>
        <p className="text-gray-600 text-lg">Turns around with visibility in greenshoots…</p>
            <div className="sm:w-[100px] md:w-[200px] lg:w-[700px] h-1 bg-blue-900 mt-7"></div>
        <p>Executive Summary</p>
        <p>The company has faced significant challenges in the past, including difficulties recovering from the NSEL commodity financing crisis, high leverage, and issues
             with capital misallocation. However, we believe these challenges are now largely behind them…</p>
             <Link href='/' className='pt-5 inline-block text-gray-600 font-serif'>Read More...</Link>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </>
  )
}

export default page 