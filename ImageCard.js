import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export const ImageCard = ({image}) => {
  const tags= image.tags.split(',')

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className='flex flex-col border-2 h-fit w-fit m-7 border-slate-700 bg-[#0c182c] text-white p-3 rounded-lg' data-aos="fade-in">
      <img className='w-80 rounded-md shadow-2xl ' src={image.webformatURL} alt='Image'/>

      <div className='p-3'>
        <h1 className='text-xl pb-1 text-center'>
        Photo by {image.user}
        </h1>
       <ul className='text-slate-700'>
        <li >Views: {image.views} </li>
        <li >Downloads: {image.downloads} </li>
        <li >Likes: {image.likes} </li>
       </ul>

       {tags.map(tag=>(
        <span className='bg-slate-500 text-slate-200 px-1 rounded-md text-sm mx-1'>{tag}</span>
       ))}
      </div>

  </div>
  )
}

