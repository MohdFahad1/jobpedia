import React from 'react';
import { TbPointFilled } from 'react-icons/tb';

const AboutHero = () => {
    return (
        <section className="about px-5 text-white text-center flex flex-col justify-center items-center gap-10 lg:px-0">
            <div>
                <h1 className="text-7xl font-bold">
                    About Us
                </h1>
                <p className="lg:w-[800px] text-lg">Welcome to our cutting-edge job searching website, where your ideal job is just a click away. Our platform offers a seamless and intuitive experience, allowing you to explore a wide array of job listings tailored to your skills and preferences. But we're more than just a job board – we're your career partner. Our website equips you with expert resources to polish your resume, refine your interview techniques, and stay updated on industry trends. Join us in bridging the gap between talent and top companies and take the next step towards a fulfilling career. Your future starts here.</p>
            </div>
            <div>
                <div className="border-2 cursor-pointer flex items-center justify-center rounded-full h-[30px] w-[17px]">
                    <TbPointFilled className="animate-bounce"/>
                </div>
            </div>
        </section>
    )
}

export default AboutHero