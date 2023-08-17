import React from 'react';
import {FaFigma, FaCode} from 'react-icons/fa';
import {GoGoal, GoDeviceCameraVideo} from 'react-icons/go';
import {ImStatsBars} from "react-icons/im";
import {HiOutlineSpeakerphone} from 'react-icons/hi';
import {PiGraduationCap, PiPenNibBold} from 'react-icons/pi'

const Category = () => {
    return (
        <section className="bg-[#E0EEF3] px-2 py-10 md:px-20 lg:px-20">
            <h1 className="text-center text-3xl font-semibold lg:text-4xl">Popular Job Categories</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

                <div className="p-4 bg-white w-[270px] h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white hover:content duration-300 flex flex-col justify-center">
                <span className="text-5xl   bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><FaFigma /></span>
                        <h1 className="text-2xl font-semibold my-4">Design & Art</h1>
                        <p>100+ jobs vacancy</p>
                    </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl   bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><FaCode /></span>
                            <h1 className="text-2xl font-semibold my-4">Development</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                            <span className="text-5xl   bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><GoGoal /></span>
                            <h1 className="text-2xl font-semibold my-4">Human Resource</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><ImStatsBars /></span>
                            <h1 className="text-2xl font-semibold my-4">Sales & Marketing</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px] "><GoDeviceCameraVideo /></span>
                            <h1 className="text-2xl font-semibold my-4">Video Editting</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><HiOutlineSpeakerphone /></span>
                            <h1 className="text-2xl font-semibold my-4">Marketing</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><PiGraduationCap /></span>
                            <h1 className="text-2xl font-semibold my-4">Education</h1>
                            <p>100+ jobs vacancy</p>
                        </div>

                        <div className="p-4 bg-white w-[270px]   h-[250px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 flex flex-col justify-center">
                        <span className="text-5xl bg-[#81ddf5] rounded-full p-2 flex items-center justify-center w-[100px] h-[100px]"><PiPenNibBold /></span>
                            <h1 className="text-2xl font-semibold my-4">Digital & Creative</h1>
                            <p>100+ jobs vacancy</p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
