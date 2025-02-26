import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Pengembalian = db.define(
    "Pengembalian", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tanggalPengembalian: {
        type: DataTypes.STRING,
        allowNull: false
    },
    denda: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    },
    {
        tableName: "pengembalian",
    }
);




export default Pengembalian;
    