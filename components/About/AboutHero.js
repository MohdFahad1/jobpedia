import Image from 'next/image';
import React from 'react';
import { TbPointFilled } from 'react-icons/tb';
import hero from '../../assets/about-hero.jpg';

const AboutHero = () => {
    return (
        <section className="text-white mb-10">
            <div className="about flex lg:flex-row justify-around lg:items-center lg:gap-0  w-full flex-col h-auto items-start px-5 gap-10 py-10">
                <div className="lg:w-[650px] w-auto">
                    <h1 className="text-5xl lg:font-medium font-normal mb-5">Connecting people to<br /> better work to create better<br /> lives</h1>
                    <p className="text-lg">At JOBZone, we help all people get jobs.<br />

                        We believe the world can work better. With the power of our platform and our people, and in partnership with organizations that share our mission, we’re creating an environment where current and future generations can thrive.</p>
                </div>
                <div>
                    <Image src={hero} alt="hero" className="h-[400px] w-[280px] rounded-xl"/>
                </div>
            </div>
            <div className="bg-[#20B8DE] h-auto lg:h-14 lg:flex lg:flex-row gap-5 grid grid-cols-2 px-5 justify-center items-center py-20 flex-col lg:gap-14 md:flex-row md:grid md:grid-cols-3 md:justify-center md:place-items-center">
                <span className="cursor-pointer text-xl">Vision</span>
                <span className="cursor-pointer text-xl">Guiding Principles</span>
                <span className="cursor-pointer text-xl">2030 commitments</span>
                <span className="cursor-pointer text-xl">News</span>
                <span className="cursor-pointer text-xl">Impact</span>
                <span className="cursor-pointer text-xl">Reports</span>
                <span className="cursor-pointer text-xl">Awards</span>
                <span className="cursor-pointer text-xl">Partnership</span>
            </div>
        </section>
    )
}

export default AboutHero