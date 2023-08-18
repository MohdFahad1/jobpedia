import Image from 'next/image'
import React from 'react';
import testimonial from '../../../assets/testimonial.png';
import App from './Slider';

const Testimonials = () => {
  return (
    <section className="px-0 py-10 text-center lg:px-20">
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-5 text-3xl font-semibold">What Job Seekers Says About Us</h1>
            <p className="text-lg text-gray-600">JOBZone is Great Oppurtunity Platform For Finding Jobs And All People Achieve Success</p>
        </div>
        <div className="flex items-center justify-center lg:justify-between">
            <div>
                <App />
            </div>
            <Image src={testimonial} alt="testimonials" className="w-[700px] h-[450px] hidden lg:block"/>
        </div>
    </section>
  )
}

export default Testimonials