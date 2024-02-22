'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: 'Card 1',url:"/datascience.jpeg",content:"" },
    { id: 2, title: 'Card 2',url:"/dataAnalytics.jpeg",content:"" },
    { id: 3, title: 'Card 3',url:"/Hinglish.jpeg",content:"" },
    { id: 4, title: 'Card 4',url:"/artificialIntelligence.jpeg",content:"" },
    { id: 5, title: 'Card 5',url:"/generativeAI.jpeg",content:"" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full lg:w-1/3 flex-shrink-0 px-2"
            >
              <div className="bg-blue-500 text-white p-10 rounded-lg text-center">
                {card.title}
              </div>
              <Image src={card.url} width={400} height={400}/>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
