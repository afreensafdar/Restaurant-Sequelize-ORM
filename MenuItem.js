const {sequelize, DataTypes, Model} = require('./db');

class MenuItem extends Model {
	
}

MenuItem.init({
    name: DataTypes.STRING,
    price:DataTypes.FLOAT
    
}, {
	sequelize,
	timestamps: false,
});


module.exports = {MenuItem};