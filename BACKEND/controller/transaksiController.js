import Transaksi from "../models/transaksi.js";
import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Karyawan from "../models/karyawanModel.js";

export const createTransaksi= async (req, res) => {
    try{
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId} = req.body;
        const transaksi = await Transaksi.create({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId , ClientId, KaryawanId});
        res.status(201).json(transaksi)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getTransaksi = async (req, res) => {
    try{
        const transaksi = await Transaksi.findAll({
            include : [
                {
                model: Mobil,
                as : 'Mobil',
                required: true
                },{
                     model: Client,
                    as : 'Client',
                    required:true
                },{
                     model: Karyawan,
                    as : 'Karyawan',
                    required:true
                }
             
            ],
     } )
        res.status(200).json(transaksi)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getTransaksiById = async (req, res) => {
    try{
        const { id } = req.params;
        const transaksi = await Transaksi.findByPk(id);
        if (!transaksi) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(transaksi)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId } = req.body;
        const transaksi = await Transaksi.findByPk(id);
        if (!transaksi) {
            return res.status(404).json({ message: 'transaksi tidak ditemukan' });
        }
        await transaksi.update({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId }, {
            where: { id }
        });
        const updatedTransaksi = await Transaksi.findByPk(id);
        res.status(200).json(updatedTransaksi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        const transaksi = await Transaksi.findByPk(id);
        if (!transaksi) {
            return res.status(404).json({ message: 'transaksi tidak ditemukan' });
        }
        await transaksi.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'transaksi berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};