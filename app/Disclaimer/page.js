import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const Page = () => {
  return (
    <>
    <Header/>
    <div className="px-4 sm:px-8 lg:px-12">
                    <div className="relative w-full h-[50vh] bg-white mt-3 rounded-3xl overflow-hidden">
                      <Image
                        src="/images/cone.jpg"
                        alt="Background"
                        fill
                        className="object-fill object-center"
                      />
            
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20 mb-14">
                        
                        {/* Heading  */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8 lg:whitespace-nowrap">
                         Disclaimer
                        </h1>
                        
                      </div>
                    </div>
                    <p className='mt-10 text-lg text-left
                    '>
                       Shikha Kapur (Proprietor of Sprout Research) is a SEBI registered Research Analyst (INH000019169) provides research services to various investors. No content on this website
                        should be construed to be investment advice. You should consult a qualified financial advisor prior to making any actual investment or trading decisions. All information is a point of 
                        view, and is for educational and informational use only. The author accepts no liability for any interpretation of articles or comments on this website being used for actual investments.
                         While we may talk about strategies or positions in the market, our intent is solely to showcase effective risk-management in dealing with financial instruments. This is purely an
                          information service and any trading done on the basis of this information is at your own, sole risk.
                    </p>
                  </div>
                         {/* Two-column responsive details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
          {/* Left column */}
          <div className='pl-3 lg:pl-20'>
          
            <p className="text-sm lg:text-2xl space-y-2 ">
                SHIKHA KAPUR PROPRIETOR OF SPROUT RESEARCH<br/>
              Trade Name: SPROUT RESEARCH<br />
              Registration No.: INH000019169<br />
              Registered office Address: A 35 FIRST FLOOR, Chittaranjan Park, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019<br />
              Contact No: 9811744587<br />
              Email Id: shikhaa.kapur@gmail.com<br />
              Compliance Officer: Shikha Kapur Contact No: 9811744587<br />
              Email Id: shikhaa.kapur@gmail.com<br />
              Grievance Officer: Shikha Kapur Contact No: 9811744587<br />
              Email ID: shikhaa.kapur@gmail.com
            </p>
          </div>

          {/* Right column */}
          <div className='pl-6 lg:pl-20'>
            <h2 className="text-sm md:text-xl lg:text-2xl font-bold mb-4">Standard Warning</h2>
            <p className="text-sm md:text-xl lg:text-xl mb-8 ">
              “Investment in securities market are subject to market<br/>
               risks. Read all the related documents carefully before<br/>
                investing.”
            </p>

            <h2 className="text-sm md:text-xl lg:text-2xl font-bold mb-4">Disclaimers</h2>
            <p className="text-sm md:text-xl lg:text-xl">
              “Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors”
            </p>
          </div>
        </div>
    
                  <Footer/>

    </>
  )
}

export default Page