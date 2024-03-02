'use client'
import Image from 'next/image';
import React, { useState } from 'react';
const ImageSlider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { id: 1, title: 'Full Stack Development Course', url: "/1.png", content: "Job Assistance| Gain Full Stack Development Expertise" },
        { id: 2, title: 'DevOps and Cloud Computing Course', url: "/2.png", content: "Master the Art of streamlining softwaer development with out DevOps Course" },
        { id: 3, title: 'UI/UX Design Course', url: "/3.png", content: "Job Assistance | Unlock the secrets of seamless user experience with our UI/UX course" },
        { id: 4, title: ' Full Stack Development Course- Hinglish', url: "/4.png", content: "Job Assistance| Gain Full Stack Development Expertise" },
        { id: 5, title: 'Full Stack Web Development Program (offline)', url: "/5.png", content: "Job Assistance |  Gain Full Stack Development Expertise" },
        { id: 6, title: 'Data Analytics Course', url: "/6.png", content: "Job Assistance | Gain Data Analytics Expertise" },
        { id: 7, title: 'Data Analytics Course', url: "/7.jpeg", content: "Job Assistance | Gain Data Analytics Expertise" },
        { id: 8, title: 'Data Analytics Course', url: "/8.jpeg", content: "Job Assistance | Gain Data Analytics Expertise" },
        { id: 9, title: 'Data Analytics Course Hinglish', url: "/3.png", content: "Job Assistance | Gain Data Analytics Expertise" },

    ];
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="relative w-full mt-10 mb-10 ">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 "
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >

                        {cards.map((card) => (
                            <div
                                key={card.id}
                                // style={{height:"450px"}}
                                className=" mx-auto w-full relative lg:h-[450px] bg-white lg:w-[380px] rounded-lg flex-shrink-0 lg:mx-2 "
                            >
                                <div className=''>
                                    <Image className='w-full rounded-t-lg' src={card.url} width={400} height={400} />
                                </div>
                                <div className="p-6 md:p-3 text-left font-semibold text-gray-800 text-lg">
                                    {card.title}
                                </div>
                                <div className="px-6 pb-5 md:px-3 text-left text-sm text-gray-800">
                                    {card.content}
                                </div>
                                <div>
                                    <h1 className="p-3 font-semibold text-sm text-gray-800 lg:absolute lg:bottom-16">
                                        Registration Started
                                    </h1>
                                </div>
                                <div className='flex gap-2 w-full mb-4 lg:mb-0  lg:absolute lg:bottom-5'>

                                    <div className='w-1/2 rounded-lg border border-1 mx-1 text-center border-orange-700 text-orange-700  '>
                                        <button className='px-3 py-2'>Explore</button>
                                    </div>
                                    <div className='rounded-lg w-1/2 bg-orange-700 mx-1 text-center hover:bg-orange-800 text-white'>
                                        <button className='px-3 py-2'>Buy Now</button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <button
                    className="w-10 h-10 mx-1 font-bold text-xl relative  transform -translate-y-1/2 bg-white text-orange-600 p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
                <button
                    className="w-10 h-10 mx-1 text-xl font-bold relative transform -translate-y-1/2 bg-white text-orange-600 p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>
            <hr /><hr />
        </>
    );
};

export default ImageSlider2;
