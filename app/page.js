import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
import Typical from 'react-typical'
import Typewriter from "./(components)/typewriter/typewriter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className=" lg:w-[36%] sm:w-[60%] md:w-[50%] mx-5 my-3 sm:text-center lg:text-left sm:mx-auto lg:mx-20 lg:my-24">
          <h1 style={{lineHeight:2}} className=" inline  text-xl text-gray-800 md:text-4xl font-bold">
            Stay Ahead of The Curve With Our
            <span style={{color: "rgb(233, 120, 98)"}} className="inline-flex items-center">
              &lt;<Typewriter />&gt;
            </span>
            <br/>
            Courses
          </h1>          
          <p className="text-sm text-gray-800">PW Skills is your one-stop-shop for upscaling. Get maximum value for time
            and resources you invest, with job-ready courses & high-technology,
            available at the lowest cost.</p>
          <div style={{backgroundColor: "rgb(233, 120, 98)",}} className="w-full sm:w-52 sm:mx-auto lg:mx-0 mt-4 md:mt-8 text-center font-semibold hover:bg-orange-700 text-base px-3 py-3 rounded-lg text-white lg:w-52">
            <button >Explore Courses</button>
          </div>
        </div>
        <div className="mx-auto">
          <Image className="mx-auto w-[90%] " src="/hero-bg.png" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
