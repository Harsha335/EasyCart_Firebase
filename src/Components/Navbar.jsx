import React, { useState } from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const Navbar = () => {
  const [userLogined,setUserLogined]=useState(false);
  return (
    <div className="bg-[#050458] h-40 md:h-[100%] text-white flex flex-col md:flex-row sticky top-0 z-20">
      <div className="flex-1  font-ubuntu flex items-center justify-between text-[2.2rem] px-[1em] md:px-[5em] ">
        <span>Easy<span className="text-orange-600">Cart</span></span>
        <span className="cursor-pointer block md:hidden mx-5"><MenuTwoToneIcon/></span>
      </div>
      {/* <div className='flex-1 '>Search bar</div> */}
      <div className="w-2/5 flex items-start  flex-col md:items-center md:justify-end md:flex-row ">
        <span className="mx-10 cursor-pointer group hover:text-orange-600 transition duration-300 md:py-5">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>
        <span className="mx-10 cursor-pointer group hover:text-orange-600 transition duration-300 md:py-5">All products<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>
        {userLogined && <span className="mx-10 cursor-pointer group hover:text-orange-600 transition duration-300 md:py-5">Cart <ShoppingCartTwoToneIcon/><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>}
        {!userLogined && <span className="mx-10 cursor-pointer group hover:text-orange-600 transition duration-300 md:py-5">Login<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span></span>}
      </div>
    </div>
  );
};

export default Navbar;
