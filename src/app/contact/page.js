import React from 'react'
import { GrMapLocation } from 'react-icons/gr';
import { LiaMailBulkSolid } from 'react-icons/lia';
import { TbPhoneCall } from 'react-icons/tb';

const page = () => {
  return (
    <section className="my-20 flex flex-col justify-center items-center">
        <div className="flex lg:flex-row md:flex-col flex-col relative gap-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-10 bg-white">

        {/* INFO */}
            <div className="lg:w-[400px] md:w-full w-[300px] p-3 z-10 lg:flex lg:flex-col lg:justify-normal lg:items-start md:flex md:flex-col md:justify-center md:items-center bg-white">
                <div className="pl-2 lg:flex lg:flex-col lg:justify-normal lg:items-start md:flex md:flex-col md:justify-center md:items-center">
                    <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <div className="bg-[#4374C2] rounded-full w-20 h-1"></div>
                    <p className="mt-3 mb-5">Reach out to us for any inquiry</p>
                </div>
                <div className="flex flex-col gap-5 md:w-full">
                    <input type="text" placeholder='Full name' className="w-full outline-none border-2 border-gray-200 rounded-full p-3"/>
                    <input type="text" placeholder='Your email' className="w-full outline-none border-2 border-gray-200 rounded-full p-3"/>
                    <textarea className="w-full outline-none rounded-3xl p-3 border-2 border-gray-200" rows={5} placeholder="Message" />
                </div>
                <button className="w-full rounded-full flex justify-center items-center py-2 bg-[#4374C2] uppercase text-white font-semibold text-xl mt-5 hover:bg-[#2e5697] duration-200">submit</button>
            </div>

        {/* MAP */}
            <div className="bg-white">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8979714089!2d77.04417321401365!3d28.527554408526605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1693125564189!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="lg:w-[500px] md:w-[450px] w-[300px] lg:h-[470px] md:h-[450px] h-[300px]"></iframe>
            </div>

            <div className="absolute h-[350px] w-[250px] bg-[#4374C2] -z-10 -top-8 -right-10"></div>
            <div className="absolute h-[350px] w-[250px] bg-[#4374C2] -z-10 -bottom-8 -left-10"></div>
        </div>

        <div className="mt-10 flex lg:flex-row md:flex-row flex-col gap-10">
            <div className="flex gap-2 items-center lg:w-auto md:w-[200px]">
                <GrMapLocation className="text-[#4374C2] text-5xl"/>
                <div>
                    <h3 className="text-lg font-semibold">Location:</h3>
                    <p className="text-gray-500">New Delhi, INDIA - {"("}234561{")"}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center lg:w-auto md:w-[200px]">
                <LiaMailBulkSolid className="text-[#4374C2] text-5xl"/>
                <div>
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-500">jobzone.support@gmail.com</p>
                </div>
            </div>
            <div className="flex gap-2 items-center lg:w-auto md:w-[200px]">
                <TbPhoneCall className="text-[#4374C2] text-5xl"/>
                <div>
                    <h3 className="text-lg font-semibold">Phone:</h3>
                    <p className="text-gray-500">+91 123 456 789</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page