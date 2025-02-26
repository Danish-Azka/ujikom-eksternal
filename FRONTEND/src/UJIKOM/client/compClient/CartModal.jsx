import React, { useState } from "react";
import { XCircle } from "lucide-react";
import { createCart } from "../../../service/apiCart";

const CartModal = ({ product, isOpen, onClose }) => {
  const [jumlah, setJumlah] = useState(1);
  const [loading, setLoading] = useState(false);

  // Ambil BuyerId dan konversi ke Number (pastikan tidak null atau NaN)
  const id = Number(localStorage.getItem("idBuyer")) || null;

  if (!isOpen) return null;

  const Totalharga = jumlah * product.harga;

  const handleConfirm = async () => {
    try {
      setLoading(true);

      if (!id) {
        alert("Gagal: ID Pembeli tidak ditemukan.");
        return;
      }

      const cartData = {
        ShopId: product.Shop?.id,
        ProductId: product.id,
        BuyerId: id, 
        jumlah: Number(jumlah), 
        Totalharga: Totalharga,
      };

      console.log("Data yang dikirim ke backend (cart):", cartData);
      await createCart(cartData);

      alert("Berhasil ditambahkan ke keranjang!");
      onClose();
    } catch (error) {
      console.error("Gagal menambahkan ke keranjang:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-3">
          <h2 className="text-xl font-bold">Tambah ke Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500" />
          </button>
        </div>

        <div className="mb-3">
          <p><strong>Produk:</strong> {product.nama}</p>
          <p><strong>Toko:</strong> {product.Shop?.nama}</p>
          <p><strong>Harga Satuan:</strong> IDR {product.harga.toLocaleString()}</p>
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Jumlah:</label>
          <input
            type="number"
            min="1"
            value={jumlah}
            onChange={(e) => setJumlah(Number(e.target.value))}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-bold">Total: IDR {Totalharga.toLocaleString()}</p>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          onClick={handleConfirm}
          disabled={loading}
        >
          {loading ? "Memproses..." : "Konfirmasi Pembelian"}
        </button>
      </div>
    </div>
  );
};

export default CartModal;
