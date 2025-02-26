import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaComputerMouse } from "react-icons/fa6";

const getWIBDate = () => {
  return new Date().toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
export const Navbar = () => {
  
  const getWIBTime = () => {
    return new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  };
  return (
    <div className='w-full flex justify-end items-center bg-gray-100 h-16 '>   
      
      {/* Middle section */}
      <div className='flex items-center h-full'>
        <div className='flex items-center gap-4'>
          <p className='m-0 flex items-center gap-1 bg-gray-200 px-4 py-1 rounded'> {getWIBTime()}</p>
          <p className='m-0 flex items-center gap-1 bg-gray-200 px-4 py-1 rounded'>  {getWIBDate()}</p>
        </div>
        
        {/* Right section */}
        <div className='flex h-full'>
          <div className='h-full px-4 flex justify-center items-center border-l'>
            <FaLocationPin className='text-gray-600' />
          </div>
          <div className='h-full px-4 flex justify-center items-center border-l'>
            <FaGear className='text-gray-600' />
          </div>
          <div className='h-full px-4 flex justify-center items-center border-l'>
            <FaComputerMouse className='text-gray-600' />
          </div>
        </div>
      </div>
    </div>
  )
}
