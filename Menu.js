const {sequelize, DataTypes, Model} = require('./db');

class Menu extends Model {

}

Menu.init({
	title: DataTypes.STRING,
	//title: DataTypes.ENUM('Starters', 'Desserts', 'Grill', 'Veg')
    
}, {
	sequelize,
	timestamps: false,
});


module.exports = {Menu};