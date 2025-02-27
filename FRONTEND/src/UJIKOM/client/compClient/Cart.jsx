import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { XCircle, Trash2Icon } from "lucide-react";
import { getCartByBuyerId, deleteCart } from "../../../service/apiCart";

const id = localStorage.getItem("idBuyer");

const Cart = ({ isCartOpen, onClose }) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) fetchCart();
  }, [isCartOpen]);

  const fetchCart = async () => {
    try {
      const carts = await getCartByBuyerId();
      setData(carts);
    } catch (error) {
      console.error("Error fetching cart", error);
    }
  };

  const handleDelete = async (cartId) => {
    try {
      await deleteCart(cartId);
      setData(data.filter((item) => item.id !== cartId));
    } catch (error) {
      console.error("Gagal menghapus item", error);
    }
  };

  const handleSelectItem = (cartId) => {
    setSelectedItems((prev) =>
      prev.includes(cartId) ? prev.filter((id) => id !== cartId) : [...prev, cartId]
    );
  };

  const handleCheck = async () => {
    try {
      const selectedCartItems = data.filter((item) => selectedItems.includes(item.id));
      if (selectedCartItems.length === 0) {
        alert("Pilih minimal satu item untuk checkout!");
        return;
      }

      const buyerId = id;
      const totalHarga =
        selectedCartItems.reduce((total, item) => total + item.Totalharga, 0) + 100000;

      const response = await axios.post("http://localhost:3009/transaksishop/post", {
        buyerId,
        items: selectedCartItems,
        totalHarga,
      });

      
      await Promise.all(selectedCartItems.map((item) => deleteCart(item.id)));

      setData(data.filter((item) => !selectedItems.includes(item.id)));
      setSelectedItems([]);

      alert("Checkout berhasil! Transaksi telah dibuat.");
      onClose();
    } catch (error) {
      console.error("Error during checkout:", error.response ? error.response.data : error.message);
    }
  };

  const selectedCartItems = data.filter((item) => selectedItems.includes(item.id));
  const totalHarga =
    selectedCartItems.reduce((total, item) => total + item.Totalharga, 0) +
    (selectedCartItems.length > 0 ? 100000 : 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-300 rounded-lg h-[700px] w-[900px] shadow-lg">
        <div className="flex justify-between h-[60px] p-5 bg-black rounded-t-lg items-center border-b pb-2">
          <h2 className="text-xl font-bold text-white">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500 cursor-pointer" />
          </button>
        </div>

        <div className="w-full max-h-full p-3 flex gap-3 justify-between items-center h-[640px]">
          <div className="flex flex-col items-center h-[640px] w-7/12 gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-lg">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="h-[250px] bg-white w-full flex flex-col p-3 rounded-lg shadow-md">
                  <div className="flex justify-between w-full items-center mb-3">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        onChange={() => handleSelectItem(item.id)}
                        checked={selectedItems.includes(item.id)}
                      />
                      <img
                        className="w-10 h-10 rounded-full border border-black"
                        src={item.Shop?.gambar}
                        alt="Shop"
                      />
                      <p>{item.Shop?.nama}</p>
                    </div>
                    <button onClick={() => handleDelete(item.id)}>
                      <Trash2Icon className="text-red-500 cursor-pointer" />
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-1/3">
                      <img
                        className="w-full h-32 object-cover rounded-lg"
                        src={item.Product?.gambar}
                        alt="Product"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col justify-start gap-2">
                      <p className="text-xl font-semibold">{item.Product?.nama}</p>
                      <p className="text-xs font-light bg-slate-400 px-2 py-1 rounded-xl w-fit">
                        {item.Product?.category}
                      </p>
                      <p>Harga Per Item: IDR {item.Product?.harga.toLocaleString()}</p>
                      <p>Total Harga: IDR {item.Totalharga.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Keranjang kosong</p>
            )}
          </div>

          <div className="bg-white max-h-full items-start p-3 rounded-xl w-5/12">
            <p className="text-xl font-semibold border-b border-black">KWITANSI</p>
            {selectedCartItems.map((item) => (
              <div key={item.id} className="mt-3 flex items-center gap-3">
                <img className="w-10 h-10 rounded-lg" src={item.Product?.gambar} alt="Product" />
                <p>
                  {item.Product?.nama} x {item.jumlah}
                </p>
              </div>
            ))}
            <p className="text-l mt-3">Shipping Costs : IDR 100.000</p>
            <div className="w-full h-20 border border-black mt-5 p-3 rounded-xl flex items-center">
              <p className="text-xl">Total : IDR {totalHarga.toLocaleString()}</p>
            </div>
            <div className="flex justify-end items-center mt-2">
              <div
                className="px-3 py-1 bg-black text-white rounded-xl cursor-pointer"
                onClick={handleCheck}
              >
                CheckOut
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
