import React from 'react';
import AboutHero from '../../../components/About/AboutHero';
import Image from 'next/image';
import about1 from '../../../assets/about1.jpg';

const page = () => {
  return (
    <section className="mb-20">
        <AboutHero />
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-0 gap-10 justify-around items-center px-5">
          <div>
            <Image src={about1} alt="about" className="lg:h-[500px] lg:w-[500px] h-[400px] w-[400px] rounded-xl"/>
          </div>
          <div className="lg:w-[550px] md:w-[500px] w-auto">
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-medium mb-5">Talent is universal, but opportunity is not</h1>
            <p className="text-lg text-gray-600">We strive to create a world where job seekers everywhere have equal opportunity to find fulfilling jobs. A world where employers everywhere are focused on what matters and hire equitably. A world of work that works for everyone.</p>
          </div>
        </div>
        <div className="lg:px-5 px-[64px]">
          <p className="text-lg text-gray-600 lg:w-[900px] w-auto mt-10 lg:pl-28 pl-0">Our Environmental, Social & Governance (ESG) commitments aim to bring about a future of work that is equitable and inclusive. As the world’s number one job site [1] and a leading hiring platform, we strive to make a positive impact on society by connecting people to better work to create better lives.</p>
        </div>
    </section>
  )
}

export default page