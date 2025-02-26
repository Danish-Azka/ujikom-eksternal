import React, { useState, useEffect } from "react";
import { createProduct } from "../../service/apiProduct";

const ModalTambah = ({ onClose }) => {
    const [formData, setFormData] = useState({
        nama: '',
        harga: '',
        gambar: '',
        deskripsi: '',
        category: 'Sparepart Kendaraan', 
        ShopId: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const categoryOptions = [
        "Sparepart Kendaraan",
        "Aksesoris Kendaraan",
        "Perawatan & Perlengkapan",
        "Peratalatan Bengkel & Modifikasi"
    ];

    useEffect(() => {
        const storedShopId = localStorage.getItem("idShop") || "";
        setFormData((prevData) => ({ ...prevData, ShopId: storedShopId }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await createProduct(formData);
            console.log('Form submitted:', formData);
            onClose();
        } catch (err) {
            setError('Gagal menyimpan produk');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <input
                            type="text"
                            name="nama"
                            className="w-full border p-2 rounded"
                            placeholder="Nama Produk"
                            value={formData.nama}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="harga"
                            className="w-full border p-2 rounded"
                            placeholder="Harga"
                            value={formData.harga}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="gambar"
                            className="w-full border p-2 rounded"
                            placeholder="URL Gambar"
                            value={formData.gambar}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="deskripsi"
                            className="w-full border p-2 rounded"
                            placeholder="Deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                        />
                        
                        <select
                            name="category"
                            className="w-full border p-2 rounded"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categoryOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                
                            ))}
                            category
                        </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            disabled={loading}
                        >
                            {loading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default ModalTambah;
