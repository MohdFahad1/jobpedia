"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pfp from '../../../assets/pfp.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px] lg:w-[400px] flex flex-col justify-between h-[350px] w-[350px]">
            <div className="flex justify-between items-center">
              <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover"/>
              <FaQuoteRight className="text-5xl text-[#4374C2]"/>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-semibold">Bemard Amault</h1>
              <p className="text-lg text-gray-600">Creative Director & CEO</p>
            </div>
            <div className="text-left text-lg text-gray-500">
              <p>Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Sint adipisicing in in nostrud id esse aliqua proident sint elit deserunt.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px] lg:w-[400px] flex flex-col justify-between h-[350px] w-[350px]">
            <div className="flex justify-between items-center">
              <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover"/>
              <FaQuoteRight className="text-5xl text-[#4374C2]"/>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-semibold">Bemard Amault</h1>
              <p className="text-lg text-gray-600">Creative Director & CEO</p>
            </div>
            <div className="text-left text-lg text-gray-500">
              <p>Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Aliquip velit incididunt laboris consectetur do voluptate dolore.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px] lg:w-[400px] flex flex-col justify-between h-[350px] w-[350px]">
            <div className="flex justify-between items-center">
              <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover"/>
              <FaQuoteRight className="text-5xl text-[#4374C2]"/>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-semibold">Bemard Amault</h1>
              <p className="text-lg text-gray-600">Creative Director & CEO</p>
            </div>
            <div className="text-left text-lg text-gray-500">
              <p>Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Ea ipsum cupidatat commodo culpa ex est occaecat voluptate.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px] lg:w-[400px] flex flex-col justify-between h-[350px] w-[350px]">
            <div className="flex justify-between items-center">
              <Image src={pfp} alt="people" className="border-2 border-black rounded-full w-[80px] h-[80px] object-cover"/>
              <FaQuoteRight className="text-5xl text-[#4374C2]"/>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-semibold">Bemard Amault</h1>
              <p className="text-lg text-gray-600">Creative Director & CEO</p>
            </div>
            <div className="text-left text-lg text-gray-500">
              <p>Do sint esse ex nostrud esse ea tempor in cillum consectetur voluptate. Duis proident sint ad irure do.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
