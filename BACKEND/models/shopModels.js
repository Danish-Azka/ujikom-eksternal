import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Shop = db.define(
    "Shop", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "shop",
    }

);

export default Shop;
    