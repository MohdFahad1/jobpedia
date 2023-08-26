import React from 'react';
import Image from 'next/image';
import { RiAccountCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { IoNewspaperOutline } from 'react-icons/io5';
import apply from '../../../assets/applyLady.png';

const Apply = () => {
  return (
    <section className="flex md:flex-col lg:flex-row lg:justify-around justify-center items-center px-5 my-5 md:my-14 lg:px-0">
      <div className="bg-[#4374C2] lg:flex justify-end rounded-tl-[248px] rounded-tr-[201px] rounded-bl-[150px] rounded-b-[110px]  h-[450px] w-[450px] hidden">
        <Image src={apply} alt="human" className="hidden md:block lg:block -scale-x-100  -mr-[100px] h-[450px] w-[600px]" />
      </div>

      <div className='w-auto lg:w-[500px]'>
        <h1 className="text-2xl font-bold text-center md:text-4xl lg:text-4xl lg:text-left mb-3 md:mb-5 lg:mb-10">Just 3 Easy Steps to New Capabilities</h1>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-start items-center p-3  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className="text-5xl bg-[#4374C2] text-white p-2 flex justify-center items-center rounded-full">
              <RiAccountCircleLine />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Create Account</h1>
              <p className="text-gray-500">Join us today and step into a brighter professional future.</p>
            </div>
          </div>

          <div className="flex gap-5 justify-start items-center p-3  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className="text-5xl bg-[#4374C2] text-white p-2 flex justify-center items-center rounded-full">
              <IoNewspaperOutline />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Quick Jobs</h1>
              <p className="text-gray-500">Find tailored job opportunities that fit your goals.</p>
            </div>
          </div>

          <div className="flex gap-5 justify-start items-center p-3  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className="text-5xl bg-[#4374C2] text-white p-2  flex justify-center items-center rounded-full">
              <TiTick />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Apply Them</h1>
              <p className="text-gray-500">Unleash your career potential with our job searching site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
