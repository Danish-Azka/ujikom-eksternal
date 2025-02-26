import React from "react";
import { ShoppingCart, XCircle, } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const ModalProductDetail = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] rounded-xl shadow-lg">
        <div className="flex w-full justify-between rounded-t-xl p-5 h-15 bg-[#1D1E20]">
            <p className="text-xl text-white">{product.nama}</p>
        <button className=" text-red-600 hover:underline"onClick={onClose}>
          <XCircle size={35}/>
        </button>
        </div>

        <div className="p-5">

        <img
          src={product.gambar}
          alt={product.nama}
          className="w-full h-[250px] object-cover rounded-lg mb-3"
          />
        <div className="flex justify-start items-center gap-3">
            <img className="w-10 h-10  border border-black rounded-full " src={product.Shop.gambar} alt="" />
            <p className="text-gray-700 text-sm mb-2"> {product.Shop?.nama}</p>
        </div>
        <p className="text-gray-600 mb-3">Deskripsi Produk : {product.deskripsi}</p>
        <span className="text-lg font-bold text-gray-900">
          IDR {product.harga.toLocaleString()}
        </span>

        <div className="mt-4 flex justify-between">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 flex justify-between items-center gap-1 rounded-lg hover:bg-gray-300">
            Add to Favorite <FaHeart size={20} color="red"/>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center gap-1 rounded-lg hover:bg-blue-700">
            Add to Cart <ShoppingCart/>
          </button>
        </div>
          </div>

       
      </div>
    </div>
  );
};

export default ModalProductDetail;
