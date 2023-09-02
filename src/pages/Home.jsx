import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <div className='m-4'>
        <div className='text-3xl font-semibold font-PlayfairDisplay border-l-[6px] border-orange-600 pb-2 pl-2'>popular products</div>  {/*popular products*/}
        <div className='bg-neutral-100 my-[15px] box-border w-[100%] h-[300px] p-4 rounded-[10px] shadow-inner flex flex-row flex-nowrap overflow-auto justify-around'> {/*grid grid-cols-5 gap-4*/}
          {/* USE GRID */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className='m-4'> {/*products 1*/}
      <div className='text-3xl font-semibold font-PlayfairDisplay border-l-[6px] border-orange-600 pb-2 pl-2'>Fashion</div>  {/*popular products*/}
        <div className='bg-neutral-100 my-[15px] box-border w-[100%] h-[300px] p-4 rounded-[10px] shadow-inner flex flex-row flex-nowrap overflow-auto justify-around'> {/*grid grid-cols-5 gap-4*/}
          {/* USE GRID */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className='m-4'> {/*products 2*/}
      <div className='text-3xl font-semibold font-PlayfairDisplay border-l-[6px] border-orange-600 pb-2 pl-2'>Electronic products</div>  {/*popular products*/}
        <div className='bg-neutral-100 my-[15px] box-border w-[100%] h-[300px] p-4 rounded-[10px] shadow-inner flex flex-row flex-nowrap overflow-auto justify-around'> {/*grid grid-cols-5 gap-4*/}
          {/* USE GRID */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className='flex items-center justify-center m-4'>
        <span className='border-solid border-2 border-black p-2 bg-orange-600 text-white cursor-pointer hover:text-[1.09em] transition-all duration-200 ease-out '>Explore All categories</span> 
      </div>
      <Footer/>
    </>
  )
}

export default Home
