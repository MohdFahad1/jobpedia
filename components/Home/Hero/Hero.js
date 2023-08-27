import Image from 'next/image';
import React from 'react';
import { BiSolidChevronRight } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import heroLady from '../../../assets/heroLady.png';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="hero flex justify-around items-center px-0 mt-10 mb-10 md:justify-center lg:mt-0 lg:justify-normal relative lg:pl-[100px]">
            <div className="text-center md:flex md:flex-col md:items-center lg:text-left lg:justify-normal lg:items-start z-10 text-box">
                <h1 className="text-4xl font-bold w-auto lg:w-[800px] lg:text-7xl">Find <span className="text-[#4374C2]">Job</span> that is suitable for you</h1>
                <p className="my-4 text-[20px] text-gray-500 w-auto md:w-[570px] lg:w-[720px]">
                    Unleash your career potential with our job searching site. Find tailored job opportunities that fit your goals. Join us today and step into a brighter professional future.</p>
                <div className="flex gap-5 justify-center items-center lg:justify-normal lg:items-start">
                    <Link href="/jobs"><button className="flex items-center gap-3 bg-[#4374C2] text-white rounded-full p-4 font-semibold text-lg shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)]  duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:bg-[#2c528f]">Apply Now <BsPencilSquare /></button></Link>
                    <Link href="/about"><button className="flex items-center gap-3 border-2 border-[#4374C2] text-[#4374C2] rounded-full p-4 font-semibold text-lg duration-300 hover:bg-[#4374C2] hover:text-white">Explore <BiSolidChevronRight /></button></Link>
                </div>
            </div>
            <div>
                <Image src={heroLady} alt="bg" className="lg:block hidden absolute right-0 bottom-0" />
            </div>
        </section>
    )
}

export default Hero