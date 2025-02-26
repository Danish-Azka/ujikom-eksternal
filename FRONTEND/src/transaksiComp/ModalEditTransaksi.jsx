import React, { useState, useEffect } from 'react';
import { getTransaksiById, editTransaksi} from '../service/apiTransaksi';
import { getKaryawan } from '../service/apiKaryawan';
import { getMobil } from '../service/apiMobil';
import { getClients } from '../service/apiClient';
const ModalEditTransaksi = ({ transaksiId, onClose }) => {

  const [client, setClient] = useState([]);
  const [karyawan, setKaryawan] = useState([]);
  const [mobil, setMobil] = useState([]);
    
  useEffect(() => {
      fetchClient();
      fetchKaryawan();
      fetchMobil();
  },[]);

  const fetchClient = () => {
      getClients()
          .then(res => {
              setClient(res);
              console.log(res);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }
  const fetchKaryawan = () => {
      getKaryawan()
          .then(res => {
              setKaryawan(res);
              console.log(res);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }
  const fetchMobil = () => {
      getMobil()
          .then(res => {
              setMobil(res);
              console.log(res);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }
  const [formData, setFormData] = useState({
    tanggalPeminjaman: '',
    batasPeminjaman: '',
    durasiSewa: '',
    totalBiaya:'',
    harga:'',
    ClientId:'',
    MobilId:'',
    KaryawanId:''
  });

  useEffect(() => {
    const fetchTransaksiData = async () => {
      try {
        const transaksi = await getTransaksiById(transaksiId);
        setFormData({
          tanggalPeminjaman: transaksi.tanggalPeminjaman,
          batasPeminjaman: transaksi.batasPeminjaman,
          durasiSewa: transaksi.durasiSewa,
          totalBiaya: transaksi.totalBiaya,
          harga : transaksi.harga,
          ClientId: transaksi.ClientId,
          MobilId: transaksi.MobilId,
          KaryawanId: transaksi.KaryawanId
        });
      } catch (error) {
        console.error('Failed to fetch transaksi data', error);
      }
    };
    fetchTransaksiData();
  }, [transaksiId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editTransaksi(transaksiId, formData);
      onClose(); 
    } catch (error) {
      console.error('Failed to update transaksi', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-blue-600">Edit Transaksi</h2>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
          <div className="mb-4">
            <label className="block text-gray-700">Tanggal Peminjaman</label>
            <input
              type="text"
              name="tanggalPeminjaman"
              value={formData.tanggalPeminjaman}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Batas Peminjaman</label>
            <input
              type="text"
              name="batasPeminjaman"
              value={formData.batasPeminjaman}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Durasi Sewa</label>
            <input
              type="text"
              name="durasiSewa"
              value={formData.durasiSewa}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Total Biaya</label>
            <input
              type="text"
              name="totalBiaya"
              value={formData.totalBiaya}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ClientId:</label>
            <select
              type="option"
              onChange={handleChange}
              name="ClientId"
              className="border border-gray-300 p-2 w-full"
            >
              <option  selected>Change Client</option>
              {client.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>      
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">MobilId:</label>
            <select
              type="option"
              onChange={handleChange}
              name="MobilId"
              className="border border-gray-300 p-2 w-full"
            >
              <option  selected>Change MobilId</option>
              {mobil.map((item, index) => (
                <option key={index} value={item.MobilIdId}>{item.id} - {item.model}</option>
              ))}
            </select>
          </div>      
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">KaryawanId:</label>
            <select
              type="option"
              onChange={handleChange}
              name="MobilId"
              className="border border-gray-300 p-2 w-full"
            >
              <option  selected>Change Karyawan</option>
              {karyawan.map((item, index) => (
                <option key={index} value={item.KaryawanId}>{item.nama} - {item.divisi}</option>
              ))}
            </select>
          </div>      
          <div className="flex justify-center items-center gap-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditTransaksi;
