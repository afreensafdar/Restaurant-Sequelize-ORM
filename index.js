const {sequelize, DataTypes, Model} = require('./db');
const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');


//Create our Association!
//Sequelize creates the new foreign key columns
Menu.belongsTo(Restaurant) //adds a foreign key on restaurant table, for the menu that belongs to
Restaurant.hasMany(Menu) 
 //gives us Sequelize accessor methods such as getMenus and addMenu 


// Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'}) 
// Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})  

module.exports = { Restaurant, Menu };