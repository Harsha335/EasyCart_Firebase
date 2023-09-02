import React, { useState } from 'react'
import { banner } from '../assets/data'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Banner = () => {
  // setTimeout
  const [move,setMove]=useState(0);
  const handleClick=(isLeft)=>{
    if(isLeft)
    {
      if(move===0) setMove(200);
      else
      setMove(move-100);
      // alert(move);
    }
    else{
      if(move===200) setMove(0);
      else
      setMove(move+100);
    }
  }
  return (
    <div className='h-screen relative overflow-hidden'>
      <span className='absolute left-3 top-[50%] bottom-[50%] cursor-pointer opacity-70 hover:opacity-100 z-10' onClick={()=>handleClick(true)}><ArrowCircleLeftOutlinedIcon sx={{fontSize:40}}/></span>
      <span className='absolute right-3 top-[50%] bottom-[50%] cursor-pointer opacity-70 hover:opacity-100 z-10' onClick={()=>handleClick(false)}><ArrowCircleRightOutlinedIcon sx={{fontSize:40}}/></span>
      <div className={'h-screen bg-orange-200 flex flex-row transition-all duration-300 ease-in -translate-x-['+move+'%]'}>
      {
        banner.map((item)=>{
            return (<img key={item.id} src={item.imgSrc} alt={item.name} className='object-fill w-full' />);
        })
      }
      </div>
    </div>
  )
}

export default Banner
