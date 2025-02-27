import React from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../../component/Navbar';
import PenjualanPerBulan from '../chart/PenjualanPerBulan';
import Keuntungan from '../chart/Keuntungan';
import BarangTerjual from '../chart/BarangTerjual';

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];

const ShopDasb = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondside menuItems={shopMenu} />
      </div>
      
      <div className='w-[84%]'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center py-3'>
          <div className='bg-[#E9EAEC] h-full w-11/12  p-1'>
          
            <div className='flex grid-cols-3 gap-5'>

              <div className="bg-white rounded-lg w-1/3 shadow-md ">
                <BarangTerjual/>
             </div>
              <div className="bg-white rounded-lg w-2/3 shadow-md p-6">
                <div className="text-center">
                <p className="text-xl font-semibold">Konstruksi Teknik Sipil</p>
                <p className="text-gray-500 mt-3">Pembangunan gedung, infrastruktur transportasi, sistem drainase, dan renovasi.</p>
                </div>
             </div>
             
           </div>

            <div className='flex gap-5 mt-3'>
            <div className="bg-white w-[68%] rounded-lg shadow-md p-6">
                <PenjualanPerBulan/>
             </div>
            <div className='w-[32%] bg-white rounded-lg shadow-md pt-[30px]'>
              <Keuntungan/>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDasb;
