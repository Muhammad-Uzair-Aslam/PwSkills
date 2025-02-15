"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Navbar() {
  const [searchBar, setSearchBar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [closeNavbar, setCloseNavbar] = useState(false);
  return (
    <div className=" shadow-lg md:shadow-xl shadow-slate-100 pb-2">
      <div className=" flex flex-row items-center md:h-24 h-16">
        <div className=" flex  w-[15%] items-center">
          <Image
            className="rounded-full md:ml-12 ml-5"
            src="/pw.jpg"
            width={40}
            height={30}
            alt="pw skills logo"
          />
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="ml-5 w-1.5 h-1.5 rounded-full bg-orange-500"></p>
              <p className="ml-1.5 w-1.5 h-1.5 rounded-full bg-green-500"></p>
            </div>
            <p className="font-bold text-xl ml-1">SKILLS</p>
          </div>
        </div>

        <div className="hidden md:block  w-[70%]  border-gray-100 border-2">
          <div className="flex mx-4 my-3">
            <svg
              className=" w-6 h-6  text-gray-650"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              className="w-full hidden md:block outline-none "
              placeholder="Search by product title"
            />
          </div>
        </div>
        <div className="bg-orange-700 backdrop-saturate-125 hover:bg-orange-800 text-base  md:mx-5 px-3 py-1 hidden md:block rounded-lg text-white">
          <button className="p-2">Login/Register</button>
        </div>
        <div className="md:hidden w-[85%] flex justify-end items-center ">
          <button onClick={() => setSearchBar(!searchBar)}>
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.7-6.65A7.5 7.5 0 1111.4 4.5 7.5 7.5 0 0118.35 14z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="mx-2 text-3xl"
          >
            &#8801;
          </button>
          <div>
            {navbarOpen && (
              <button
                onClick={() => {
                  setNavbarOpen(false);
                  setSearchBar(false);
                }}
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className="md:hidden scrollbar overflow-x-scroll overflow-y-scroll mr-4">
          <div className="">
            <ul className="flex flex-col justify-center">
              <div className="ml-4 bg-gray-100 py-5">
                <div className="w-36 mx-auto bg-orange-700 backdrop-saturate-125 hover:bg-orange-800 text-base  md:mx-5 px-2 py-1  md:hidden rounded-lg text-white">
                  <button className="p-2">Login/Register</button>
                </div>
              </div>
              <li className="cursor-pointer flex justify-between px-10 p-3  ml-4 hover:bg-gray-100">
                <Link href="">Courses</Link>
                <svg
                  className="ml-3"
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">Online Degree</Link>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">PW Skills Lab</Link>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">Job Portal</Link>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">Experience Portal</Link>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">Become an affiliate</Link>
              </li>
              <li className="cursor-pointer px-10 py-4 block ml-4 hover:bg-gray-100 text-left">
                {" "}
                <Link href="">Hall of Fame</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="hidden md:block mt-3">
        <div className="">
          <ul className="flex flex-row justify-around h-16 items-center">
            <li className="cursor-pointer flex p-3 bg-slate-100">
              <Link href="">Courses</Link>
              <Image
                className="ml-3"
                src="/down-arrow.svg"
                width={9}
                height={9}
                alt="Image"
              />
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">Online Degree</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">PW Skills Lab</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">Job Portal</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">Experience Portal</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">Become an affiliate</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href="">Hall of Fame</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {searchBar && (
          <div className="w-[90%] my-5 mx-auto md:hidden border-gray-100 border-2">
            <div className="flex mx-4 my-3">
              <svg
                className=" w-6 h-6  text-gray-650"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z"
                  fill="currentColor"
                ></path>
              </svg>
              <input
                className="w-full ml-2 outline-none "
                placeholder="Search by product title"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
