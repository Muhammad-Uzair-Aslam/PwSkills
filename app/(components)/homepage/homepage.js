import Image from 'next/image'
import React from 'react'

export default function Homepage(props) {
  return (
    <div>
      <div className={`flex ${props.style} lg:flex-row`}>
        <div className=" lg:w-[36%] sm:w-[60%] md:w-[50%] mx-5 my-3 sm:text-center lg:text-left sm:mx-auto lg:mx-20 lg:my-24">
          <h1 className='font-semibold text-lg'>{props.startText}</h1>
          <h1 style={{lineHeight:props.lineHeight}} className={`inline  text-gray-800  ${props.headingStyle} font-bold`}>
            <span>{props.span}</span>{props.heading}
            <span style={{color: "rgb(233, 120, 98)"}} className="inline-flex items-center">
              {props.typewriter}
            </span>
            <br/>
            {props.afterBR}
          </h1>          
          <p className={`mt-4 text-sm text-gray-800 ${props.Parastyle}`}>{props.paragraph}</p>
          <div className='space-x-3 my-4 mx-auto text-center md:text-left'>
            <button style={{backgroundColor: "rgb(233, 120, 98)",}} className='rounded-lg px-6 py-2 text-white'>Explore Courses</button> 
            {props.btn}
          </div>
      
        </div>
        <div className="mx-auto">
          <Image className={`mx-auto w-[90%] ${props.img}`} src={props.src} width={500} height={500} alt='card Image' />
        </div>
      </div>
    
    </div>
  )
}
