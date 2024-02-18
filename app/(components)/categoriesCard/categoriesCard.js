import Image from 'next/image'
import React from 'react'

export default function CategoriesCard() {
    return (
        <div className='flex flex-col rounded-md shadow-md '>
            <div className='p-5 flex flex-row bg-slate-50'>
                <div>
                    <h1 className='text-md font-bold'>Data Science & Analytics</h1>
                    <p className='text-sm pt-3'>Become expert at drawing intelligence from data and get...</p>
                </div>
                <div>
                    <Image src={"/ai.svg"} width={50} height={50} />
                </div>

            </div>
            <div className='p-5 flex flex-row justify-between'>
                <div>
                    <p>Know More</p>
                </div>
                <div className='flex justify-center items-center '>
                    <svg
                        className=" h-6 w-6  rounded-full bg-orange-200 text-white"
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
