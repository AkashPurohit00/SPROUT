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

        {/* A4 Document Image Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-center">
                <div className="relative w-full max-w-2xl">
                    {/* A4 aspect ratio container (210:297) */}
                    <div className="relative w-full" style={{ aspectRatio: '210/297' }}>
                        <Image
                            src="/images/flyer.jpg" // Replace with your actual document image path
                            alt="Product Pricing Document"
                            fill
                            className="object-contain shadow-2xl border border-gray-200 rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>

        

    </div>

    <Footer />
    </>
  );
}

