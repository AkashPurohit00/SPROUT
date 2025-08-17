import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

export default function ProcutPricing() {
  return (
    <>
    <Header />
    
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[20vh] sm:h-[20vh] md:h-[20vh] lg:h-[40vh] overflow-hidden">
                  <Image
                    src="/images/pic5.jpg" // make sure this path is correct
                    alt="Background"
                    fill
                    className="object-cover object-top z-0"
                    priority
                  />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20 z-10">
                    {/* Heading with animated underline */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                     Product Pricing
                    </h1>
                </div>
        </div>

        {/* Custom Flyer Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-center">
                <div className="w-full">
                    {/* Custom Flyer Design - Table Layout */}
                    <div className="bg-white border-2 border-gray-200 shadow-2xl rounded-xl overflow-hidden">
                        
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 border-b border-gray-200">
                            
                            
                            {/* Product Title */}
                            <div className="text-center">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
                                    SPROUT RESEARCH - <span className="italic text-blue-600">Retail</span>
                                </h2>
                                <p className="text-sm text-gray-600 mt-1">(SEBI Registered RA- INH000019169)</p>
                            </div>
                        </div>

                        {/* Table Content */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-gray-100 text-left p-4 sm:p-6 font-bold text-gray-800 text-lg sm:text-xl border-b border-gray-200 w-1/3">
                                            Product
                                        </th>
                                        <th className="bg-gradient-to-r from-blue-100 to-blue-200 text-center p-4 sm:p-6 font-bold text-blue-800 text-lg sm:text-xl border-b border-gray-200 w-2/3">
                                            Sprout Research Retail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Product type
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            Research service focused on fundamental and forensic analysis
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Suitable
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            Active Investors
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Numbers of stocks covered
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            35-40 stocks annually (approximately 3-4 stock ideas per month)
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Ideas covered
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            Long-term picks, Tactical picks, High-risk high-reward picks
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Research notes
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            Detailed research note on every recommendation
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Weekend Insights
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6 text-gray-800 text-sm sm:text-base text-center">
                                            Covers macro topics worldwide, channel checks, and sectors in the news
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Subscription Pricing
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6">
                                            {/* Two Subscription Cards */}
                                            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 max-w-3xl mx-auto">
                                              
                                              {/* Annual Subscription Card */}
                                              <div className="flex-1 max-w-xs mx-auto sm:mx-0">
                                                
                                                  <div className="relative bg-white rounded-2xl p-4 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                                                    {/* Background Pattern */}
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-60"></div>

                                                    {/* Content */}
                                                    <div className="relative flex-1">
                                                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                        Annual Plan
                                                      </h4>
                                                      <p className="text-xl font-bold text-blue-600 mb-3">
                                                        INR 25,000/-
                                                      </p>
                                                    </div>
                                                  </div>
                                              </div>

                                              {/* Half-Yearly Subscription Card */}
                                              <div className="flex-1 max-w-xs mx-auto sm:mx-0">
                                                
                                                 
                                                  <div className="relative bg-white rounded-2xl p-4 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                                                    {/* Background Pattern */}
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                                                    
                                          

                                                    {/* Content */}
                                                    <div className="relative flex-1">
                                                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                        Half Yearly Plan
                                                      </h4>
                                                      <p className="text-xl font-bold text-blue-600 mb-3">
                                                        INR 15,000/-
                                                      </p>
                                                    </div>

                                                  
                                                  </div>
    
                                              </div>

                                              
                                              
                                              
                                            </div>
                                        </td>
                                    </tr>
                                     <tr className="border-b border-gray-100">
                                        <td className="bg-gray-50 p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">
                                            Sprout Research Retail Investors
                                        </td>
                                        <td className="bg-blue-50 p-4 sm:p-6">
                                            {/* Two Subscription Cards */}
                                            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 max-w-3xl mx-auto">
                                              
                                              {/* Annual Subscription Card */}
                                              <div className="flex-1 max-w-xs mx-auto sm:mx-0">
                                                <a
                                                  href="https://live.meon.co.in/sproutresearch/analyst"
                                                  className="group relative block w-full h-full"
                                                >
                                                  <div className="relative bg-white rounded-2xl p-4 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                                                    {/* Background Pattern */}
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                                                    
                                                    {/* Icon Container */}
                                                    <div className="relative mb-3">
                                                      <div className="inline-flex p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                        </svg>
                                                      </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative flex-1">
                                                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                        Individual Investor
                                                      </h4>
                                                    </div>

                                                    {/* CTA */}
                                                    <div className="relative">
                                                      <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-100 group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300">
                                                        <span className="font-semibold text-blue-700 text-sm">Subscribe</span>
                                                        <div className="flex items-center space-x-1">
                                                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                                          <div className="w-1.5 h-1.5 bg-blue-300 rounded-full group-hover:bg-blue-400 transition-colors delay-75"></div>
                                                          <div className="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-300 transition-colors delay-150"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>

                                              {/* Half-Yearly Subscription Card */}
                                              <div className="flex-1 max-w-xs mx-auto sm:mx-0">
                                                <a
                                                  href="/Soon"
                                                  className="group relative block w-full h-full"
                                                >
                                                  <div className="relative bg-white rounded-2xl p-4 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between overflow-hidden">
                                                    {/* Background Pattern */}
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                                                    
                                                    {/* Coming Soon Badge */}
                                                    <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                                                      SOON
                                                    </div>

                                                    {/* Icon Container */}
                                                    <div className="relative mb-3">
                                                      <div className="inline-flex p-2 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                                        </svg>
                                                      </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative flex-1">
                                                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">
                                                        NRI & Corporate Investor
                                                      </h4>
                                                    </div>

                                                    {/* CTA */}
                                                    <div className="relative">
                                                      <div className="flex items-center justify-between p-2 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-lg border border-slate-200 group-hover:from-slate-100 group-hover:to-slate-200/50 transition-all duration-300">
                                                        <span className="font-semibold text-slate-600 text-sm">Coming Soon</span>
                                                        <div className="flex items-center space-x-1">
                                                          <div className="w-4 h-0.5 bg-slate-300 rounded-full overflow-hidden">
                                                            <div className="w-full h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Footer */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 sm:p-6 text-center border-t border-gray-200">
                            <p className="text-blue-800 font-bold text-sm sm:text-base">
                                <a className="" href='https://sproutpartners.in/'>www.sproutresearch.in</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  );
}