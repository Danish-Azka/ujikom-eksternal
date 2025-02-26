import Karyawan from "../models/karyawanModel.js";

export const createKaryawan= async (req, res) => {
    try{
        const { nama, noTelp, email, divisi} = req.body;
        const karyawan = await Karyawan.create({ nama, noTelp, email, divisi});
        res.status(201).json(karyawan)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getKaryawan = async (req, res) => {
    try{
        const karyawan = await Karyawan.findAll()
        res.status(200).json(karyawan)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getKaryawanById = async (req, res) => {
    try{
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(karyawan)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getKaryawanByDivisi = async (req, res) => {
    try{
        const { divisi } = req.params;
        const karyawan = await Karyawan.findAll({where : {divisi : divisi}});
        if (!karyawan) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(karyawan)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}



export const updateKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, noTelp, email } = req.body;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
        }
        await Karyawan.update({ nama, noTelp, email }, {
            where: { id }
        });
        const updatedKaryawan = await Karyawan.findByPk(id);
        res.status(200).json(updatedKaryawan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
        }
        await Karyawan.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Karyawan berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

