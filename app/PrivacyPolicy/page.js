import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

export default function PrivacyPolicy() {
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
                     Privacy Policy
                    </h1>
                </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
            <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Overview of the Privacy Policy:
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                You may visit our website without revealing any personal information wherever permissible. Certain transactions may require submission of personal information like profile updates and certain databases. We will not sell, swap or rent, or otherwise disclose to any third party any personal information for commercial purpose and such information will be utilized only for the purpose stated. To accomplish such purpose, we may disclose the information to our employees, consultants and other concerned having a genuine need to know the information. Our web server may record the numerical Internet Protocol (IP) address of the computer you are using, information about your browser and operating system, date and time of access and page which linked you to our website. This information may be used to administer and improve our website and to generate aggregate statistical reports and such like purposes. We may use cookies and pixels or transparent GIF files to track session information and/or to deliver customizable and personalized services and information and/or for other purposes of website such informations is anonymous and not personally identifiable. Any information collected ordinarily is not disclosed to third parties but may be disclosed in limited circumstances as and if required by law, court order, statutory bodies, rules & regulations or for improving our website of the laws, security of our network or for any purpose as deemed necessary. While we make our best efforts to protect the privacy of users however we cannot ensure or warrant the security of any information you transmit to us, and you do so at your own risk. This privacy policy may be revised/modified/amended at any point of time at the sole discretion of the Company.
                </p>
            </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py- lg:py-1">
            <div className="max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Address:
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-1 mb-8">
                <p>
                2nd Floor, Indure House, Savitri Cinema Complex, Greater Kailash-II, New Delhi-110048
                </p>
            </div>
            </div>
        </div>

    </div>

    <Footer />
    </>
  );
}

