import Product from "../models/productModel.js";
import Shop from "../models/shopModels.js";

export const createProduct= async (req, res) => {
    try{
        const {nama, harga, gambar, deskripsi, category,ShopId } = req.body;
        const product = await Product.create({nama, harga, gambar, deskripsi, category,ShopId });
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getProduct = async (req, res) => {
    try{
        const product = await Product.findAll({
          include: [

              {
                  model: Shop,
                  as : 'Shop',
                  required: true
                }
                
            ]
            })
        res.status(200).json(product)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(product)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getProductByShopId = async (req, res) => {
    try {
        const { ShopId } = req.params;
        const products = await Product.findAll({
            where: { ShopId: ShopId }
        });

        if (products.length === 0) {
            return res.status(404).json({ message: 'Tidak ada produk untuk ShopId ini' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {nama, harga, gambar, deskripsi, category,ShopId} = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product tidak ditemukan' });
        }
        await Product.update({nama, harga, gambar, deskripsi, category,ShopId}, {
            where: { id }
        });
        const updatedProduct = await Product.findByPk(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product tidak ditemukan' });
        }
        await Product.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Product berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

