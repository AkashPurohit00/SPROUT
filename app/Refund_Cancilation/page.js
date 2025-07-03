import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

export default function Refund_canci() {
  return (
    <>
    <Header />
    
    <div className="max-h-screen bg-white">
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
                     Refund & Cancellation Policies
                    </h1>
                </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
            <div className="prose prose-lg max-w-none">
            
            <div className="text-gray-700 leading-relaxed space-y-6">
                <ul className='list-decimal pl-6'>
                    <li>No refunds will be offered on any subscription.</li>
                    <li>If the different subscription access is wrongfully delivered (different subscription instead of the subscription mentioned in the order confirmation) then we are open to extending full refund. If the client intimates this within 30 days of date of subscription, we will process the refund within 15 days of such intimation</li>
                    <li>No refunds would be given if the customer has provided wrong or incomplete email address</li>
                </ul>
            </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  );
}

