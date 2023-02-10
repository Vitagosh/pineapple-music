const {QueryTypes, Sequelize} = require('sequelize');
const dbConfig = require('../config/db.config');
// const db = require('../models');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

async function connectDB(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
        console.log(await sequelize.query("SHOW TABLES;"))
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    connectDB,
}