import React from 'react';
import github from '../../../assets/github.png';
import gitlab from '../../../assets/gitlab.png';
import microsoft from '../../../assets/microsoft.png';
import google from '../../../assets/google.png';
import airbnb from '../../../assets/airbnb.png';
import invision from '../../../assets/invision.png';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className="bg-[#E0EEF3] px-0 py-10 text-center lg:px-10">
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-5 text-3xl font-semibold">Featured Companies</h1>
            <p className="text-lg text-gray-600">Amazing companies are looking for great talent</p>
            <p className="text-lg text-gray-600">Apply now to start working.</p>
        </div>
        <div className='flex justify-center items-center mt-10'>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-3 grid-rows-1">
            <Image src={invision} alt="invision" height={150} width={150}/>
            <Image src={gitlab} alt="gitlab" height={150} width={150}/>
            <Image src={airbnb} alt="airbnb" height={150} width={150}/>
            <Image src={google} alt="google" height={150} width={150}/>
            <Image src={github} alt="github" height={150} width={150}/>
            <Image src={microsoft} alt="microsoft" height={150} width={150}/>
        </div>
        </div>
    </section>
  )
}

export default Feature