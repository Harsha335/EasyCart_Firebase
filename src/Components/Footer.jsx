import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='bg-black w-[100%] text-white relative'>
        <div className='py-[0.5rem]'>
          <div className='flex flex-row justify-between px-[1em]'>
            <div className="font-ubuntu text-[1.9rem] ">
                <span>Easy<span className="text-orange-600">Cart</span></span>
            </div>
            <div className="font-ubuntu text-[1rem] pt-[1em] flex flex-row">
                <div>Follows on : </div>
                <div className='px-2'><LinkedInIcon/></div>
                <div className='px-2'><GitHubIcon/></div>
            </div>
          </div>
            <div className="flex flex-row justify-center font-ubuntu text-[1rem]">
                <span className="cursor-pointer group hover:text-orange-600 transition duration-300 mr-4 md:py-5">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>
                <span className="cursor-pointer group hover:text-orange-600 transition duration-300 mr-4 md:py-5">All products<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>
            </div>
        </div>
      <div className='w-[100%] absolute bottom-0 flex justify-center'><span>©Copyright Reserved 2023</span></div>
    </div>
  )
}

export default Footer
