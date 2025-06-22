'use client '
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="relative w-full h-[50vh] bg-white mt-3 rounded-3xl overflow-hidden">
          <Image
            src="/images/pic5.jpg"
            alt="Background"
            fill
            className="object-cover object-top"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20">
            
            {/* Heading  */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8 lg:whitespace-nowrap">
              Investor Charter
            </h1>
            
          </div>
        </div>
        <p className='mt-10 text-lg text-center
        '>
            Sprout Research delivers comprehensive research services rooted in detailed fundamental and forensic analysis. Its mission is to safeguard your investments by employing strategic
             risk management and vigilant monitoring, enabling timely adjustments in response to evolving market conditions. Sprout Research excels in uncovering high-growth investment 
             opportunities ahead of the curve. Through rigorous analysis and a selective approach, it aims to provide you with a decisive edge in the ever-changing landscape of equity investing
        </p>
      </div>
    <div className="mt-16 px-4 sm:px-8 lg:px-12">
  {/* Mobile Layout */}
  <div className="block md:hidden">
    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="font-bold text-4xl sm:text-5xl leading-tight">
        Vision and Mission<br /> Statement for Investors.
      </h1>
    </div>

    {/* Vision Block */}
    <div className="mb-12">
      {/* Vision Icon */}
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-black"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="32" cy="32" r="30" fill="white" stroke="black" strokeWidth="2" />
          <circle cx="32" cy="32" r="20" fill="black" />
          <circle cx="32" cy="32" r="10" fill="white" stroke="black" strokeWidth="2" />
          <circle cx="32" cy="32" r="5" fill="black" />
        </svg>
      </div>
      
      {/* Vision Title */}
      <div className="text-center mb-4">
        <h2 className="text-5xl font-semibold">Vision</h2>
      </div>
      
      {/* Vision Content */}
      <div className="text-center">
        <p className="text-gray-700 text-base sm:text-xl">
          Invest with knowledge & safety
        </p>
      </div>
    </div>

    {/* Mission Block */}
    <div className="mb-12">
      {/* Mission Icon */}
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      {/* Mission Title */}
      <div className="text-center mb-4">
        <h2 className="text-5xl font-semibold">Mission</h2>
      </div>
      
      {/* Mission Content */}
      <div className="text-center">
        <p className="text-gray-700 text-base sm:text-xl">
          Every investor should be able to invest in right investment
           products based on their needs, manage and monitor them to
            meet their goals, access reports and enjoy financial wellness.
        </p>
      </div>
    </div>
  </div>

  {/* Desktop Layout */}
  <div className="hidden md:grid grid-cols-2 gap-8">
    {/* Left Side - Heading */}
    <div className="flex items-center justify-center md:justify-start">
      <h1 className="font-bold text-4xl sm:text-5xl text-center md:text-left leading-tight">
        Vision and Mission<br /> Statement for Investors.
      </h1>
    </div>

    {/* Right Side - Vision and Mission Content */}
    <div className="space-y-8">
      {/* Vision Block */}
      <div className="flex items-start gap-6">
        {/* Vision Icon */}
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-black"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="32" cy="32" r="30" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="32" cy="32" r="20" fill="black" />
            <circle cx="32" cy="32" r="10" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="32" cy="32" r="5" fill="black" />
          </svg>
        </div>
        <div>
          <h2 className="text-6xl font-semibold mb-1">Vision</h2>
          <p className="text-gray-700 text-base sm:text-xl">
            Invest with knowledge & safety
          </p>
        </div>
      </div>

      {/* Mission Block */}
      <div className="flex items-start gap-6">
        {/* Mission Icon */}
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h2 className="text-6xl font-semibold mb-1">Mission</h2>
          <p className="text-gray-700 text-base sm:text-xl">
            Every investor should be able to invest in right investment<br/>
             products based on their needs, manage and monitor them to<br/>
              meet their goals, access reports and enjoy financial wellness.<br/>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-20">
  {/* Heading */}
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider">
    Details of business transacted by the Research Analyst with respect to the investors.
  </h1>

  {/* Grid of Steps */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Step 1 */}
    <div className="p-6  bg-white">
      <h2 className="text-3xl font-bold text-black mb-2">01</h2>
      <p className="text-gray-700 text-base sm:text-lg">
        To publish research report based on the research activities of the RA
      </p>
    </div>

    {/* Step 2 */}
    <div className="p-6  bg-white">
      <h2 className="text-3xl font-bold text-black mb-2">02</h2>
      <p className="text-gray-700 text-base sm:text-lg">
        This is the space to introduce the Services section. Briefly 
        describe the types of services offered and highlight any special 
        benefits To provide an independent unbiased view on 
        securities.or features.
      </p>
    </div>

    {/* Step 3 */}
    <div className="p-6  bg-white">
      <h2 className="text-3xl font-bold text-black mb-2">03</h2>
      <p className="text-gray-700 text-base sm:text-lg">
       To offer unbiased recommendation, disclosing the financial interests in recommended securities
      </p>
    </div>

    {/* Step 4 */}
    <div className="p-6  bg-white">
      <h2 className="text-3xl font-bold text-black mb-2">04</h2>
      <p className="text-gray-700 text-base sm:text-lg">
        To provide research recommendation, based on analysis of 
        publicly available information and known observations.
      </p>
    </div>

    {/* Step 5 */}
    <div className="p-6  bg-white">
      <h2 className="text-3xl font-bold text-black mb-2">05</h2>
      <p className="text-gray-700 text-base sm:text-lg">
       To conduct audit annually.
      </p>
    </div>
  </div>
</div>

{/*  Details of Services Provided to Investors */}
<div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-16 ">
    <h1 className='text-xl    sm:text-xl md:text-3xl lg:text-5xl font-medium tracking-wider'>Details of services provided to<br/>
         investors (No indicative Timelines)</h1>
    
    {/* Desktop View */}
    <div className="hidden md:block">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-4 gap-6 items-start">
          {/* Column 1: Onboarding of Clients */}
          <div className="flex flex-col h-full">
            <div className="font-semibold text-center text-gray-800 pb-2 border-b border-gray-200 h-20 flex items-center justify-center">
              Onboarding of Clients
            </div>
            <div className="flex-1 space-y-3 pt-3">
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
            </div>
          </div>
          
          {/* Column 2: Disclosure to Clients */}
          <div className="flex flex-col h-full">
            <div className="font-semibold text-center text-gray-800 pb-2 border-b border-gray-200 h-20 flex items-center justify-center">
              Disclosure to Clients
            </div>
            <div className="flex-1 space-y-3 pt-3">
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
            </div>
          </div>
          
          {/* Column 3: To distribute research reports and recommendations to the clients without discrimination */}
          <div className="flex flex-col h-full">
            <div className="font-semibold text-center text-gray-800 pb-2 border-b border-gray-200 h-20 flex items-center justify-center">
              To distribute research reports and recommendations to the clients without discrimination
            </div>
            <div className="flex-1 space-y-3 pt-3">
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
            </div>
          </div>
          
          {/* Column 4: To maintain confidentiality w.r.t publication of the research report until made available in the public domain */}
          <div className="flex flex-col h-full">
            <div className="font-semibold text-center text-gray-800 pb-2 border-b border-gray-200 h-20 flex items-center justify-center">
              To maintain confidentiality w.r.t publication of the research report until made available in the public domain
            </div>
            <div className="flex-1 space-y-3 pt-3">
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
              <div className="text-center py-2 text-gray-700">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile View */}
    <div className="md:hidden">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-3">
        {/* Row 1: Onboarding of Clients */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-gray-800 min-w-[120px]">
            Onboarding of Clients
          </div>
          <div className="flex gap-3">
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
          </div>
        </div>
        
        {/* Row 2: Disclosure to Clients */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-gray-800 min-w-[120px]">
            Disclosure to Clients
          </div>
          <div className="flex gap-3">
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
          </div>
        </div>
        
        {/* Row 3: To distribute research reports and recommendations to the clients without discrimination */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-gray-800 min-w-[120px]">
            To distribute research reports and recommendations to the clients without discrimination
          </div>
          <div className="flex gap-3">
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
          </div>
        </div>
        
        {/* Row 4: To maintain confidentiality w.r.t publication of the research report until made available in the public domain */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-gray-800 min-w-[120px]">
            To maintain confidentiality w.r.t publication of the research report until made available in the public domain
          </div>
          <div className="flex gap-3">
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
            <div className="text-center text-sm px-2 py-1">0</div>
          </div>
        </div>
      </div>
    </div>
</div>
{/* Details of grievance redressal mechanism and how to access it */}
<div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-20">
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-center">
    Details of grievance redressal mechanism and how to access it
  </h1>

  {/* Grid Boxes */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Box 1 */}
    <div className="p-6  bg-gray-200 shadow-sm w-full">
     
      <p className="text-gray-700 text-base text-center">
       In case of any grievance / complaint, an investor should approach the concerned
        research analyst and shall ensure that the grievance is resolved within 30 days.
      </p>
    </div>

    {/* Box 2 */}
    <div className="p-6  bg-gray-200 shadow-sm w-full">
      
      <p className="text-gray-700 text-base text-center">
        If the investor’s complaint is not redressed satisfactorily, onemay lodge a complaint
         with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints 
         redressal system.
      </p>
    </div>

    {/* Box 3 */}
    <div className="p-6   bg-gray-200 shadow-sm w-full">
      
      <p className="text-gray-700 text-base text-center">
        SEBI takes up the complaints registered via SCORES with the concerned intermediary
         for timely redressal. SCORES facilitatestracking the status of the complaint.
      </p>
    </div>

    {/* Box 4 */}
    <div className="p-6   bg-gray-200 shadow-sm w-full">
     
      <p className="text-gray-700 text-base text-center">
       With regard to physical complaints, investors may send their complaints to: Office of 
       Investor Assistance and Education, Securities and Exchange Board of India, SEBI 
       Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.
      </p>
    </div>
  </div>
</div>
{/*Expectations from the investors*/}
<div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-20 mb-10">
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-center">
    Expectations from the investors (Responsibilities of investors).
  </h1>

  <div className="flex flex-col lg:flex-row gap-8">
    
    {/* ✅ Left side – Do’s */}
    <div className="flex-1">
      <h2 className="text-2xl font-semibold mb-4">Do’s</h2>
      <ul className="list-disc pl-5 space-y-0.5 text-gray-700 text-base sm:text-xl">
        <li>Always deal with SEBI registered Research Analyst.</li>
        <li>Ensure that the Research Analyst has a valid registration certificate.</li>
        <li>Check for SEBI registration number.</li>
        <li>
          Refer to the list of all SEBI registered Research Analysts:
          <br />
          <a
            href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline"
          >
            SEBI Registered Analysts List
          </a>
        </li>
        <li>Pay attention to disclosures in research reports before investing.</li>
        <li>Pay via banking channels and keep signed receipts with payment details.</li>
        <li>Check research recommendations before applying for securities or public offers.</li>
        <li>Ask questions and clarify doubts with your Research Analyst before investing.</li>
        <li>Report Research Analysts offering assured or guaranteed returns to SEBI.</li>
      </ul>
    </div>

    {/* ❌ Right side – Don’ts */}
    <div className="flex-1">
      <h2 className="text-2xl font-semibold mb-4">Don’ts</h2>
      <ul className="list-disc pl-5 space-y-0.5 text-gray-700 text-base sm:text-xl">
        <li>Do not provide funds for investment to the Research Analyst.</li>
        <li>Don’t fall prey to luring advertisements or market rumours.</li>
        <li>
          Do not get attracted to limited period discounts, incentives, or gifts offered by Research Analysts.
        </li>
        <li>
          Do not share login credentials or passwords of your trading/demat accounts with the Research Analyst.
        </li>
        <li>
          <strong>Note:</strong> For registering any grievance, please visit the{' '}
          "Investor Grievances page."<br />
          SEBI SCORES can be accessed at:{' '}
          <a
            href="https://www.scores.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline"
          >
            www.scores.gov.in
          </a>
        </li>
      </ul>
    </div>

  </div>
</div>
<Footer/>

  
    </>
  )
}

export default page