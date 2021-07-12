
/*  It sets up a connection to a SQLite database and 
    imports Sequelize types.*/ 

const {Sequelize, DataTypes, Model} = require('sequelize');

// Creates a database named 'sequelize'
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',  // what type of sql
    storage: './restaurants.sqlite' //file location for our db
});

module.exports={sequelize, DataTypes, Model};