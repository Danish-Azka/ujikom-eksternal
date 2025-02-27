import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Droplet } from 'lucide-react'
import { FaTools } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

const Kategori = () => {
  return (
    <>
      <div className='mt-10 h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full justify-center items-center'>
          <div className='w-10/12 h-full rounded-lg'>
            <p className='text-3xl font-bold text-center mb-5'>K A T E G O R I</p>
            <div className="grid grid-cols-4 gap-4 w-full h-full">
              
              <Link to={'/sparepart'}>
                <div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center p-4">
                  <GiCarWheel size={36} />
                  <span>Sparepart Kendaraan</span>
                </div>
              </Link>

              <Link to={'/aksesoris'}>
                <div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center p-4">
                  <Sparkles size={36} className="text-yellow-500" />
                  <span>Aksesoris Kendaraan</span>
                </div>
              </Link>

              <Link to={'/perawatan'}>
                <div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center p-4">
                  <Droplet size={36} className="text-green-500" />
                  <span>Perawatan & Perlengkapan</span>
                </div>
              </Link>

              <Link to={'/modifikasi'}>
                <div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center p-4">
                  <FaTools size={36} className='text-slate-400'/>
                  <span>Peralatan & Modifikasi</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kategori
