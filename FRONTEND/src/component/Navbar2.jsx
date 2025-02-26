import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaAngleDown, FaTable } from "react-icons/fa";
import { IoSquareOutline } from 'react-icons/io5';
import aa from '../component/aa.png'
const Navbar2 = () => {
    
    let Links = [
        {name:"About Us"},
        {name:"Our Products"},
        {name:"Contact Us"},]
      const [open, setOpen] = useState(false);
  return (
    <>
       <div className='flex items-center justify-between w-[92%] mx-auto'>
          <div><img className='w-[100px]' src={aa} /></div>
          <div className={`absolute bg-red-500 lg:static h-fit  py-3 lg:py-0 lg:h-fit left-0  w-full lg:w-fit flex items-center lg:mx-0 bg lg:transition-none transition-all duration-500 ease-in lg:bg-transparent ${open ? "top-[60px] opacity-100" : "top-[-200px] opacity-100"}`}>
            <ul className='flex lg:flex-row flex-col gap-2 lg:items-center bg-white lg:gap-10 text-lg font-semibold px-5'>
              {Links.map((Link, index) => (
                <li key={index}>
                  <a className='hover:text-slate-500 bg-white' href={Link.link}>{Link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-2 lg:gap-5'>
            <div className='flex items-center'>
              <div className='w-5 h-5 rounded-full bg-white me-2'></div>
              <p className='lg:flex items-center text-white hidden'>Language <span><FaAngleDown className='mt-1'/></span></p>
            </div>

            <Link to="/"><div><button style={{backgroundColor:"#fc3d60"}} className='px-5 rounded-xl py-1 text-white font-semibold lg:block hidden'>Get Started</button></div></Link>
            <div onClick={() => setOpen(!open)} className={`lg:hidden block font-bold ${open ? 'rotate-45' : ''}`}><IoSquareOutline size={18}/></div>
          </div>
        </div>
    </>
  )
}

export default Navbar2