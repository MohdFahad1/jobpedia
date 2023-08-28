import React from 'react';
import {FaFigma, FaCode, FaArrowRight} from 'react-icons/fa';
import {GoGoal, GoDeviceCameraVideo} from 'react-icons/go';
import {ImStatsBars} from "react-icons/im";
import {HiOutlineSpeakerphone} from 'react-icons/hi';
import {PiGraduationCap, PiPenNibBold} from 'react-icons/pi'
import Link from 'next/link';

const Category = () => {
    return (
        <section className="bg-[#E0EEF3] px-2 py-10 md:px-20 lg:px-20">
            <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center  items-center lg:px-20 md:px-10 px-2">
                <h1 className="text-2xl font-semibold lg:text-3xl">Popuplar Job Categories</h1>
                <Link href={"/jobs"}>
                <button className='group flex justify-between items-center text-[#4374C2] rounded-full p-2 font-medium w-[180px] text-xl'>Explore More <FaArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none"/></button></Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

                <div className="p-4 bg-white w-[270px] h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  hover:content duration-300 flex flex-col justify-center">
                <span className="text-5xl   bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><FaFigma /></span>
                        <h1 className="text-2xl font-semibold my-4">Design & Art</h1>
                        <p>100+ jobs vacancy</p>
                    </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl   bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><FaCode /></span>
                            <h1 className="text-2xl font-semibold my-4">Development</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                            <span className="text-5xl   bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><GoGoal /></span>
                            <h1 className="text-2xl font-semibold my-4">Human Resource</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><ImStatsBars /></span>
                            <h1 className="text-2xl font-semibold my-4">Sales & Marketing</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px] "><GoDeviceCameraVideo /></span>
                            <h1 className="text-2xl font-semibold my-4">Video Editting</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><HiOutlineSpeakerphone /></span>
                            <h1 className="text-2xl font-semibold my-4">Marketing</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><PiGraduationCap /></span>
                            <h1 className="text-2xl font-semibold my-4">Education</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#4374C2] hover:text-white transition-transform hover:-translate-y-3 motion-reduce:transform-none  duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#6599ee] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><PiPenNibBold /></span>
                            <h1 className="text-2xl font-semibold my-4">Digital & Creative</h1>
                            <p>100+ jobs vacancy</p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
