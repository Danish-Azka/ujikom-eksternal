import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Karyawan = db.define(
    "Karyawan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noTelp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    divisi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "karyawan",
    }
);




export default Karyawan;
    