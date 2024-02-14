import Image from 'next/image'
import React from 'react'

export default function SimpleCard(props) {
  return (
    <div className='flex flex-row px-4 py-6 bg-white shadow-md md:shadow-lg shadow-gray-400'>
      <div style={{width:props.width,borderRadius:props.br,backgroundColor:props.bg}}>
        <Image src={props.src} width={props.width} height={props.height}/>
      </div>
      <div className='flex flex-col'>
          <p className='px-3 font-bold text-xl'>{props.number}</p>
          <p className='px-3'>{props.text}</p>
      </div>
    </div>
  )
}
