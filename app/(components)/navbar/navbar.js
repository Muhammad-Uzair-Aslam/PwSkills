import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="">
      <div className=" flex flex-row items-center h-24 ">
        <div className=" flex  w-[15%] items-center">
            <Image className="rounded-full md:ml-12 ml-5" src="/pw.jpg" width={40} height={30}/>
            <p className="font-bold text-xl ml-1">SKILLS</p>
        </div>
        <div className="hidden md:block  w-[70%]  border-gray-100 border-2">
            <div className="flex mx-4 my-3">
        <svg className=" w-6 h-6  text-gray-650" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z" fill="currentColor"></path></svg>
            <input className="w-full hidden md:block outline-none "  placeholder="Search by product title"/>
            </div>
        </div>
        <div className="bg-orange-700 backdrop-saturate-125 hover:bg-orange-800 text-base  md:mx-5 px-3 py-1 hidden md:block rounded-lg text-white">
          <button className="p-2">Login/Register</button>
        </div>
        <div className="md:hidden w-[85%] flex justify-end items-center ">
        <svg className=" w-6 mx-2 h-6  text-gray-650" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z" fill="currentColor"></path></svg>
        <button className="mx-2 text-3xl">&#8801;</button>
        </div>
      </div>
    </div>
  )
}



