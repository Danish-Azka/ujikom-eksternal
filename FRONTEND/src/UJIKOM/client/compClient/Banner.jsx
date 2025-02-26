import React from 'react'
import oli from './oli.jpeg'
import './Client.css'
const Banner = () => {
  return (
    <>
    <div className= 'bg-white h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full gap-3 '>
          <div className='w-8/12 bg rounded-lg'>
          </div>
          <div className='w-4/12 flex flex-col gap-3'>
            <div className='w-full h-1/2 mon rounded-lg'>f</div>
            <div className='w-full h-1/2 rounded-lg'>
            <img className='rounded-lg h-full w-full' src={oli} alt="" />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Banner