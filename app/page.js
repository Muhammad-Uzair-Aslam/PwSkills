import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-indigo-100 h-16 w-full flex justify-between px-4 md:px-10  md:items-center">
        <div className="text-indigo-700 font-bold text-xl flex items-center">PW-Skills</div>
        <div>
          <ul className="flex flex-col md:flex-row items-start justify-end">
            <li className="mx-2 cursor-pointer md:block">Home</li>
            <li className="mx-2 cursor-pointer md:block">About US</li>
            <li className="mx-2 cursor-pointer md:block">Contact Us</li>
            <li className="mx-2 cursor-pointer md:block">Blog</li>
          </ul>
        </div>
        <div className="bg-indigo-800 px-3 py-1 hidden md:block rounded-lg text-white font-bold">
          <button>Login/Signup</button>
        </div>
        {/* <div className="md:hidden">#&8801</div> */}
      </div>
      <div className="flex items-center justify-center h-screen ">
        <div className="border  border-gray-300 p-4 flex flex-col md:items-center md:flex-row rounded-lg">
          <Image className="md:rounded-full md:w-20 md:h-20 h-50  md:mx-2" src="/uzair.JPG" width={200} height={50} />

          <div className="mx-2">
            <p className="font-bold mt-2">Muhammad Uzair Aslam</p>
            <p className="text-gray-500 mt-2 text-sm">Web Developer</p></div>
        </div>
      </div>
    </>
  );
}
