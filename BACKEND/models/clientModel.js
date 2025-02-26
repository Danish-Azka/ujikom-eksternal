import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Client = db.define("Client", {
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
    noKtp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "client",
    }
);




export default Client;
    