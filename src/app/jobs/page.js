"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import company from '../../../assets/building.png';
import { FaBuilding } from 'react-icons/fa';

function page() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  
  const fetchJobs = async () => {
    const options = {
      method: 'GET',
      url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
      params: {
        SearchQuery: searchQuery, // Use the user's input here
        PageSize: '12',
        PageNumber: '1'
      },
      headers: {
        'X-RapidAPI-Key': '178d765ff6msh0e4ae865c3fc28dp19fc3bjsnde2dad363727',
        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
      }
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setJobs(response.data.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-10 px-5 md:px-5 lg:px-20 bg-[#F4F6F8]">
      <div className="bg-[#20B8DE] w-full h-[100px] rounded-2xl flex lg:flex-row md:flex-row flex-col justify-center items-center gap-10">
      <input type="text" placeholder='Search by title...' className="bg-white outline-none p-2 pl-4 rounded-lg" onChange={(e) => setSearchQuery(e.target.value)}/>
        <button onClick={fetchJobs} className="text-white px-4 py-2 rounded-lg bg-[#2043de] hover:bg-[#1833ac] duration-200">Search</button>
      </div>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 my-20">
        {jobs.map(job => (
            <div key={job.slug} className="min-h-[300px] w-[330px] p-4 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white pb-[30px]">
            <Image src={company} alt="company" className="h-[60px] w-[60px] -mt-12 border-2 border-gray-300 rounded-2xl"/>
            <div className="flex flex-col justify-between h-full">
            <p className="text-gray-500 my-5">Posted on: {job.postDate}</p>
                <h1 className="text-2xl font-bold break-words">{job.title}</h1>
                <p className="text-xl text-gray-500 font-medium flex gap-3 items-center my-2"><FaBuilding /> {job.company}</p>
                <a href={job.url} target='_blank' rel='noreferrer' className="bg-[#20B8DE] text-white text-medium rounded-full w-[120px] h-[50px] flex justify-center items-center hover:bg-[#1686a2] duration-200">Apply Now</a>
              </div>
            </div>
            ))}
        </div>
    </div>
  );
}

export default page;