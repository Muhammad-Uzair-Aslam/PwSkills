'use client'
import Image from 'next/image';
import React, { useState } from 'react';
const ImageSlider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { id: 1, title: 'Comprehensive Financial Modeling Course', url: "/1.png", content: "Master financial skills for diverse investment Equity Analysis" },
        { id: 2, title: 'Post Graguate Certification in Banking, Financial Services & Insurance', url: "/2.png", content: "Program for individual who wish to kickstart their career in the Private Banking Industry" },
        { id: 3, title: 'Certification Program in Finance Accounting & Taxation', url: "/3.png", content: "Master finance with PWC expert-led training" },
        { id: 4, title: 'TallyPrime Basic with GST Essentials (Tally Certification)', url: "/4.png", content: "Transformative TallyPrime Basic with GST course unlocks accounting career prospects" },
        { id: 5, title: 'TallyPrime Basic with GST Accounting (Tally Certification)', url: "/5.png", content: "Empowering journey into bookkeeping essentials with practical TallyPrime apllications" },
        { id: 6, title: 'Financial Mastery Analysis & modeling', url: "/6.png", content: "Master finance skills: financial modeling, analysis,DCF valuation and more in our course" },
        { id: 7, title: 'Sales & Relationship Management pre-Placement Drive', url: "/7.jpeg", content: "join our pre-placement drive for Muthout Fincorp opportunities and interviews" },
        { id: 8, title: 'Yes Bank Yes Force Pre-Placement Drive', url: "/8.jpeg", content: "Join Yes Bank's pre-placement drive as a Sales Officer!"},
        { id: 9, title: 'Certification Program in Finance Accounting & Taxation', url: "/3.png", content: "Master finance with PWC expert-led training" },

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
