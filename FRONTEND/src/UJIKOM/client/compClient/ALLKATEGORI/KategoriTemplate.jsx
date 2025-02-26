import React, { useState, useEffect } from 'react';
import NavCLient from '../NavCLient';
import { getProduct } from '../../../../service/apiProduct';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="h-[350px] bg-white border border-gray-200 rounded-lg shadow-xl">
      <img
        className="rounded-t-lg w-full h-[200px] object-cover"
        src={product.gambar}
        alt={product.nama}
      />
      <div className="px-3 py-3">
        <h5 className="text-l font-semibold tracking-tight text-gray-900">
          {product.nama}
        </h5>
        <div className="flex items-center justify-between mt-2">
          <span className="text-l font-bold text-gray-900">
            IDR {product.harga.toLocaleString()}
          </span>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => navigate(`/detail/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const ShopSell = ({ shop }) => {
  return (
    <div className="rounded-xl w-full shadow-lg h-[150px] flex flex-col justify-center items-center bg-white p-3">
      <img className="w-[100px] h-[100px] object-cover rounded-full" src={shop.gambar} alt={shop.nama} />
      <p className="text-l font-semibold">{shop.nama}</p>
    </div>
  );
};

const KategoriList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uniqueShops, setUniqueShops] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const data = await getProduct();
      const filteredProducts = data.filter(product => product.category === category);
      setProducts(filteredProducts);
      
      const shops = new Map();
      filteredProducts.forEach(product => {
        if (!shops.has(product.Shop.id)) {
          shops.set(product.Shop.id, product.Shop);
        }
      });
      setUniqueShops([...shops.values()]);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-[#f5f5f5]">
      <div>
        <div className="sticky z-50 top-0 left-0 right-0">
          <NavCLient />
        </div>

        <div className="w-full p-5 h-[350px] gap-3 flex justify-center items-center">
          <div className="w-8/12 h-full flex flex-col bg-white rounded-lg">
            <div className="h-1/6 w-full bg-[#1D1E20] flex justify-between rounded-t-lg items-center px-3">
              <p className="font-bold text-xl text-white">G E A R U P</p>
              <p className="font-semibold text-white">Kategori : {category}</p>
            </div>

            <div className='w-full h-5/6 flex justify-center items-center'>
              <div className='w-11/12 h-full'>
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  {loading ? (
                    <p className="text-gray-800 text-center">Loading...</p>
                  ) : uniqueShops.length > 0 ? (
                    uniqueShops.map((shop) => <ShopSell key={shop.id} shop={shop} />)
                  ) : (
                    <p className="text-gray-800 text-center col-span-3">Tidak ada toko yang menjual produk dalam kategori ini.</p>
                  )} 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit gap-3 flex justify-center items-center">
          <div className="w-10/12 h-full bg-white shadow-lg rounded-t-lg p-3">
          <div className="grid grid-cols-3 gap-4 w-full h-full">
  {loading ? (
    <p className="text-gray-800 text-center">Loading...</p>
  ) : products.length > 0 ? (
    products.map((product) => <ProductCard key={product.id} product={product} />)
  ) : (
    <p className="text-gray-800 text-center col-span-3">Tidak ada produk dalam kategori ini.</p>
  )}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriList;
