import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-950 text-white py-5 md:py-16 ">
      <div className="mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-3">
        <div className=" px-3 py-2 ">
          <div className=" flex  items-center">
            <Image
              className="rounded-full "
              src="/pw.jpg"
              width={40}
              height={30}
            />
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="ml-5 w-1.5 h-1.5 rounded-full bg-orange-500"></p>
                <p className="ml-1.5 w-1.5 h-1.5 rounded-full bg-green-500"></p>
              </div>
              <p className="font-bold text-xl ml-1">SKILLS</p>
            </div>
          </div>
          <div className="pt-5 md:pt-8">
            <Link href="mailto:uzairaslam990@gmail.com">
              <span className="flex items-center space-x-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h6m-3 9c-5 0-9-3.6-9-8s4-8 9-8 9 3.6 9 8c0 1.7-.5 3.3-1.4 4.6a1 1 0 00-.2.9l.7 2.1a1 1 0 01-1.3 1.3l-2.1-.7a1 1 0 00-.9.2A8.973 8.973 0 0112 21z"
                  />
                </svg>
                <span>uzairaslam990@gmail.com</span>
              </span>
            </Link>
          </div>
          <div className="pt-5">
            <Link href="tel:+923015566104">
              <span className="flex items-center space-x-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10a10 10 0 014-7.5A10 10 0 0112 2c2.1 0 4.1.6 5.9 1.5a10 10 0 014 7.5M2.5 10.5l1 1.5c.8 1.3 2.4 3.2 4.5 5.2s4.1 3.7 5.2 4.5l1.5 1a2.5 2.5 0 002.5 0l3.5-2c1.7-1 1.7-3 0-4L16 14a2.5 2.5 0 00-3.5 0L10 17.5a2.5 2.5 0 01-3 0l-4-4a2.5 2.5 0 010-3L9 5a2.5 2.5 0 013.5 0l1.5 1.5c1 1 3 1 4 0L20 4.5a2.5 2.5 0 000-3L17 0a2.5 2.5 0 00-3 0l-1 1c-1 .7-3.2 2.2-5 4-2 2-4 3.7-5 5l-1 1c-.7 1.1-.3 2.7 1.5 4.5L2.5 10.5z"
                  />
                </svg>
                <span>+92301 5566104</span>
              </span>
            </Link>
          </div>
          <div className="flex gap-7 py-5">
            <Link href="https://www.linkedin.com/in/muhammad-uzair-aslam-696675293/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-11h3v1.531c.828-.871 2.06-1.531 3.5-1.531 2.485 0 4.5 2.015 4.5 4.5v6.5z" />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-.729-.854-1.708-1.4-2.8-1.564-2.354-.348-11.771-.348-11.771-.348h-.01s-9.417 0-11.771.348c-1.092.164-2.071.71-2.8 1.564-.846 1.008-1.385 2.605-1.385 6.309v4.99c0 3.702.539 5.299 1.385 6.309.729.854 1.708 1.4 2.8 1.564 2.354.348 11.771.348 11.771.348h.01s9.417 0 11.771-.348c1.092-.164 2.071-.71 2.8-1.564.846-1.008 1.385-2.605 1.385-6.309v-4.99c0-3.702-.539-5.299-1.385-6.309zm-11.615 13.205v-10l7.5 5-7.5 5z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/i/flow/signup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.385-1.83.643-2.825.757 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.001.974-3.12 1.195-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.919 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.141-5.144-.425.722-.666 1.561-.666 2.457 0 1.697.865 3.197 2.181 4.075-.803-.026-1.56-.247-2.224-.616v.061c0 2.367 1.684 4.343 3.918 4.792-.411.111-.844.171-1.29.171-.314 0-.615-.03-.91-.086.617 1.926 2.4 3.33 4.515 3.369-1.65 1.293-3.726 2.065-5.986 2.065-.39 0-.779-.022-1.17-.068 2.138 1.375 4.678 2.178 7.41 2.178 8.89 0 13.755-7.365 13.755-13.754 0-.209 0-.42-.015-.63.943-.68 1.76-1.52 2.407-2.475z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className=" md:px-5 py-2 ">
          <h1 className="text-xl font-semibold">Company</h1>
          <div className="my-2 bg-orange-600 w-[80%] md:w-[85%] h-1 rounded-full"></div>
          <div className="grid grid-cols-2 text-gray-400 py-5 gap-5">
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Job Assistance</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms and Conditions</Link>
          </div>
        </div>
        <div className="md:px-8 py-2 ">
          <h1 className="text-xl font-semibold">Products</h1>
          <div className="my-2 bg-orange-600 w-[80%] md:w-[85%] h-1 rounded-full"></div>
          <div className="grid grid-cols-2 text-gray-400 py-5 gap-5">
            <Link href={"#"}>PW Skills Lab</Link>
            <Link href={"#"}>Job Portal</Link>
            <Link href={"#"}>Experience Portal</Link>
            <Link href={"#"}>Become an affiliate</Link>
            <Link href={"#"}>Hall Of fame</Link>
            <Link href={"#"}>Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
