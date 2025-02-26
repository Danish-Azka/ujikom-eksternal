import Buyer from "../models/buyer.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";


export const createBuyer= async (req, res) => {
    try{
        const { nama, email, password,gambar,noTelp, saldo} = req.body;
        const buyer = await Buyer.create({ nama, email, password,gambar,noTelp, saldo});
        res.status(201).json(buyer)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getBuyerById = async (req, res) => {
    try{
        const { id } = req.params;
        const buyer = await Buyer.findByPk(id);
        if (!buyer) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(buyer)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getBuyer = async (req, res) => {
    try{
        const buyer = await Buyer.findAll()
        res.status(200).json(buyer)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const updateBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, email, password,gambar,noTelp, saldo } = req.body;
        const buyer = await Buyer.findByPk(id);
        if (!buyer) {
            return res.status(404).json({ message: 'buyer tidak ditemukan' });
        }
        await buyer.update({ nama, email, password,gambar,noTelp, saldo }, {
            where: { id }
        });
        const updatedBuyer = await Buyer.findByPk(id);
        res.status(200).json(updatedBuyer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const buyer = await Buyer.findByPk(id);
        if (!buyer) {
            return res.status(404).json({ message: 'buyer tidak ditemukan' });
        }
        await buyer.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'buyer berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

