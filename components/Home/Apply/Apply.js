import React from 'react';
import { RiAccountCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { IoNewspaperOutline } from 'react-icons/io5';

const Apply = () => {
  return (
    <section className="px-5 my-10 md:my-14 lg:px-20 ">
      <div>
        <h1 className="text-3xl font-bold text-center mb-7 md:text-4xl lg:text-5xl">Just 3 Easy Steps to New Capabilities</h1>
      </div>
      <div className="flex flex-col gap-10 justify-between items-center md:flex-row lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-2 justify-center items-center text-center p-3 w-[250px] h-[250px] shadow-[0px_2px_43px_3px_#00000024] rounded-md">
            <div  className="text-5xl bg-[#20B8DE] text-white rounded-full h-[80px] w-[60px] flex justify-center items-center">
                <RiAccountCircleLine />
            </div>
            <h1 className="text-xl font-semibold">Account</h1>
            <p className="text-gray-500">Join us today and step into a brighter professional future.</p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center p-3 w-[250px] h-[250px] shadow-[0px_2px_43px_3px_#00000024] rounded-md">
            <div  className="text-5xl bg-[#20B8DE] text-white rounded-full h-[80px] w-[60px] flex justify-center items-center">
                <IoNewspaperOutline />
            </div>
            <h1 className="text-xl font-semibold">Quick Jobs</h1>
            <p className="text-gray-500">Find tailored job opportunities that fit your goals.</p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center p-3 w-[250px] h-[250px] shadow-[0px_2px_43px_3px_#00000024] rounded-md">
            <div  className="text-5xl bg-[#20B8DE] text-white rounded-full h-[80px] w-[60px] flex justify-center items-center">
                <TiTick />
            </div>
            <h1 className="text-xl font-semibold">Apply Them</h1>
            <p className="text-gray-500">Unleash your career potential with our job searching site.</p>
        </div>
      </div>
    </section>
  );
};

export default Apply;
