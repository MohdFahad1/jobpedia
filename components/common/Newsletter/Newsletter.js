import React from 'react'

const Newsletter = () => {
  return (
    <section className="flex justify-center items-center bg-transparent -mt-20 mb-16">
        <div className="text-black text-center flex flex-col justify-between items-center gap-1 px-2 py-6 w-auto  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white lg:w-[680px] lg:flex-row lg:px-10 lg:gap-5 lg:text-left md:w-[680px] md:flex-row md:px-10 md:gap-5 md:text-left">
            <div>
                <h1 className="text-2xl font-bold">Never Want to Miss Any <span className="text-[#20B8DE]">Job News?</span></h1>
            </div>
            <div className="flex rounded-full w-[300px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-2 py-2 lg:w-auto">
                <input type="text" placeholder="Enter your email" className="outline-none pl-2 w-[180px] lg:w-auto"/>
                <button className="rounded-full bg-[#20B8DE] text-white px-3 py-2">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter