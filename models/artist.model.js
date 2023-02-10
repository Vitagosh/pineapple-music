import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";
import Album from "./album.model.js";
import Song from "./song.model.js";


const Artist = sequelize.define('artist', {
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
        allowNull: false,
    },
})

module.exports = Artist

Artist.hasMany(Song, {foreignKey: 'songId'})
Artist.hasMany(Album, {foreignKey: 'albumId'})