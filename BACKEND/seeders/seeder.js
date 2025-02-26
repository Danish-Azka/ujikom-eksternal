import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";
import Karyawan from "../models/karyawanModel.js";
import Pengembalian from "../models/pengembalianModel.js";

const createSeeder = async () => {
    const karyawan = await Karyawan.create({
        nama: "prima",
        noTelp: "08988776655",
        email: "nezaduOnta@gmail.com",
        divisi : "bengkel"
    });
    // Membuat client baru
    const client = await Client.create({
        nama: "nezadu",
        noTelp: "088988988900",
        noKtp: "123456789",
        // TransaksiId : transaksi.dataValues.id
    });
    // Membuat mobil baru
    const mobil = await Mobil.create({
        merk: "Lamborghini",
        model: "aventador",
        platNomor: "B 2410 OCT",
        kapasitasPenumpang: 2,
        ClientId: client.dataValues.id
    });
    
    // Membuat transaksi baru
    const transaksi = await Transaksi.create({
        tanggalPeminjaman: "2024-10-24",
        batasPeminjaman: "2024-10-26",
        durasiSewa: "2 Hari",
        totalBiaya: "12.000.000",
        KaryawanId: karyawan.dataValues.id,
        ClientId: client.dataValues.id,
        MobilId: mobil.dataValues.id,
        
    });
    const pengembalian = await Pengembalian.create({
        ClientId: client.dataValues.id,
        MobilId: mobil.dataValues.id,
        tanggalPengembalian: "2024-11-24",
        KaryawanId: karyawan.dataValues.id,
        MobilId : mobil.dataValues.id,
        ClientlId : client.dataValues.id,
        TransaksiId : transaksi.dataValues.id
    });
}        
const data = await createSeeder()
console.log(data)

