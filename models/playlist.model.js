import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";
import Song from "./song.model.js";

const Playlist = sequelize.define('playlist', {
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

module.exports = Playlist

Playlist.hasMany(Song, {foreignKey: 'songId'})