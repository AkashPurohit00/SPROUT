import React from 'react'
import Header from '@/Components/Header'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const Page = () => {
  const months = [
    'May 2025', 'April 2025', 'March 2025', 'February 2025', 'January 2025',
    'December 2024', 'November 2024', 'October 2024', 'September 2024',
    'August 2024', 'July 2024', 'June 2024', 'May 2024', 'April 2024'
  ];

  return (
    
    <>
    <Header/>
      <div className="px-4 sm:px-8 lg:px-12">
                     <div className="relative w-full h-[50vh] bg-white mt-3 rounded-3xl overflow-hidden">
                       <Image
                         src="/images/data.jpg"
                         alt="Background"
                         fill
                         className="object-fill object-center"
                       />
             
                       <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20 mb-14">
                         
                         {/* Heading  */}
                         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8 lg:whitespace-nowrap">
                          Investor Grievance
                         </h1>
                         
                       </div>
                     </div>
                     
                   </div>
                   {/*Table*/}
             
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-16">
      
      {/* Heading */}
      <h2 className="text-xl md:text-5xl font-bold text-left text-gray-800 mb-8">
        Data for the month ending <br/>June 2025
      </h2>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-8 gap-0 items-stretch">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-4">
                Sr No
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">1</div>
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">2</div>
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">3</div>
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">4</div>
              </div>
            </div>
            
            {/* Column 2: Received from */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Received from
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  Directly from Investors
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  SEBI (SCORES)
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  Other Sources (if any)
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  Grand Total
                </div>
              </div>
            </div>
            
            {/* Column 3: Pending at the end of last month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Pending at the end of last month
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Received
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Resolved
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 6: Total Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Total Pending
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 7: Pending complaints > 3 months */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Pending complaints &gt; 3 months
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 8: Average Resolution time^ (in days) */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4 rounded-tr-xl">
                Average Resolution time^ (in days)
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View - Horizontally Scrollable */}
      <div className="md:hidden">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <div className="grid grid-cols-8 gap-0 items-stretch min-w-[1000px]">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-3">
                <span className="text-sm">Sr No</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">1</div>
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">2</div>
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">3</div>
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">4</div>
              </div>
            </div>
            
            {/* Column 2: Received from */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Received from</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Directly from Investors
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  SEBI (SCORES)
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Other Sources (if any)
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Grand Total
                </div>
              </div>
            </div>
            
            {/* Column 3: Pending at the end of last month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Pending at the end of last month</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Received</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Resolved</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 6: Total Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Total Pending</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 7: Pending complaints > 3 months */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Pending complaints &gt; 3 months</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
            
            {/* Column 8: Average Resolution time^ (in days) */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3 rounded-tr-xl">
                <span className="text-sm">Average Resolution time^ (in days)</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Second Table - Monthly Disposal */}
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-16 lg:mt-56">
      
      {/* Heading */}
      <h2 className="text-xl md:text-5xl font-bold text-left text-gray-800 mb-8">
        Trend of monthly disposal of<br/> complaints
      </h2>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-6 gap-0 items-stretch">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-4">
                Sr No
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 2: Month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Month
              </div>
              <div className="flex-1 pt-4">
                {months.map((month, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                    {month}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 3: Carried forward from previous month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Carried forward from previous month
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Received
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Resolved
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 6: Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4 rounded-tr-xl">
                Pending
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                    0
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View - Horizontally Scrollable */}
      <div className="md:hidden">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <div className="grid grid-cols-6 gap-0 items-stretch min-w-[800px]">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-3">
                <span className="text-sm">Sr No</span>
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 2: Month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Month</span>
              </div>
              <div className="flex-1 pt-4">
                {months.map((month, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                    {month}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 3: Carried forward from previous month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Carried forward from previous month</span>
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Received</span>
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Resolved</span>
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                    0
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 6: Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3 rounded-tr-xl">
                <span className="text-sm">Pending</span>
              </div>
              <div className="flex-1 pt-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                    0
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Third Table*/}
    <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-5 mb-8 md:mb-20">
      
      {/* Heading */}
      <h2 className="text-xl md:text-5xl font-bold text-left text-gray-800 mb-8 ">
       Trend of annual disposal of<br/> complaints
      </h2>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-6 gap-0 items-stretch">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-4">
                Sr No
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">1</div>
              </div>
            </div>
            
            {/* Column 2: Received from */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Year
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                 2024-25
                </div>
                
              </div>
            </div>
            
            {/* Column 3: Pending at the end of last month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
              Carried forward from previous year
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  0
                </div>
               
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Received
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
                
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Resolved
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                  0
                </div>
                
              </div>
            </div>
            
            {/* Column 6: Total Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Pending
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  0
                </div>
               
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Mobile View - Horizontally Scrollable */}
      <div className="md:hidden">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <div className="grid grid-cols-6 gap-0 items-stretch min-w-[1000px]">
            {/* Column 1: Sr No */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-3">
                <span className="text-sm">Sr No</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">1</div>
                
              </div>
            </div>
            
            {/* Column 2: Received from */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Year</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  2024-25
                </div>
              </div>
            </div>
            
            {/* Column 3: Pending at the end of last month */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Carried forward from previous year</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  0
                </div>
                
              </div>
            </div>
            
            {/* Column 4: Received */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Received</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
                
              </div>
            </div>
            
            {/* Column 5: Resolved */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Resolved</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  0
                </div>
                
              </div>
            </div>
            
            {/* Column 6: Total Pending */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm"> Pending</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  0
                </div>
              
              </div>
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