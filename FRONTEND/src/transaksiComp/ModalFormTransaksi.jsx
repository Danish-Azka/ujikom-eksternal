import React, { useEffect, useState } from 'react';
import { createTransaksi } from '../service/apiTransaksi';
import moment from 'moment/moment';
import { getMobilById } from '../service/apiMobil'; 
import { getClients } from '../service/apiClient';
import { getKaryawan } from '../service/apiKaryawan';
import { getMobil } from '../service/apiMobil';

const ModalFormTransaksi = ({ onClose }) => {
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
    totalBiaya: '',
    ClientId: '',
    MobilId: '',
    KaryawanId: ''
  });

  const [mobilPrice, setMobilPrice] = useState(0);
  const [selisih, setSelisih] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tanggalPinjam = moment(formData.tanggalPeminjaman);
    const tanggalKembali = moment(formData.batasPeminjaman);
    const diffDays = tanggalKembali.diff(tanggalPinjam, 'days');
    const validSelisih = isNaN(diffDays) || diffDays < 0 ? 0 : diffDays;
    setSelisih(validSelisih);

    setFormData((prevData) => ({
      ...prevData,
      durasiSewa: validSelisih
    }));
  }, [formData.tanggalPeminjaman, formData.batasPeminjaman]);

  useEffect(() => {
    const fetchMobilPrice = async () => {
      if (formData.MobilId) {
        try {
          const response = await getMobilById(formData.MobilId); 
          setMobilPrice(response.harga); 
        } catch (err) {
          console.error('Error mengambil harga mobil:', err);
          setMobilPrice(0);
        }
      } else {
        setMobilPrice(0); 
      }
    };

    fetchMobilPrice();
  }, [formData.MobilId]);
  console.log(formData)
  // total biaya
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      totalBiaya: selisih * mobilPrice
    }));
  }, [selisih, mobilPrice]);

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
      await createTransaksi(formData);  
      console.log('Formulir dikirim:', formData);
      onClose(); 
    } catch (err) {
      setError('Gagal mengirim formulir');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-[400px]  p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Transaksi</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Tanggal Peminjaman:</label>
            <input
              type="date"
              name="tanggalPeminjaman"
              value={formData.tanggalPeminjaman}
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Batas Peminjaman:</label>
            <input
              type="date"
              name="batasPeminjaman"
              value={formData.batasPeminjaman}
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Durasi Sewa:</label>
            <input
              type="text"
              name="durasiSewa"
              value={formData.durasiSewa} 
              readOnly
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ClientId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="ClientId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose ClientId</option>
              {client.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>        
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">KaryawanId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="KaryawanId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose Empeloyee</option>
              {karyawan.map((item, index) => (
                <option key={index} value={item.KarywanId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>      
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">MobilId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="MobilId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose Car</option>
              {mobil.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.model}</option>
              ))}
            </select>
          </div>      
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Biaya Mobil <span className='text-xs'>/hari</span> :</label>
            <input
             type="text"
             name="hargaMobil"
             value={mobilPrice}
             className="border border-gray-300 p-2 w-full"
             readOnly      
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Total Biaya:</label>
            <input
              type="text"
              name="totalBiaya"
              value={formData.totalBiaya}
              readOnly
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
              disabled={loading}
            >
              Batal
            </button>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormTransaksi;
