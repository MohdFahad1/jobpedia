import React from 'react';
import {FaFigma, FaCode} from 'react-icons/fa';
import {GoGoal, GoDeviceCameraVideo} from 'react-icons/go';
import {ImStatsBars} from "react-icons/im";
import {HiOutlineSpeakerphone} from 'react-icons/hi';
import {PiGraduationCap, PiPenNibBold} from 'react-icons/pi'

const Category = () => {
    return (
        <section className="bg-[#E0EEF3] px-2 py-10 md:px-20 lg:px-20">
            <h1 className="text-center text-3xl font-semibold">Popular Job Categories</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">

                <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white hover:content duration-300 text-center flex flex-col justify-center items-center">
                <span className="text-6xl   "><FaFigma /></span>
                        <h1 className="text-2xl font-semibold my-4">Design & Art</h1>
                        <p>100+ jobs vacancy in a day</p>
                    </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><FaCode /></span>
                            <h1 className="text-2xl font-semibold my-4">Development</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                            <span className="text-6xl   "><GoGoal /></span>
                            <h1 className="text-2xl font-semibold my-4">Human Resource</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><ImStatsBars /></span>
                            <h1 className="text-2xl font-semibold my-4">Sales & Marketing</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><GoDeviceCameraVideo /></span>
                            <h1 className="text-2xl font-semibold my-4">Video Editting</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><HiOutlineSpeakerphone /></span>
                            <h1 className="text-2xl font-semibold my-4">Marketing</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><PiGraduationCap /></span>
                            <h1 className="text-2xl font-semibold my-4">Education</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>

                        <div className="p-4 bg-white w-[300px] h-[300px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:bg-[#20B8DE] hover:text-white duration-300 text-center flex flex-col justify-center items-center">
                        <span className="text-6xl   "><PiPenNibBold /></span>
                            <h1 className="text-2xl font-semibold my-4">Digital & Creative</h1>
                            <p>100+ jobs vacancy in a day</p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
