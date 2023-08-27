"use client"
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import company from '../../../assets/building.png';
import { FaBuilding } from 'react-icons/fa';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import search from '../../../components/Animation/lottie.json';
import loadingAnimation from '../../../components/Animation/loading.json';
import Lottie from "lottie-react";

function page() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [paginationClicked, setPaginationClicked] = useState(false);
  const [searchClicked, setSearchCLicked] = useState(false);

  const fetchJobs = async () => {
    const options = {
      method: 'GET',
      url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
      params: {
        SearchQuery: searchQuery,
        PageSize: '12',
        PageNumber: pageNumber,
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
    } catch (error) {
      console.log("No Jobs Available");
    }
    finally{
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if(paginationClicked || searchClicked){
      fetchJobs();
      setSearchCLicked(false);
      setPaginationClicked(false);
    }
  }, [pageNumber, paginationClicked, searchClicked]);

  return (
    <div className="py-10 px-5 md:px-5 lg:px-20 bg-[#F4F6F8]">

    {/* Search input && button  */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center lg:gap-5 md:gap-5 gap-2 lg:w-[400px] md:w-[400px] w-[380px] px-2 py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-full">
          <input type="text" placeholder='Search by Job title...' className="bg-white outline-none p-2 pl-4 rounded-full" onChange={(e) => setSearchQuery(e.target.value)}/>
            <button onClick={() => {setPageNumber(1), fetchJobs(), setSearchCLicked(true)}} className="text-white px-4 py-2 rounded-full bg-[#4374C2] hover:bg-[#2d5390] duration-200 uppercase">Search</button>
        </div>
      </div>

      {/* LOader && Jobs */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Lottie animationData={loadingAnimation} className="w-[400px] h-[400px]"/>
        </div>) : (jobs.length !== 0) ? (<div>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 mt-20 mb-5">
          {jobs.map(job => (
              <div key={job.slug} className="min-h-[300px] w-[330px] p-4 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white pb-[30px]">
              <Image src={company} alt="company" className="h-[60px] w-[60px] -mt-12 border-2 border-gray-300 rounded-2xl"/>
              <div className="flex flex-col justify-between h-full">
              <p className="text-gray-500 my-5">Posted on: {job.postDate}</p>
                  <h1 className="text-2xl font-bold break-words">{job.title}</h1>
                  <p className="text-xl text-gray-500 font-medium flex gap-3 items-center my-2"><FaBuilding /> {job.company}</p>
                  <a href={job.url} target='_blank' rel='noreferrer' className="border-2 border-[#4374C2] text-[#4374C2] text-medium rounded-full w-[120px] h-[45px] flex justify-center items-center hover:bg-[#4374C2] hover:text-white duration-200">Apply Now</a>
                </div>
              </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mb-10">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center">
                <button className="hover:bg-[#4374C2] hover:text-white duration-150 rounded-full text-3xl font-bold p-3 flex items-center justify-center" onClick={() => {setPageNumber(Math.max(pageNumber-1, 1)), setPaginationClicked(true)}}><MdArrowBack  /></button>
                <h1>Previous</h1>
              </div>

              <div className="bg-[#4374C2] rounded-full p-3 text-xl font-bold h-[60px] w-[60px] flex justify-center items-center text-white">{pageNumber}</div>

              <div className="flex flex-col justify-center items-center">
                <button className="hover:bg-[#4374C2] hover:text-white duration-150 rounded-full text-3xl font-bold p-3 flex items-center justify-center" onClick={() => {setPageNumber(pageNumber+1), setPaginationClicked(true)}}><MdArrowForward /></button>
                <h1>Next</h1>
              </div>
            </div>
          </div>


          {/* No Jobs Available Animation*/}
        </div>) : (<div className="flex flex-col justify-center items-center w-full mt-10">
              <h1 className="text-2xl font-bold">No Jobs Available</h1>
              <Lottie animationData={search} loop={true} className="w-[400px] h-[400px]"/>
          </div>)}
    </div>
  );
}

export default page;