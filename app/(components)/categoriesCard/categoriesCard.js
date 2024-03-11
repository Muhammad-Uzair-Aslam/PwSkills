import Image from 'next/image'
import React from 'react'

export default function CategoriesCard(props) {
    return (
        <div className='flex flex-col rounded-lg shadow-lg group'>
            <div className=' p-2 md:p-5 flex flex-row rounded-t-lg justify-between bg-slate-50 group-hover:bg-gradient-to-r from-slate-50 to-purple-200'>
                <div className='w-3/4'>
                    <h1 className='text-md font-bold'>{props.heading}</h1>
                    <p className='text-sm pt-3'>{props.text}</p>
                </div>
                <div className=' w-1/4 flex justify-center items-center'>
                    <Image src={props.src} width={70} height={70} alt='card Image' />
                </div>

            </div>
            <div className='p-3 md:p-5 flex flex-row justify-between '>
                <div>
                    <p className='text-sm md:text-md '>Know More</p>
                </div>
                <div className='flex justify-center items-center '>
                    <svg
                        className=" h-6 w-6  rounded-full bg-orange-200 group-hover:bg-orange-600 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-7-7l7 7-7 7"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
