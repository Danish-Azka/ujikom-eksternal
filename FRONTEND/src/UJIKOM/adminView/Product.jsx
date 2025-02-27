import React, { useState, useEffect } from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../../component/Navbar';
import { Trash2, PlusCircle } from "lucide-react";
import ModalTambah from './ModalTambah';
import { getProductByShopId, deleteProduct } from '../../service/apiProduct'
import ModalDeleteProduk from "./ModalDeleteProduk"


const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];

const Product = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await getProductByShopId(); 
          setProducts(data);
        } catch (err) {
          setError("Gagal mengambil data produk");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

    const openDelete = (id) => {
        setSelectedProductId(id);
        setDeleteOpen(true)
      }
    
      const closeDelete = () => {
        setDeleteOpen(false);
        setSelectedProductId(null);
      }
    
      const handleDeleteProduct = async () => {
        if (selectedProductId) {
          try{
            await deleteProduct(selectedProductId);
            products(prevData => prevData.filter(shop => shop.id !== selectedProductId));
            closeDelete();
          } catch (error) {
            console.error("error deleting Shop")
          }
        }
      };

  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondside menuItems={shopMenu} />
      </div>
      <div className='w-[84%] h-screen'>
        <Navbar />
        <div className='flex flex-col items-center justify-center py-3'>
          <div className='bg-[#E9EAEC] h-[685px] w-11/12 '>
            <div className='w-full h-14 flex justify-center items-center bg-[#1D1E20]'>
              <p className='text-center text-3xl font-semibold text-[#E9EAEC]'>Product's</p>
            </div>
            <div className='w-full p-4'>
              <button onClick={() => setIsFormVisible(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <PlusCircle className="mr-2" /> Tambah Produk
              </button>
              {isFormVisible && <ModalTambah onClose={() => setIsFormVisible(false)} />}

                
              {isDeleteOpen && <ModalDeleteProduk onClose={closeDelete} onDelete={handleDeleteProduct} />}

      <div className="h-[550px] overflow-y-auto">
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={product.gambar} alt={product.nama} className="w-full h-[200px] object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.nama}</h3>
            <p className="text-gray-700">Rp {product.harga.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{product.deskripsi}</p>
            <button
              onClick={() => openDelete(product.id)}
              className=" px-2 py-2 bg-red-600 text-white rounded flex items-center hover:bg-red-700"
            >
              <Trash2 /> 
            </button>
          </div>
        ))}
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
