const {sequelize, DataTypes, Model} = require('./db');
const { MenuItem } = require('./MenuItem');
const { Menu } = require('./Menu');

//Create our Association!
//Sequelize creates the new foreign key columns
MenuItem.belongsTo(Menu) //adds a foreign key on restaurant table, for the menu that belongs to
Menu.hasMany(MenuItem) 

module.exports = { MenuItem, Menu };