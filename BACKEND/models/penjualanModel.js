import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Penjualan = db.define(
    "Penjualan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    keuntungan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    barangTerjual: {
        type: DataTypes.STRING,
        allowNull: false
    },
    barangrusak: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kenaikanPendapatan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "penjualan",
    }

);

export default Penjualan;
    