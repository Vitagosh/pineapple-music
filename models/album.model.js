import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";
import Artist from "./artist.model.js";
import Song from "./song.model.js";

const Album = sequelize.define('album', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        secondaryKey: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})


module.exports = Album

Album.hasMany(Artist, {foreignKey: 'artistId'})
Album.hasMany(Song, {foreignKey: 'songId'})
