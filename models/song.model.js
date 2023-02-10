import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";
import Artist from "./artist.model.js";


const Song = sequelize.define('song', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    audio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    
})

module.exports = Song

Song.hasMany(Artist, {foreignKey: 'artistId'})




