const db = require('../config/connection');
const { User, Bongo, Type, Order } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Type', 'types');
    await cleanDB('Bongo', 'bongos');
    await cleanDB('User', 'users');

    const types = await Type.insertMany([
        { name: 'Beginner'},//0
        { name: 'Intermediate'},//1
        { name: 'Professional'},//2
        { name: 'Wood'},//3
        { name: 'Plastic'},//4
        { name: 'Fiberglass'},//5
        { name: 'Skin'}//6
    ]);

    console.log('types seeded');

    const bongos = await Bongo.insertMany([
        {
            name: 'Bongo (w/stick)',
            description:
                'A bongo that comes with a stick',
            image: 'BongoThatComesWithStick.png',
            quantity: 12,
            price: 40.50,
            types: [types[0]._id, types[3]._id]
        },
        {
            name: 'Children\'s Bongo',
            description:
                'Blue bongo for kids, good beginner bongo for the young ones(eggs not included.)',
            image: 'ChildrensBongos.jpg',
            quantity: 60,
            price: 10.23,
            types: [types[0]._id, types[4]._id]
        },
        {
            name: 'Classic Bongo',
            description:
                'Our classic bongo, made with the most quality materials for your bongoing needs.',
            image: 'ClassicWoodBongo.png',
            quantity: 5000,
            price: 100.07,
            types: [types[1]._id, types[3]._id]
        },
        {
            name: 'Donkey Kong Bongo',
            description:
                'DK! DONKEY KONG!',
            image: 'DonkeyKongBongo.jpg',
            quantity: 17,
            price: 100.8,
            types: [types[1]._id, types[4]._id]
        },
        {
            name: 'Electric Bongo',
            description:
                'This bongo is shockingly good, with electrifying beats that will soothe those goovecles.',
            image: 'ElectricBongo.jpg',
            quantity: 300,
            price: 45.45,
            types: [types[0]._id, types[4]._id]
        },
        {
            name: 'Expensive Bongo',
            description:
                'This is our magnum bongo, with the shell being made with premium real wood. (DISCLAIMER: MADE WITH PLASTIC)',
            image: 'ExpensiveBongo!.jpg',
            quantity: 3,
            price: 4000000,
            types: [types[2]._id, types[4]._id]
        },
        {
            name: 'Hand-Crafted Bongo',
            description:
                'Our bongo made from scratch by artisan bongoneers.',
            image: 'HandCraftedBongo.png',
            quantity: 10,
            price: 250.32,
            types: [types[2]._id, types[3]._id]
        },
        // {
        //     name: 'Handlebar Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Inflatable Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Skinned Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Traditional Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Tribal Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Two-Sided Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Catch and Release Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Wooden Top Bongo',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
        // {
        //     name: 'Yellow Bongo (w/stand)',
        //     description:
        //         '',
        //     image: '',
        //     quantity: 1,
        //     price: 0,
        //     types: []
        // },
    ]);

    console.log('bongos seeded');

    await User.create({
        username:'BongoMan',
        email:'bongoLord@gmail.com',
        password:'bongo12345',
        savedBongos: [bongos[0]._id, bongos[1]._id]
    });

    console.log('users seeded');

    process.exit();
});

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
