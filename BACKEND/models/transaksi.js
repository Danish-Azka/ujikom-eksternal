import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Mobil from "./mobilModel.js";
import Client from "./clientModel.js";
import Karyawan from "./karyawanModel.js";
import Pengembalian from "./pengembalianModel.js";

const Transaksi = db.define(
    
    "Transaksi", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tanggalPeminjaman : {
        type: DataTypes.STRING,
        allowNull: false
    },
    batasPeminjaman : {
        type: DataTypes.STRING,
        allowNull: false
    },
    durasiSewa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalBiaya: {
        type: DataTypes.STRING,
        allowNull: false
    },

    },
    {
        tableName: "transaksi",
    }
);


//TRANSAKSI
Client.hasOne(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Transaksi.belongsTo(Client, {
    foreignKey: "ClientId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Mobil.hasOne(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Transaksi.belongsTo(Mobil, {
    foreignKey: "MobilId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Karyawan.hasOne(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Transaksi.belongsTo(Karyawan, {
    foreignKey: "KaryawanId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

//PENGEMBALIAN
Client.hasOne(Pengembalian, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Pengembalian.belongsTo(Client, {
    foreignKey: "ClientId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Mobil.hasOne(Pengembalian, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Pengembalian.belongsTo(Mobil, {
    foreignKey: "MobilId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Transaksi.hasOne(Pengembalian, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Pengembalian.belongsTo(Transaksi, {
    foreignKey: "TransaksiId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Karyawan.hasOne(Pengembalian, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Pengembalian.belongsTo(Karyawan, {
    foreignKey: "KaryawanId",

    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

export default Transaksi;
    