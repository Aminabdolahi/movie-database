
interface MovieCardProps{
    title:string;
    overview: string;
    posterPath: String;
    release_date:string
}

import Image from 'next/image';
import React from 'react'

export const MovieCard = ({title, overview, posterPath, release_date}:MovieCardProps) => {

    const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` :
    '/no-image-available.png'
  return (
    <div className='bg-white rounded shadow p-4 '>
          {/* <img className='w-full h-69 rounded mb-4' src={imageUrl} alt=''/> */}
        <Image src={imageUrl} width={667} height={943} alt={title} className='w-full h-69 rounded mb-4'/>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-sm text-gray-500 py-5' >{overview.substring(0,150)}</p>
        <p className='text-sm text-gray-500'>release date:{release_date}</p>

        

    </div>
  )
}
