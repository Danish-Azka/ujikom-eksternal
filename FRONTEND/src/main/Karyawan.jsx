import React, { useEffect, useState } from 'react';
import Side from '../component/Side';
import StatBox from '../component/Statbox';
import ModalFormKaryawan from '../KaryawanComp/ModalFormKaryawan';
import { getShop, deleteShop } from '../service/apiShop';
import ModalDeleteKaryawan from '../KaryawanComp/ModalDeleteKaryawan';
import ModalEditKaryawan from '../KaryawanComp/ModalEditKaryawan';
import { IoCarSport, IoFolderOpen, IoHome, IoPeople, IoPerson, IoReturnDownBack, IoEyeOffSharp,IoEyeSharp } from "react-icons/io5";

const Client = () => {
    const [data, setData] =useState([])
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isDeleteOpen, setDeleteOpen] = useState(false)
    const [selectedShopId, setSelectedShopId] = useState(null)
    const [isEditOpen, setEditOpen] = useState(false)
    const [editedData, setEditedData] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    

    const sideMenu = [
      { path: '/display', icon: <IoHome />, label: 'Home' },
      { path: '/karyawan', icon: <IoPerson />, label: 'Partnership' },
      { path: '/client', icon: <IoPeople />, label: 'Client' },
      { path: '/mobil', icon: <IoCarSport />, label: 'Car' },
      { path: '/transaksi', icon: <IoFolderOpen />, label: 'Transaction' },
      { path: '/pengembalian', icon: <IoReturnDownBack />, label: 'Return' }
    ];
    const handleshow = () => {
      setShowPassword(show => !show)
    }
    //modal edit data
    useEffect(() => {
      fetchKaryawan()
    },[])
  
    const fetchKaryawan = async () => {
      try {
        const empeloye = await getShop();
        setData(empeloye);
      } catch (error) {
        console.error('error fetching empeloye', error)
      }
    }

    const openEditForm = (shopId) => {
      setEditedData(shopId);
      setEditOpen(true)
    };

    const closeEditForm = () => {
      setEditOpen(false)
      setEditedData(null)
    }
    //modal delete data
  const openDelete = (id) => {
    setSelectedShopId(id);
    setDeleteOpen(true)
  }

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedShopId(null);
  }

  const handleDeleteShop = async () => {
    if (selectedShopId) {
      try{
        await deleteShop(selectedShopId);
        setData(prevData => prevData.filter(shop => shop.id !== selectedShopId));
        closeDelete();
      } catch (error) {
        console.error("error deleting Shop")
      }
    }
  };


    // modal post data
const handleOpenForm = () => {
setIsFormVisible(true);
};
const handleCloseForm = () => {
setIsFormVisible(false);
};
    useEffect(()=> {
        fetchApi()
    }, [])
    const fetchApi = () => {
        getShop()
            .then(res => {
                setData(res);
                console.log(res)
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };

  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Side menuItems={sideMenu} />
      </div>
     
     <div className='px-5 py-5 h-full flex flex-col justify-between  w-[84%]'>
        {/* bagian atas */}
       <div className='w-full rounded-t-xl bg-slate-50'>
        <div className=' py-1 top'>
          <div className='h-full flex justify-between'>
            <StatBox title="Total Client" value="200" growth={5} />
            <StatBox title="Total Revenue" value="$50,000" growth={10} />
            <StatBox title="New Clients" value="25" growth={2} />
          </div>
          <div className='flex justify-end '>
            <div className='bg-slate-600 outline outline-slate-700 outline-1 text-xs text-white px-1 py-1 rounded-lg cursor-default hover:bg-slate-800 hover:text-slate-300 mt-2'
            onClick={handleOpenForm}
            >Add New Partnership
            </div>
          </div>
        </div>

      </div>
      {isFormVisible && <ModalFormKaryawan onClose={handleCloseForm} />}
      {isDeleteOpen && <ModalDeleteKaryawan onClose={closeDelete} onDelete={handleDeleteShop} />}
      {isEditOpen && <ModalEditKaryawan karyawanId={editedData} onClose={(closeEditForm)}/>}
       {/* bagian table */}
       <div className='bg-slate-50 h-[80%] w-full'>
       <div className="container mx-auto ">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 w-[10%] text-sm tracking-wide font-semibold border border-slate-300 border-r-2 ">ID</th>
            <th className="p-3 w-[22%]text-sm tracking-wide font-semibold border border-slate-300 border-r-2 ">Email</th>
            <th className="p-3 w-[35%] text-sm tracking-wide font-semibold border border-slate-300 border-r-2 ">Nama</th>
            <th className="p-3 text-sm tracking-wide font-semibold border border-slate-300 border-r-2 ">Action</th>

          </tr>
        </thead>
        <tbody>
        {data && data.map((item, index) => (
          <tr key={index} className="">
            <td className="p-3 text-sm tracking-wide font-semibold border border-slate-300 border-r-2 text-center">{item.id}</td>
            <td className="p-3 text-sm tracking-wide font-semibold border border-slate-300 border-r-2 text-center">{item.email}</td>
            <td className="p-3 text-sm tracking-wide font-semibold border border-slate-300 border-r-2 text-center">{item.nama}</td>
         
            <td className=" text-sm  border border-slate-300 border-r-2 text-center">
            <div className=" rounded flex justify-center gap-1">
                <div className='bg-green-500 px-3 text-white rounded-lg cursor-default'
                onClick={() => openEditForm(item.id)}
                >Edit</div>
                <div className='bg-red-500 px-3 text-white rounded-lg cursor-default'
                onClick={() => openDelete(item.id)}
                >Delete</div>
            </div>
            </td>
          </tr>
        ))}
        </tbody>
        
      </table>
    </div>
       </div>
     </div>
    </div>
  );
};

export default Client;
