'use client'
import React from 'react'
import Link from 'next/link'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image';

const page = () => {
  return (
    
    
    <>
        <Header />
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <Image
            src="/images/pic5.jpg" // make sure this path is correct
            alt="Background"
            fill
            className="object-cover object-top z-0"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 sm:px-8 lg:px-20 z-10">
            
        
            {/* Heading with animated underline */}
            
            
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium mb-1 sm:mb-2 text-center leading-tight">
             Coming Soon
            </h1>
           
        
            {/* Paragraphs  */}
            {/*
         <div className="text-xs sm:text-sm md:text-base lg:text-lg max-w-5xl text-center space-y-0.5 sm:space-y-1 px-2">
              <p className="leading-tight">
                Sprout Research delivers comprehensive research services rooted in detailed fundamental and forensic analysis. Its
              </p>
              <p className="leading-tight">
                mission is to safeguard your investments by employing strategic risk management and vigilant monitoring, enabling timely
              </p>
              <p className="leading-tight">
                adjustments in response to evolving market conditions. Sprout Research excels in uncovering high-growth investment
              </p>
              <p className="leading-tight">
                opportunities ahead of the curve. Through rigorous analysis and a selective approach, it aims to provide you with a decisive
              </p>
              <p className="leading-tight">
                edge in the ever-changing landscape of equity investing.
              </p>
            </div>*/}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default page