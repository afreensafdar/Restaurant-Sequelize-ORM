const {sequelize, DataTypes, Model} = require('./db'); //assign three constructors from the sequelize module: Sequelize, Model & DataTypes.

/*  A Model represents a table in your database. 
It is represented by a class that extends from Sequelize class Model.*/
class Restaurant extends Model { // Creates a Restaurant Table in our database
    
	
}
// Create attributes (columns) for our model
Restaurant.init({ // init method defines the table columns and their types.
	name: DataTypes.STRING,
    location: DataTypes.STRING,
    contact_no:DataTypes.INTEGER,
    rating:DataTypes.FLOAT
}, {
	sequelize,  // What database is our table stored in
    timestamps: false, //This setting avoids a created_at column appearing.
    //modelName: 'Restaurant'
    
  // I don't want createdAt
  //createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
  //updatedAt: 'updateTimestamp'
});


module.exports = { Restaurant};