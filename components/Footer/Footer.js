import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go'
import Newsletter from '../common/Newsletter/Newsletter';

const Footer = () => {
  return (
    <>
        <footer className="bg-[#04161C] text-white pt-10 pb-5 text-md px-5 lg:px-20">
        <Newsletter />
            <div className="flex justify-between flex-col lg:flex-row">

                <div className="flex flex-col justify-center items-center text-center lg:text-left lg:justify-normal lg:items-start ">
                    <div>
                        <h1 className="text-[#4374C2] font-semibold text-3xl">JOBZone</h1>
                        <p className="w-[350px] mt-3">Do dolor do Lorem elit ut aute ullamco ipsum in consectetur excepteur incididunt do. Quis proident voluptate voluptate reprehenderit consectetur nulla nulla.</p>
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg my-3">Contact Us</h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4 items-center">
                                <span><AiOutlineMail /></span>
                                <p>infomail@gmail.com</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span><GoLocation /></span>
                                <p className="lg:w-[180px] w-auto">777 Street Road Delhi India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between  mt-10 gap-0 lg:gap-20 md:justify-around">
                    <div>
                        <h1 className="text-lg font-semibold mb-3">About</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Careers</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Press & News</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Partnership</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className="text-lg font-semibold mb-3">Categories</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Graphic & Design</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Writing & Translation</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Digital Markteing</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Art & Design</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Video & Animations</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Video & Audio</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between mt-10 gap-0 lg:gap-20 md:justify-around">
                    <div>
                        <h1 className="text-lg font-semibold mb-3">Community</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Blog</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Events</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Forum</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Podcast</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">License</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className="text-lg font-semibold mb-3">Support</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Help & Support</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Trust & Society</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Get Inspired</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Guides</li>
                            <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Human Resource</li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className="flex justify-between mt-10 flex-col items-center gap-5 lg:flex-row lg:gap-0">
                <div>
                    Copyright &copy; 2023 <span className=" font-medium text-[#4374C2]">JOBZone</span>
                </div>
                <div>
                    <ul className="flex text-center gap-4 lg:gap-5 lg:text-left">
                        <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Full Time Job</li>
                        <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Part Time Job</li>
                        <li className="hover:text-[#4374C2] duration-200 cursor-pointer">Remotely Job</li>
                    </ul>
                </div>
                <div className="flex gap-3 text-xl">
                <div className="text-[#4374C2] bg-white rounded-full flex justify-center items-center cursor-pointer h-8 w-8">
                    <FaFacebookF />
                    </div>
                    <div className="text-[#4374C2] bg-white rounded-full flex justify-center cursor-pointer items-center h-8 w-8">
                    <FaTwitter />
                    </div>
                    <div className="text-[#4374C2] bg-white rounded-full flex justify-center cursor-pointer items-center h-8 w-8">
                    <FaInstagram />
                    </div>
                    <div className="text-[#4374C2] bg-white rounded-full flex justify-center cursor-pointer items-center h-8 w-8">
                    <FaYoutube />
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer