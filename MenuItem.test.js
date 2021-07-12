const {sequelize} = require("./db");

const {MenuItem} = require("./MenuItem")

describe('Menu Item Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a name', async() => {
		const testMenuItem = await MenuItem.create({name : 'Dynamite Shrimp'})
		expect(testMenuItem.name).toBe('Dynamite Shrimp')
    })
    
    test('can create a price', async() => {
		const testMenuItem = await MenuItem.create({price :8.99})
		expect(testMenuItem.price).toBe(8.99)
	})

    

})