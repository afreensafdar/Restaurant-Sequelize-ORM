const {sequelize} = require("./db"); //import from db.js file
//const {Restaurant} = require("./Restaurant") //import from Restaurant.js file
const {Restaurant, Menu} = require("./index") // pull them from index, where we make our association

describe('Restaurant Database', () => { //describe 

	beforeAll(async () => {

		/*  the 'sync' method will create tables based on the model class
        by setting 'force:true' the tables are recreated each time the 
        test suite is run.
		*/
		await sequelize.sync({force: true}) // This creates the table, dropping it first if it already existed.
		/**
		* sequelize.sync() performs a SQL query to the database and creates tables (based on our class models).
		* { force: true } parameter forces the tables to be recreated each time the test suite is run 
		(this ensures the expect line passes as there will only be a single row in the database).
		*/
		
	})
      //test for restaurant name 
	test('can create a restaurant name', async() => {
		const testRestaurant = await Restaurant.create({name : 'Bombay Chopstick'}) //.create() to create table and column name 
		expect(testRestaurant.name).toBe('Bombay Chopstick')
		expect(testRestaurant.id).toBe(1);
	})
	//test for location
	/**
	 * To create a new instance of a Restaurant we call a static method on the class called create. 
	 * We pass in an object with the field name, and the values we want to store. 
	 */
	test('can have a location', async () => {
		const testRestaurant = await Restaurant.create({name: 'Bombay Chopstick', location : "Chicago"});
		expect(testRestaurant.location).toBe('Chicago');

		const Restaurants = await Restaurant.findAll()

	})
	
	//test for contact_no.
    
    test('can have a contact.no', async () => {
		const testRestaurant = await Restaurant.create({name: 'Bombay Chopstick', location : "Chicago",contact_no:765346899});
		expect(testRestaurant.contact_no).toBe(765346899);
	})

	//test for rating 
	test('can have a rating', async () => {
		const testRestaurant = await Restaurant.create({name: 'Bombay Chopstick', location : "Chicago",contact_no:765346899,rating:4.5});
	//	console.log("Restaurant: ", testRestaurant)
		expect(testRestaurant.rating).toBe(4.5);
	})

	//Association test -To check if Restaurants and Menu are connected
	test('Restaurants can have many menus', async () => {
        const restaurant = await Restaurant.create({name: 'Pita House',location:'Schaumburg',contact_no:345678965,rating:4})
		const appetizers = await Menu.create({title: 'appetizers'});
		const wraps=await Menu.create({title: 'wraps'});
		const drinks=await Menu.create({title:'drinks'});
		const desserts = await Menu.create({title:'desserts'});
		
		await restaurant.addMenu(appetizers);
		await restaurant.addMenu(wraps);
		await restaurant.addMenu(drinks);
		await restaurant.addMenu(desserts);
		
		
		const menus = await restaurant.getMenus();
		expect(menus.length).toBe(3)
		expect(menus[0] instanceof Menu).toBeTruthy
        expect(menus[0].title).toBe('appetizers');
	})

})

//asyn -await is the time to wait to create table.