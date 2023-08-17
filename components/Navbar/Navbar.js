"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);


  return (
    <nav className="flex lg:justify-around lg:px-[0] items-center text-lg font-semibold py-3 h-auto justify-between px-5">
      <Link href="/">
        <Image src={logo} alt="logo" className="object-cover bg-transparent h-[50px] w-[50px] mt-2" />
      </Link>
      <ul className={`lg:static lg:flex lg:flex-row lg:gap-0 lg:justify-around lg:w-[600px] ${isOpen ? "block" : "hidden"} w-auto top-24 left-5 flex flex-col gap-6 absolute`}>
        <Link href="/"><li className="hover:text-blue-400 duration-300">Home</li></Link>
        <Link href="/search"><li className="hover:text-blue-400 duration-300">Find Jobs</li></Link>
        <Link href="/about"><li className="hover:text-blue-400 duration-300">About Us</li></Link>
        <Link href="/contact"><li className="hover:text-blue-400 duration-300">Contact</li></Link>
      </ul>
      <div className="flex gap-5 items-center">
        <button className="hover:text-blue-400 duration-300">Log In</button>
        <button className="bg-blue-400 border-2 border-blue-400 rounded-md px-[15px] py-2 text-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] duration-300">Register</button>
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