import React from 'react';
import aa from './aa.png';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminProf from './AdminProf';

const MenuItem = ({ path, icon, label, isActive, onClick }) => (
  <div className={`w-full h-[10%] rounded-s-xl sideButt ${isActive ? 'bg-white' : ''}`} onClick={onClick}>
    <div className='flex items-center w-full h-full gap-3 ps-7 text-[#1e617b] font-semibold teksSide py-2'>
      {icon} {label}
    </div>
  </div>
);

const Side = ({ menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='h-full w-full'>
      <div className='w-full h-[30%] bg-[#FBB900] py-4 px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className='text-sm text-white'>Active</p>
          </div>
          <AdminProf />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <img className='w-[120px] rounded-full' src={aa} alt="Profile" />
          <p className='text-white text-sm text-center mt-3'>RentCarkuu</p>
          <p className='text-gray-500 text-sm text-center mt-1'>www.RentCarku.com</p>
        </div>
      </div>
      <div className='w-full h-[70%] bg-[rgb(36,42,66)] py-7'>
        <div className='w-full h-full ps-3'>
          {menuItems.map(({ path, icon, label }) => (
            <MenuItem 
              key={path} 
              path={path} 
              icon={icon} 
              label={label} 
              isActive={location.pathname === path} 
              onClick={() => navigate(path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Side;
