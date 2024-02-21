import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
import Typical from 'react-typical'
import Typewriter from "./(components)/typewriter/typewriter";
import SimpleCard from "./(components)/simpleCard/simpleCard";
import Homepage from "./(components)/homepage/homepage";
import CategoriesCard from "./(components)/categoriesCard/categoriesCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage lineHeight={1.8} headingStyle={"text-xl md:text-4xl"} style="flex-col-reverse" afterBR="Courses" src="/hero-bg.png" heading="Stay Ahead of The Curve With Our" paragraph="PW Skills is your one-stop-shop for upscaling. Get maximum value for time
            and resources you invest, with job-ready courses & high-technology,
            available at the lowest cost." typewriter={<span style={{ color: "rgb(233, 120, 98)" }} className="inline-flex items-center">&lt;<Typewriter />&gt;</span>} />
      <div className="mx-4 md:ml-20 md:mr-20 my-10 grid   grid-col-1 md:grid-cols-2 lg:grid-cols-4">
        <SimpleCard src={"/statistics1.png"} width={50} height={50} number={"55%"} text="Average Salary Hike" />
        <SimpleCard src={"/statistics2.png"} width={50} height={50} number={"600+"} text="Different Courses" />
        <SimpleCard src={"/statistics3.png"} width={50} height={50} number={"12000+"} text="Career Transitions" />
        <SimpleCard src={"/business-bag.svg"} width={50} height={50} number={"400+"} text="Hiring Partners" bg="#FFFF66" br="7px" />
      </div>
      <div className="md:my-10 md:py-20 bg-gray-100">
        <Homepage img="md:mt-20" btn={<button className="px-6 py-2 text-orange-600 rounded-lg border-1 border border-orange-600">Talk to counsellor
          <svg style={{float:"inline-end"
          }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="p-1 w-6 h-6 text-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.6c.62 0 1.178.338 1.486.874l1.4 2.6a1.6 1.6 0 01-.2 1.8l-2 2a13 13 0 005.4 5.4l2-2a1.6 1.6 0 011.8-.2l2.6 1.4a1.8 1.8 0 01.874 1.486V19a2 2 0 01-2 2h-2a17 17 0 01-17-17V5z"
            />
          </svg>
        </button>} lineHeight={1.3} headingStyle={"text-xl md:text-5xl"} startText="Online Degree" style="flex-col" afterBR="Meets The Expectation" src="/homepage-degree.svg" heading="Where " paragraph="At PW Skills, we are Revolutionising your journey of stepping your first foot into your Career through our college programs with partnering up with Top Tier Colleges" Parastyle="md:text-xl text-lg text-gray-900" typewriter="Learning" />
      </div>
      <div className="my-5 mx-4 md:mx-20">
        <h1 className="font-bold md:text-3xl text-xl ">Explore Our Categories</h1>
        <p className="mt-2">Discover Your Passion</p>
        <div className="">
          <div className="grid gap-5 mt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gri">
          <CategoriesCard text="Become expert at drawing intelligence from data and get..." heading="Data Science & Analytics" src="/ai.svg"/>
          <CategoriesCard text="Upskill in-demand software & technology skills to attain..." heading="Software Development Courses" src="/sd.svg"/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          </div>
          
        </div>
      </div>
    </>
  );
}
