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
