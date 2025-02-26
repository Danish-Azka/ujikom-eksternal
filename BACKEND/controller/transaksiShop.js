import TransaksiShop from "../models/transaksiShop.js";

export const createTransaction = async (req, res) => {
    try {
      const { buyerId, items, totalHarga } = req.body;
      const newTransaction = await TransaksiShop.create({
        buyerId,
        items,
        totalHarga,
        shippingCost: 100000,
      });
  
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getTransactions = async (req, res) => {
    try {
      const transactions = await TransaksiShop.findAll();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getTransactionById = async (req, res) => {
    try {
      const { id } = req.params;
      const transaction = await TransaksiShop.findByPk(id);
      if (!transaction) return res.status(404).json({ message: "Transaksi tidak ditemukan" });
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };