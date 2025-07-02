'use client '
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const Page = () => {
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
      <h1 className=" ">
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

        {/* Step 6 */}
        <div className="p-6  bg-white">
          <h2 className="text-3xl font-bold text-black mb-2">06</h2>
          <p className="text-gray-700 text-base sm:text-lg">
          TTo ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.
          </p>
        </div>

        {/* Step 7 */}
        <div className="p-6  bg-white">
          <h2 className="text-3xl font-bold text-black mb-2">07</h2>
          <p className="text-gray-700 text-base sm:text-lg">
          To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.
          </p>
        </div>



      </div>
    </div>

    {/*  Details of Services Provided to Investors */}
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-16">
      <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-center'>
        Details of services provided to
        investors (No indicative Timelines)
      </h1>
      
      <div className="space-y-8 ">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Onboarding of Clients.
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base sm:text-lg pl-4">
            <li>Sharing of terms and conditions of research services</li>
            <li>Completing KYC of fee paying clients</li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Disclosure to Clients
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 text-base sm:text-lg pl-4">
            <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
            <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
            <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
            <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
          </ol>
        </div>


        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To distribute research reports and recommendations to the clients without discrimination
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To maintain confidentiality w.r.t publication of the research report until made available in the public domain.
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To treat all clients with honesty and integrity
          </h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.
          </h2>
        </div>

        

      </div>
      
    </div>


    {/* Details of grievance redressal mechanism and how to access it */}
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-30">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-center">
        Details of grievance redressal mechanism and how to access it
      </h1>


      <div className="space-y-4">
        {/* Main numbered list */}
        <ol className="list-decimal space-y-6 text-gray-900 text-base sm:text-lg">
          
          {/* First main item */}
          <li className="font-semibold">
            Investor can lodge complaint/grievance against Research Analyst in the following ways:
            
            {/* Sub-bullets under first item */}
            <ul className="list-disc ml-6 mt-3 space-y-4 font-normal">
              <li>
                <span className="font-semibold">Mode of filing the complaint with research analyst</span>
                <div className="mt-2 text-gray-700">
                  In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.
                </div>
              </li>
              
              <li>
                <span className="font-semibold">Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)</span>
                
                {/* Square bullets for sub-sub items */}
                <ul className="ml-6 mt-3 space-y-2 font-normal">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner)<br/>
                      <span className="text-blue-600 underline">https://scores.sebi.gov.in</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                    <span>Two level review for complaint/grievance against Research Analyst:</span>
                  </li>
                  
                  {/* Nested square bullets */}
                  <li className="ml-6">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                        <span>First review done by designated body (RAASB)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                        <span>Second review done by SEBI</span>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                    <span>Email to designated email ID of RAASB</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          
          {/* Second main item */}
          <li className="font-semibold">
            If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.
          </li>
        </ol>
        
        {/* Address section */}
        <div className="mt-6 text-gray-900 text-base sm:text-lg leading-relaxed">
          <div>With regard to physical complaints, investors may send their complaints to:</div>
          <div className="mt-2">
            Office of Investor Assistance and Education,<br/>
            Securities and Exchange Board of India,<br/>
            SEBI Bhavan, Plot No. C4-A, 'G' Block,<br/>
            Bandra-Kurla Complex, Bandra (E),<br/>
            Mumbai – 400 051
          </div>
        </div>
      </div>

    </div>


    {/*Expectations from the investors*/}
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-20 mb-10">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-left">
        Expectations from the investors (Responsibilities of investors).
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left side – Do's */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Do's</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-900 text-sm sm:text-base">
            <li>Always deal with SEBI registered Research Analyst.</li>
            <li>Ensure that the Research Analyst has a valid registration certificate.</li>
            <li>Check for SEBI registration number.</li>
            <li>
              Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link:
              <br />
              <span className="text-blue-600 underline">SEBI Registered RAs</span>
            </li>
            <li>Always pay attention towards disclosures made in the research reports before investing.</li>
            <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CaFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
            <li>Before buying/ selling securities or applying in public offer, check for the research/ recommendation provided by your Research Analyst.</li>
            <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
            <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
            <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
            <li>Always be sure that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
            <li>Always be aware that you will not be bound by any clause prescribed by the research analyst, which is contravening any regulatory provisions.</li>
            <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
          </ul>
        </div>

        {/* Right side – Don'ts and Rights */}
        <div className="flex-1 space-y-6">
          
          {/* Don'ts Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Don'ts</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-900 text-sm sm:text-base">
              <li>Do not provide funds for investment to the Research Analyst.</li>
              <li>Don't fall prey to luring advertisements or market rumours.</li>
              <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
              <li>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.</li>
            </ul>
          </div>

          {/* Rights of investors Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Rights of investors</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-900 text-sm sm:text-base">
              <li>Right to Privacy and Confidentiality</li>
              <li>Right to Transparent Practices</li>
              <li>Right to fair and Equitable Treatment</li>
              <li>Right to Adequate Information</li>
              <li>Rights to Initial and Continuing Disclosure</li>
              <li>Right to receive information about all the statutory and regulatory disclosures</li>
              <li>Right to Fair & True Advertisement</li>
              <li>Right to Awareness about Service Parameters and Turnaround Times</li>
              <li>Right to be Informed of the timelines for each service</li>
              <li>Right to be Heard and Satisfactory Grievance Redressal</li>
              <li>Right to have timely redressal</li>
              <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
              <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
              <li>Additional Rights to vulnerable consumers</li>
              <li>Right to get access to services in a suitable manner even if differently abled</li>
              <li>Right to provide feedback on the financial products and services used</li>
              <li>Right against Unfair, Unlawful, and anti-societal clauses in financial agreements</li>
              <li>Do not share login credentials and password of your trading and demat accounts with the Research Analyst.</li>
            </ul>
            
            <div className="mt-4 text-sm">
              <strong>Note:</strong> For registering any grievance, please visit "Investor Grievances page." SEBI SCORES can be accessed via{' '}
              <span className="text-blue-600 underline">www.scores.gov.in</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <Footer/>

  
  </>
  )
}

export default Page