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
                    <p>Last updated: July 03, 2025</p>
                </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
            <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Overview of the Privacy Policy:
                </h2>
            
                <div className="text-gray-700 leading-relaxed space-y-6">
                    <p>Welcome to www.sproutresearch.in , a (the “Website”) owned by Sprout Research (Sprout Reserach” or “we” or “us” or “our”), and whose Proprietor is Shikha Kapur, respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website  www.sproutresearch.in. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy.  Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
                    You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</p>
                </div>

               <div className="text-gray-700 leading-relaxed space-y-6">
                <ul className='list-decimal pl-6'>
                    <li> COLLECTION AND USE OF PERSONAL INFORMATION: We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        <ul className='list-disc pl-6'>
                            <li>Personally identifiable information, such as your name, shipping address, email address, mobile number and telephone number, and demographic information, such as your age/date of birth, gender, country of birth, country of residence, employment status, income and source of wealth, Permanent Account Number (PAN), GSTIN, and interests that you voluntarily give to us when you register with the Site.</li>
                            <li>When you choose to participate in various activities related to the Site like providing feedback or when you or your organization offer to provide services to us.</li>
                            <li>In some circumstances, we collect personal data about you from third-party source. For example, we may collect personal data from your organization, other organizations with whom you have dealings, government agencies, a credit reporting agency, fraud prevention agencies, financial crime agencies, an information or service provider or any publicly available record.</li>
                            <li>You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site. We may also use personal information for internal purposes such as auditing, data analysis and research to improve Sprout research products, services and customer communications</li>
                            <li>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            <li>Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, Razorpay and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</li>
                            <li>We also may collect information regarding customer activities on our Website and from our other products and services. This information may be aggregated and used to help us provide more useful information to our customers and to understand which parts of our Website, products and services are of most interest. Such aggregated data shall be considered as non-personal information for the purposes of this Privacy Policy. In the event we combine any non-personal information along with any personal information, the combined information will be treated as personal information for as long as it remains combined.</li>
                            <li>www.sproutresearch.in uses cookies (very small files that are sent by the website to customer’s computer or other access device) which it can access when customers visit its site in future. These cookies enable the customers to browse the website and use its features. We use these cookies to measure and analyze how the customers use the website. This allows us to continuously improve the website and the customer’s experience. When browsing online, the website will remember preferences customer’s make (for example customer’s user name, language or location). This makes their browsing experience simpler, easier and more personal. These cookies are used to deliver relevant adverts. In addition, they limit the number of times customers see an advertisement as well as helping it measure the effectiveness of the advertising campaigns. By using Sprout research website customer agree that it can place these types of cookies on customer’s device and access them when they visit the site in the future. If customers want to delete any cookies that are already on their computer, please refer to the help and support area on the internet browser for instructions on how to locate the file or directory that stores cookies.</li>
                            <li>You agree to receive news, offers, and other promotional material from Sprout research, including your email, phone number and name to the contact information you are submitting. You consent to Sprout research, its affiliates, and service providers processing your personal data for these purposes and as described in the Privacy Policy. You understand that you can withdraw the consent at any time.</li>  
                        </ul>
                    </li>
                    <li>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.  Specifically, we may use information collected about you via the Site to:
                         <ul className='list-disc pl-6'>
                           <li>Assist law enforcement agencies;</li>
                           <li>Compile anonymous statistical data and analysis for use internally or with third parties;</li>
                           <li>reate and manage your account</li>
                           <li>Process your application to use our services and to provide you with the requested services</li>
                           <li>Comply with our obligations arising from any contracts entered into between you and us and to provide with the information, products and services that you requested from us</li>
                           <li>Help protect your information and prevent unauthorized access to it</li>
                           <li>Deal with any queries, complaints or problems reported by you</li>
                           <li>Email you regarding your account or order</li>
                           <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site</li>
                           <li>Generate a personal profile about you to make future visits to the Site more personalized</li>
                           <li>Increase the efficiency and operation of the Site</li>
                           <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                           <li>Notify you of updates to the Site</li>
                           <li>Offer new products, services, and/or recommendations to you</li>
                           <li>Perform other business activities as needed</li>
                           <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
                           <li>Process payments and refunds</li>
                           <li>Request feedback and contact you about your use of the Site</li>
                           <li>Resolve disputes and troubleshoot problems</li>
                           <li>Respond to product and customer service requests</li>
                           <li>Send you a newslette</li>
                        </ul>
                    </li>
                    <li>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.  This includes exchanging information with other entities for fraud protection and credit risk reduction.</li>
                    <li>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                    <li>With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
                    <li>We may use third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.</li>
                    <li>We may share your information with advertisers and investors for the purpose of conducting general business analysisOur appointed auditors, accountants, lawyers and other professional advisers (e.g. compliance consultants), to the extent that they require access to the information in order to advise us;</li>
                    <li>The security of your personal information is important to us. Sprout research takes precautions, including administrative, technical, procedural and physical measures, to safeguard your personal information against loss, theft and misuse, as well as against unauthorized access, disclosure, alteration and destruction.</li>
                    <li>www.sproutresearch.in reserves the right to amend this Privacy Policy at any time. The policies, as and how modified, shall be updated on the Website and the same shall be notified on the Website. We encourage you to review this Privacy Policy whenever you visit our Website to understand how your personal information is used.</li>
                    <li>www.sproutresearch.in reserves the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order, or legal process.</li>
                    <li>The Website provides the user the opportunity to stop receiving communications from Sprout research. In order to do the same, you shall be required to send an email to team@sproutpartners.in .</li>
                    <li>In case, you have any questions about this Privacy Policy, or this Website, or your dealings with this Website, you may contact a representative of Sprout research by emailing us at team@sproutpartners.in .</li>
                </ul>
            </div>

            </div>
        </div>

        

    </div>

    <Footer />
    </>
  );
}

