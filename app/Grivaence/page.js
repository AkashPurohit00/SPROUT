'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const page = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add form submission logic here (e.g., API call)
  }
  return (
    <>
        <Header />
         <div className="px-4 sm:px-8 lg:px-12">
                <div className="relative w-full h-[50vh] bg-white mt-3 rounded-3xl overflow-hidden">
                  <Image
                    src="/images/black.avif"
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
                <p className='mt-10 text-lg text-left
                '>
                   Client’s queries / complaints may arise due to lack of understanding or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation,
                    clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff 
                    towards client.
                </p>
              </div>
              {/*Table*/}
              <div className="space-y-8 px-4 sm:px-8 lg:px-12 mt-16">
      
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-6 gap-0 items-stretch">
            {/* Column 1: Details of Designation */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-4">
                Details of Designation
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">Proprietor</div>
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">Compliance Officer</div>
                <div className="text-center py-3 text-gray-700 font-medium px-4 h-16 flex items-center justify-center">Grievance Officer</div>
              </div>
            </div>
            
            {/* Column 2: Contact Person Name */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Contact Person Name
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  Shikha Kapur
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                 Shikha Kapur
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                 Shikha Kapur
                </div>
              </div>
            </div>
            
            {/* Column 3: Physical Address */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Physical Address
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                  A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                 A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-words">
                 A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
              </div>
            </div>
            
            {/* Column 4: Contact No */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Contact No
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  9811744587
                </div>
                <div className="text-center py-3 text-gray-700 text-bae leading-relaxed px-4 h-16 flex items-center justify-center">
                  9811744587
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  9811744587
                </div>
              </div>
            </div>
            
            {/* Column 5: Email ID */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4">
                Email ID
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text- base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                shikhaa.kapur@gmail.com
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
              shikhaa.kapur@gmail.com
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center break-all">
                 shikhaa.kapur@gmail.com
                </div>
              </div>
            </div>
            
            {/* Column 6: Working Hours */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-4 rounded-tr-xl">
            Working Hours
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-bae text-gray-700 leading-relaxed px-4 h-16 flex items-center justify-center">
                  Monday to Friday, 11
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                 Monday to Friday, 11
                </div>
                <div className="text-center py-3 text-gray-700 text-base leading-relaxed px-4 h-16 flex items-center justify-center">
                  Monday to Friday, 11
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View - Horizontally Scrollable */}
      <div className="md:hidden">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <div className="grid grid-cols-6 gap-0 items-stretch min-w-[800px]">
            {/* Column 1: Details of Designation */}
            <div className="flex flex-col bg-blue-200 rounded-tl-xl">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center px-3">
                <span className="text-sm">Details of Designation</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">Proprietor</div>
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">Compliance Officer</div>
                <div className="text-center py-3 text-gray-700 font-medium px-3 text-sm h-16 flex items-center justify-center">Grievance Officer</div>
              </div>
            </div>
            
            {/* Column 2: Contact Person Name */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Contact Person Name</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Shikha Kapur
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Shikha Kapur
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Shikha Kapur
                </div>
              </div>
            </div>
            
            {/* Column 3: Physical Address */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Physical Address</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-words">
                  A 35 FIRST FLOOR, Chittaranjan Park, NEW
                </div>
              </div>
            </div>
            
            {/* Column 4: Contact No */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Contact No</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  9811744587
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  9811744587
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  9811744587
                </div>
              </div>
            </div>
            
            {/* Column 5: Email ID */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3">
                <span className="text-sm">Email ID</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  shikhaa.kapur@gmail.com
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  shikhaa.kapur@gmail.com
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center break-all">
                  shikhaa.kapur@gmail.com
                </div>
              </div>
            </div>
            
            {/* Column 6: Working Hours */}
            <div className="flex flex-col">
              <div className="font-semibold text-center text-gray-800 pb-3 h-20 flex items-center justify-center bg-blue-200 px-3 rounded-tr-xl">
                <span className="text-sm">Working Hours</span>
              </div>
              <div className="flex-1 pt-4">
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Monday to Friday, 11
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Monday to Friday, 11
                </div>
                <div className="text-center py-3 text-gray-700 text-xs leading-relaxed px-3 h-16 flex items-center justify-center">
                  Monday to Friday, 11
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 {/*Info*/}
      <div className="space-y-4 px-4 sm:px-8 lg:px-12 mt-28 mb-20">
       
        <ol className="list-decimal list-inside text-base sm:text-2xl text-gray-700 space-y-4 leading-relaxed">
          <li>
            Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team at <span className="font-medium">shikhaa.kapur@gmail.com</span>. Alternatively, the Investor may call on <span className="font-medium">9811744587</span>.
          </li>
          <li>
            A letter may also be written with their query/complaint and posted to the following address: <span className="font-medium">A 35 FIRST FLOOR, Chittaranjan Park, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019</span>.
          </li>
          <li>
            Clients can write to the research analyst at <span className="font-medium">shikhaa.kapur@gmail.com</span> if a response is not received within 10 business days of contacting the Client Servicing Team. A reply can be expected within 10 business days of approaching the research analyst.
          </li>
          <li>
            If unsatisfied with the response, clients can lodge their grievance with SEBI at <a href="https://scores.sebi.gov.in/" className=" underline" target="_blank" rel="noopener noreferrer">https://scores.sebi.gov.in/</a> or write to any SEBI office. SCORES is also available as a mobile app here: <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" className=" underline" target="_blank" rel="noopener noreferrer">Download SCORES App</a>.
          </li>
          <li>
            If still dissatisfied, clients may access the SEBI-mandated <span className="font-medium">Online Dispute Resolution (ODR) Portal</span> which provides conciliation and online arbitration. Read SEBI Circular No. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023. Access the ODR portal here: <a href="https://smartodr.in/" className=" underline" target="_blank" rel="noopener noreferrer">https://smartodr.in/</a>.
          </li>
        </ol>
      </div>
      {/*Form*/}
     <div className="max-w-7xl mx-auto px-4 py-2 mb-8"> 
  <h2 className="text-5xl font-semibold mb-8 text-left">Contact Us</h2>

  <form
    onSubmit={handleSubmit}
    className="bg-white space-y-8"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="w-full border border-gray-300 px-10 py-2 text-base"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="w-full border border-gray-300 px-10 py-2 text-base"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        className="w-full border border-gray-300 px-10 py-2 text-base"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Phone</label>
      <PhoneInput
        country={'in'}
        value={formData.phone}
        onChange={handlePhoneChange}
        placeholder="Enter your phone number"
        inputClass="!w-full !h-10 !text-base !px-10"
        containerClass="w-full"
        inputProps={{ required: true }}
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Message</label>
      <textarea
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message here..."
        className="w-full border border-gray-300 px-10 py-2 text-base"
        required
      ></textarea>
    </div>

   <div className="flex justify-start">
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-16 lg:px-52 hover:bg-blue-700 transition text-lg"
      >
        Submit
      </button>
    </div>
  </form>
</div>


  
  
              <Footer/>
    </>
  )
}

export default page