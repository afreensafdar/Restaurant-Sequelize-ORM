const {sequelize} = require("./db");

//const {Menu} = require("./Menu")
const {MenuItem ,Menu} =require ("./item")

describe('Menu Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a title', async() => {
		const testMenu = await Menu.create({title : 'Appetizer'})
		expect(testMenu.title).toBe('Appetizer')
	})

	
	test('Menu can have many Menus Items', async () => {
        const menus = await Menu.create({title: 'Desserts'});
		const cremeBrule = await MenuItem.create({name: 'Creme Brule',price:10.99});
		const tiramisu=await MenuItem.create({name: 'Tiramisu',price:15.99});
		const mangoTrifle= await MenuItem.create({name: 'Mango shots',price:5.99});
		await menus.addMenuItems(cremeBrule);
		await menus.addMenuItems(tiramisu);
		await menus.addMenuItems(mangoTrifle);
		
		const menuItems = await menus.getMenuItems();
		expect(menuItems.length).toBe(3)
		expect(menuItems[0] instanceof MenuItem).toBeTruthy
       // expect(menus[0].title).toBe('set 1');
	})

})