import Image from 'next/image';
import React from 'react';
import hero from '../../assets/hero.png';
import { BiSolidChevronRight } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
const Hero = () => {
    return (
        <section className="flex justify-between items-center px-0 mt-10 mb-10 lg:mt-0 lg:px-5">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold w-auto lg:w-[570px] lg:text-5xl">Find <span className="text-[#20B8DE]">Job</span> that is suitable for you</h1>
                <p className="my-4 text-lg text-gray-500 w-auto lg:w-[570px]">
                    Unleash your career potential with our job searching site. Find tailored job opportunities that fit your goals. Join us today and step into a brighter professional future.</p>
                <div className="flex gap-5 justify-center items-center lg:justify-normal lg:items-start">
                    <button className="flex items-center gap-3 bg-[#20B8DE] text-white rounded-md p-4 font-semibold text-lg shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)]  duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:bg-[#19849f]">Apply Now <BsPencilSquare /></button>
                    <button className="flex items-center gap-3 border-2 border-[#20B8DE] text-[#20B8DE] rounded-md p-4 font-semibold text-lg duration-300 hover:bg-[#20B8DE] hover:text-white">Explore <BiSolidChevronRight /></button>
                </div>
            </div>
            <div>
                <Image src={hero} alt="bg" className="lg:block hidden" />
                {/* <LottieAnimation /> */}
            </div>
        </section>
    )
}

export default Hero