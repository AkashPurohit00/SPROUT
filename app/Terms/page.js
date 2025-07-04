import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

export default function Terms() {
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
                     Terms and Conditions
                    </h1>
                    <p>Last updated: July 3, 2025</p>
                </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
            <div className="prose prose-lg max-w-none">
            <p className='mb-4'>Welcome to www.sproutresearch.in , a (the “Website”) owned by Sprout Research (Sprout Reserach” or “we” or “us” or “our”), and whose Proprietor is Shikha Kapur. Further to the Terms of Use provided on Sprout Research Website , we disclaim all liabilities and warranties with respect to payment of fees (“Fees”) that is applicable to the programs you have opted for through the Sprout Research Website . Such Fee shall include but not be limited to subscription fee. Further the User agrees and understands that:</p>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
                <ul className='list-decimal pl-6'>
                    <li>It shall be the responsibility of the User to make all necessary payments regarding the Fee, well in advance of the last date specified by the Sprout Research.</li>
                    <li>The online payment facility provided by the Ridge Research is neither banking nor a financial service but is merely a facilitator for ease of payment (“Payment Gateway Service Provider”). The Payment Gateway Service Provider facilitates online payments, collection and remittance of money for the transactions on the Ridge Research Website by using existing authorized banking infrastructure and credit card payment gateway networks. Further, by providing such payment facility through the Payment Gateway Service Provider, the Ridge Research is neither acting as a trustee nor acting in a fiduciary capacity with respect to the payments made by the User against the purchase of Services on the Website. The User further understands and agrees that, all payments made by the User through the Payment Gateway Service Provider shall take a minimum of one-two (1-2) working days to be effectively processed. The User shall make the payment of the applicable Fee through the Payment Gateway Service Provider at his/her own risk. Ridge Research shall not be responsible for any failure or delay in processing the Fee paid by the User through the Payment Gateway Service Provider.</li>
                    <li>While availing any of the payment method/s available on the Website Ridge Research will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to the User due to (a) Lack of authorization for any transactions; (b) Any payment issues arising out of the transaction; (c) decline of such transaction for any reason; or (d) use, or inability to use the payment page maintained by the Payment Gateway Service Provider.</li>
                    <li>Ridge Research shall not be liable for any loss or damages suffered by the User due to any failure, delay or interruption on part of the Payment Gateway Service Provider, including but not limited to, partial or total failure of any network terminal, data processing system, computer tele-transmission or telecommunications system or other circumstances which is solely in the control of the Payment Gateway Service Provider.</li>
                    <li>In the event of rejection of Services by Ridge Research due to delayed payments by the User, the User shall provide a written request to us along with a payment receipt validating the payment being made for the Information and Communication Technology (ICT) enabled subscription(s). Upon verification of such payment receipt, the Ridge Research shall consider such request for refund of payments, in accordance with the Ridge Research internal refund policies published on the company website</li>
                    <li>n the event of rejection of Services by Ridge Research due to delayed payments by the User, the User shall provide a written request to us along with a payment receipt validating the payment being made for the Information and Communication Technology (ICT) enabled subscription(s). Upon verification of such payment receipt, the Ridge Research shall consider such request for refund of payments, in accordance with the Ridge Research internal refund policies published on the company website Ridge Research, the Payment Gateway Service Provider shall resolve the complaints reported by the User, subject to its internal policies and rules.</li>
                </ul>
            </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  );
}

