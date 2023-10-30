// const db = require('../config/connection');
// const { User, Bongo, Type, Order } = require('../models');

// 
// const userSeedData = [
//     {
//         username: 'john_doe',
//         email: 'john.doe@example.com',
//         password: 'password1234'
//     },
//     {
//         username: 'jane_smith',
//         email: 'jane.smith@example.com',
//         password: 'securepassword'
//     }
//     // Add more users as needed...
// ];

// const typeSeedData = [
//     {
//         name: 'Beginner'
//     },
//     {
//         name: 'Intermediate'
//     },
//     {
//         name: 'Professional'
//     }
// ];

// const bongoSeedData = [
//     {
//         name: 'Basic Congo',
//         description: 'Perfect for beginners',
//         image: '/path/to/basic-congo-image.jpg',  // Replace with actual path or URL
//         quantity: 10,
//         price: 100.00,
//         types: []  // Will populate with Type IDs
//     },
//     {
//         name: 'Pro Congo',
//         description: 'For the professional player',
//         image: '/path/to/pro-congo-image.jpg',
//         quantity: 5,
//         price: 300.00,
//         types: []
//     }
//     // Add more bongos as needed...
// ];

// const orderSeedData = [
//     {
//         purchaseDate: new Date(),
//         products: []  // Will populate with Bongo IDs
//     }
//     // Add more orders as needed...
// ];

// // Seed the database with the sample data
// db.once('open', async () => {
//     try {
//         await User.deleteMany({});
//         await Type.deleteMany({});
//         await Bongo.deleteMany({});
//         await Order.deleteMany({});

//         const users = await User.insertMany(userSeedData);
//         const types = await Type.insertMany(typeSeedData);
        
//         for (let bongo of bongoSeedData) {
//             const randomTypeIndex = Math.floor(Math.random() * types.length);
//             bongo.types.push(types[randomTypeIndex]._id);
//         }

//         const bongos = await Bongo.insertMany(bongoSeedData);

//         for (let order of orderSeedData) {
//             const randomBongoIndex = Math.floor(Math.random() * bongos.length);
//             order.products.push(bongos[randomBongoIndex]._id);
//         }

//         await Order.insertMany(orderSeedData);

//         console.log('All data seeded successfully!');
//         process.exit(0);
//     } catch (err) {
//         console.error('Error seeding data:', err);
//         process.exit(1);
//     }
// });
