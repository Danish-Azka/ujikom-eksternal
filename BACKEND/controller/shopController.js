import Shop from "../models/shopModels.js";

export const createShop= async (req, res) => {
    try{
        const {email, nama , password, gambar } = req.body;
        const shop = await Shop.create({email, nama , password, gambar });
        res.status(201).json(shop)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getShop = async (req, res) => {
    try{
        const shop = await Shop.findAll()
        res.status(200).json(shop)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getShopById = async (req, res) => {
    try{
        const { id } = req.params;
        const shop = await Shop.findByPk(id);
        if (!shop) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(shop)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateShop = async (req, res) => {
    try {
        const { id } = req.params;
        const {email, nama , password, gambar} = req.body;
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Shop tidak ditemukan' });
        }
        await Shop.update({email, nama , password, gambar}, {
            where: { id }
        });
        const updatedShop = await Shop.findByPk(id);
        res.status(200).json(updatedShop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteShop = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Shop tidak ditemukan' });
        }
        await Shop.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Shop berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

