import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";


export const createClient= async (req, res) => {
    try{
        const { nama, noTelp, noKtp} = req.body;
        const client = await Client.create({ nama, noTelp, noKtp});
        res.status(201).json(client)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getClientById = async (req, res) => {
    try{
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(client)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getClient = async (req, res) => {
    try{
        const client = await Client.findAll({
          include : [{
            model : Transaksi,
            as : 'Transaksi',
            include : [{
                model : Mobil,
                as : "Mobil"
            }]
          }
          ]
        })
        res.status(200).json(client)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, noTelp, noKtp } = req.body;
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'client tidak ditemukan' });
        }
        await client.update({ nama, noTelp, noKtp }, {
            where: { id }
        });
        const updatedClient = await Client.findByPk(id);
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'client tidak ditemukan' });
        }
        await client.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'client berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

