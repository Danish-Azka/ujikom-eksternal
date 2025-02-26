import Transaksi from "../models/transaksi.js";
import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Pengembalian from "../models/pengembalianModel.js";
import Karyawan from "../models/karyawanModel.js";

export const createPengembalian= async (req, res) => {
    try{
        const { tanggalPengembalian,denda,TransaksiId, MobilId, ClientId, KaryawanId} = req.body;
        const transaksi = await Pengembalian.create({ tanggalPengembalian,denda,TransaksiId, MobilId , ClientId, KaryawanId});
        res.status(201).json(transaksi)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getPengembalian = async (req, res) => {
    try{
        const pengembalian = await Pengembalian.findAll({
            include : [
                {
                model: Transaksi,
                as : 'Transaksi',
                required: true
                },{
                     model: Client,
                    as : 'Client',
                    required:true
                },
                {
                     model: Mobil,
                    as : 'Mobil',
                    required:true
                },
                {
                     model: Karyawan,
                    as : 'Karyawan',
                    required:true
                },
             
            ],
     } )
        res.status(200).json(pengembalian)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getPengembalianById = async (req, res) => {
    try{
        const { id } = req.params;
        const pengembalian = await Pengembalian.findByPk(id);
        if (!pengembalian) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(pengembalian)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updatePengembalian = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggalPengembalian,denda,TransaksiId, MobilId , ClientId, KaryawanId } = req.body;
        const pengembalian = await Pengembalian.findByPk(id);
        if (!pengembalian) {
            return res.status(404).json({ message: 'pengembalian tidak ditemukan' });
        }
        await pengembalian.update({ tanggalPengembalian,denda,TransaksiId, MobilId , ClientId, KaryawanId }, {
            where: { id }
        });
        const updatedPengembalian = await Pengembalian.findByPk(id);
        res.status(200).json(updatedPengembalian);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deletePengembalian = async (req, res) => {
    try {
        const { id } = req.params;
        const pengembalian = await Pengembalian.findByPk(id);
        if (!pengembalian) {
            return res.status(404).json({ message: 'pengembalian tidak ditemukan' });
        }
        await pengembalian.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'pengembalian berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};