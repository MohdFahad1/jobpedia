import Image from 'next/image'
import React from 'react';
import pfp from '../../../assets/pfp.png';
import {BiSolidQuoteAltLeft} from 'react-icons/bi'

const Testimonials = () => {
  return (
    <section className="px-5 py-10 mb-28 text-center lg:px-20 ">

        <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="mb-5 text-3xl font-semibold">What <span className="text-[#4374C2]">Job Seekers</span> Says About Us</h1>
            <p className="text-lg text-gray-600"><span className="text-[#4374C2]">JOBZone</span> is Great Oppurtunity Platform For Finding Jobs And All People Achieve Success</p>
        </div>

        <div className="flex lg:my-24 my-0 lg:flex-row flex-col lg:gap-0 gap-28 lg:justify-normal md:justify-center justify-center lg:items-start md:items-center items-center">

          {/* 1st card */}
          <div className="bg-white py-6 lg:px-10 px-3 h-[300px] lg:w-auto   md:w-[500px]  w-[350px] lg:mt-10 mt-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:-mr-6 -mr-0">
            <div className="flex flex-col justify-center items-center">
            <BiSolidQuoteAltLeft className="text-[80px] text-[#D3D3D3]"/>
              <p className="text-xl  ">
              Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Sint adipisicing in in nostrud id esse aliqua proident sint elit deserunt.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:mt-12 md:mt-16 mt-6">
              <div className="flex justify-between items-center">
                <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover bg-white"/>
              </div>
              <h1 className="text-2xl font-semibold text-black">Bemard Amault</h1>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-[#4374C2] py-6 lg:px-10 px-3 h-[300px] lg:w-auto   md:w-[500px]  w-[350px] lg:-mt-20 -mt-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white">
            <div className="flex flex-col justify-center items-center">
            <BiSolidQuoteAltLeft className="text-[80px] text-[#D3D3D3]"/>
              <p className="text-xl">
              Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Sint adipisicing in in nostrud id esse aliqua proident sint elit deserunt.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:mt-12 md:mt-16 mt-6">
              <div className="flex justify-between items-center">
                <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover bg-white"/>
              </div>
              <h1 className="text-2xl font-semibold text-black">Bemard Amault</h1>
            </div>
          </div>

          {/* 3rd card */}
          <div className="bg-white py-6 lg:px-10 px-3 h-[300px] lg:w-auto   md:w-[500px]  w-[350px] lg:mt-10 mt-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:-ml-6 -ml-0 -z-10">
            <div className="flex flex-col justify-center items-center">
            <BiSolidQuoteAltLeft className="text-[80px] text-[#D3D3D3]"/>
              <p className="text-xl  ">
              Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Sint adipisicing in in nostrud id esse aliqua proident sint elit deserunt.
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center lg:mt-12 md:mt-16 mt-6">
              <div className="flex justify-between items-center">
                <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover bg-white"/>
              </div>
              <h1 className="text-2xl font-semibold text-black">Bemard Amault</h1>
            </div>
          </div>


        </div>
    </section>
  )
}

export default Testimonials