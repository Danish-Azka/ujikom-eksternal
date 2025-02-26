import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Shop from "./shopModels.js";

const Product = db.define(
    
    "Product", {
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
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('Sparepart Kendaraan', 'Aksesoris Kendaraan', 'Perawatan & Perlengkapan', 'Peratalatan Bengkel & Modifikasi') ,
        allowNull: true
    },
},
    {
        tableName: "product",
    }

);
Shop.hasMany(Product, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Product.belongsTo(Shop, {
    foreignKey: "ShopId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})



export default Product;
    