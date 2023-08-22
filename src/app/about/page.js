import React from 'react';
import AboutHero from '../../../components/About/AboutHero';
import Image from 'next/image';
import about1 from '../../../assets/about1.jpg';
import comp1 from '../../../assets/comp1.png';
import comp2 from '../../../assets/comp2.png';
import comp3 from '../../../assets/comp3.png';
import comp4 from '../../../assets/comp4.png';

const data = [
  {
    img:comp1,
    heading: "Make job search faster and simpler",
  },{
    img:comp2,
    heading: "Remove bias and barriers to employment",
  },{
    img:comp3,
    heading: "Build sustainable equity for our people through our policies and practices",
  },{
    img:comp4,
    heading: "Reduce our environment footprint",
  },
]


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


        <div className="flex flex-col lg:px-[100px] px-5 bg-[#20B8DE] my-10 py-10">
          <div>
            <h1 className="text-4xl font-medium text-white">ESG is core to our business</h1>
            <p className="text-xl text-white my-5">These four pillars guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {data.map(({img, heading}, index) => (
            <div key={index} className="bg-white rounded-xl flex flex-col justify-center items-center p-2">
              <div>
              <Image src={img} alt="logo" priority={true} className="h-[200px] w-[250px]"/>
              </div>
              <div>
                <h1 className="text-2xl text-gray-700 font-medium mt-5">{heading}</h1>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="lg:px-28 md:px-28 px-14 text-xl text-gray-600">
          <p>As a mission-driven company, Indeed created our ESG commitments to go hand in hand with what we do best. We help all people get jobs. How we do that matters. By reducing our environmental footprint, making job search faster and simpler, removing bias and barriers to employment, and building sustainable equity for our people, we get closer to achieving our mission.</p>
          <br />
          <p>
          This work is continuous, and our learnings are constantly growing. We are tackling systemic, deeply-rooted issues. As we work to make our ESG commitments a reality, we strive to be transparent about our progress and accountable to job seekers, employers, and our communities.</p>
        </div>
    </section>
  )
}

export default page