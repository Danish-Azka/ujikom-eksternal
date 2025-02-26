import React, { useEffect, useState } from 'react';
import Navbar2 from '../component/Navbar2';
import { getMobil } from '../service/apiMobil';
import { IoStar } from "react-icons/io5";
import bb from './bg.png'
import './land.css'
import aa from '../component/aa.png'

const Landing = () => {
    const [data, setdata] = useState([]);
    
    useEffect(() => {
        fetchMobil();
    },[]);

    const fetchMobil = () => {
        getMobil()
            .then(res => {
                setdata(res);
                console.log(res);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='w-full h-full pb-10'>
            <div className='h-[100-px] border-b border-slate-400 px-1 py-1 flex'>
                <div className='w-5 h-5 bg-red-400 mr-2 rounded-full'></div>
                <div className='w-5 h-5 bg-yellow-400 mr-2 rounded-full'></div>
                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
            </div>
            <div className=' '>
                <Navbar2/>
            </div>
            <div className='grid grid-cols-2 pl-10 bgim '>
                <div className='flex flex-col justify-center items-center px-[70px]'>
                    <p className='text-[55px] font-bold '>Search and find <br /> your best car rental with easy way</p>
                    <p className='text-m font-semibold'>
                        Mulai dari petualangan singkat hingga perjalanan panjang, kami punya mobil yang siap menemani Anda. Fleksibel, aman, dan terpercaya, semua kebutuhan transportasi Anda ada di sini!
                    </p>

                    <div className='flex justify-start gap-5 pt-10 w-full'>
                        <div className='w-36 rounded px-2 py-1 bg-black text-center text-white font-semibold'>Booking Now</div>
                        <div className='w-36 rounded px-2 py-1 text-center text-white font-semibold underline hover:bg-black translate-x-2'>See all cars</div>
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <img src={bb}  alt="" />
                </div>
            </div>
            <div className='flex justify-center w-full pt-[20px]'>
                <p className='text-xl font-extrabold tracking-wide'>Our Available Products</p>
            </div>

           <div className='flex justify-center pt-14'>
           <div className='grid grid-cols-3 gap-10'>
                {data.map((item, index) => (
                    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t h-[50px]-lg h-52 w-full" src={item.gambar} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.merk} - {item.model}</h5>
                        </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <IoStar color='yellow'/>
                            <IoStar color='yellow'/>
                            <IoStar color='yellow'/>
                            <IoStar color='yellow'/>
                            <IoStar color='yellow'/>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className='flex justify-between '>
                        <p className='inline-flex items-center text-[18px] font-semibold'>Price : Rp {item.harga.toLocaleString()}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to favorite
                        </a>
                    </div>
                    </div>
                </div>
                ))}

                      
            </div>
           </div>
   
        </div>
        
    );
}

export default Landing;
