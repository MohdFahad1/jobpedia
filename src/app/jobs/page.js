"use client"
import React, { useState } from 'react';
import axios from 'axios';

function page() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');  
  const fetchJobs = async () => {
    const options = {
      method: 'GET',
      url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
      params: {
        SearchQuery: 'java', // Use the user's input here
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

  if(loading){
    return (<div>Loading...........</div>)
  }

  return (
    <div className="my-10 px-5">
      <div className="bg-[#20B8DE] w-full h-[100px] rounded-2xl flex justify-center items-center ga-10">
      <input type="text" placeholder='Search by title' className="bg-white outline-none p-2 pl-4"/>
        <button onClick={fetchJobs} className="">Search</button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {jobs ? 
          (
            <div>No Jobs Right Now</div>
          ) : 
          (
            jobs.map(job => (
            <div key={job.slug} className="flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-xl font-medium">{job.company}</p>
              <a href={job.url} target='_blank' rel='noreferrer' className="bg-[#20B8DE] rounded-full p-2">Apply Now</a>
            </div>
            ))
          )}
      </div>
    </div>
  );
}

export default page;