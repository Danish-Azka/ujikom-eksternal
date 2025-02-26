import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from './compClient/Banner'
import Kategori from './compClient/ALLKATEGORI/Kategori'
import bg from '../gu.jpeg'

const ClientSite = () => {
  return (
    <>
    <div className='w-full h-full bg-[#f5f5f5]'>
      <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='' >
            <Banner/>
            <Kategori/>
        </div> 

        <div class="w-full mt-[100px] px-10">
        <div class="flex items-center justify-between px-[60px]">
                <span class="flex gap text-2xl font-semibold items-center"><img src={bg} className='w-[70px] rounded-full' />GearUp</span>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li><a href="#" class="hover:underline me-4 md:me-6">About</a></li>
                <li><a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a></li>
                <li><a href="#" class="hover:underline me-4 md:me-6">Licensing</a></li>
                <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className='flex jusify between items-center'>
           
        <div style={{ width: "100%" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=pamulang,%20showroom,%20jl.%20panjajaran%20no.1+(rentCarKuu)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      ></iframe>
    </div>        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">GearUp™</a>. All Rights Reserved.</span>
    </div>
    </div>
    </div>
    </>
  )
}

export default ClientSite