"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex lg:justify-around lg:px-[0] items-center text-lg font-semibold justify-between px-5 bg-transparent h-[80px] shadow-sm">
      <Link href="/">
        <Image src={logo} alt="logo" className=" bg-transparent h-[60px] w-[70px] mt-2" />
      </Link>
      <ul className={`lg:static lg:flex lg:flex-row lg:gap-0 lg:justify-around lg:w-[600px] ${isOpen ? "block" : "hidden"} w-auto top-20 right-4 p-3 flex flex-col gap-6 absolute bg-white lg:shadow-none shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}>
        <Link href="/" onClick={()=>setIsOpen(false)}><li className="hover:text-[#4374C2] duration-300">Home</li></Link>
        <Link href="/jobs" onClick={()=>setIsOpen(false)}><li className="hover:text-[#4374C2] duration-300">Find Jobs</li></Link>
        <Link href="/about" onClick={()=>setIsOpen(false)}><li className="hover:text-[#4374C2] duration-300">About Us</li></Link>
        <Link href="/contact" onClick={()=>setIsOpen(false)}><li className="hover:text-[#4374C2] duration-300">Contact</li></Link>
        
      </ul>
      <div className="flex gap-5 items-center">
        <button className="hover:text-[#4374C2] duration-300">Log In</button>
        <button className="bg-[#4374C2] border-2 border-[#4374C2] rounded-full px-[15px] py-2 text-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] duration-300">Register</button>
        <button className={`flex flex-col gap-1 justify-center items-center lg:hidden cursor-pointer h-[30px] bars ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar