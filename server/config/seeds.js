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
        {
            name: 'Handlebar Bongo',
            description:
                'A bongo so powerful that you need to brace yourself whenever you unleash its rhythym.',
            image: 'HandlebarBongo.jpg',
            quantity: 466,
            price: 156.22,
            types: [types[1]._id, types[3]._id]
        },
        {
            name: 'The Executive \"Inflatable Bongos\"',
            description:
                'Perhaps the most difficult bongo to master. Not for the faint of rhythym.',
            image: 'inflatableBongo.jpg',
            quantity: 20,
            price: 5.00,
            types: [types[2]._id, types[4]._id]
        },
        {
            name: 'Skinned Bongo',
            description:
                'The bongo with the skin tops and a wooden shell. You can hear a beat when it\'s not being played...',
            image: 'SkinnedBongo.png',
            quantity: 666,
            price: 0.01,
            types: [types[1]._id, types[3]._id, types[6]._id]
        },
        {
            name: 'Traditional Bongo',
            description:
                'A traditional bongo, checks all the right boxes. (child not affiliated with Congo Bongo)',
            image: 'TraditionalBongo.jpg',
            quantity: 78,
            price: 76.93,
            types: [types[0]._id, types[3]._id]
        },
        {
            name: 'Tribal Bongo',
            description:
                'Authentic tribal bongos, rich with history that can only be accessed by the most skilled bongophiles.',
            image: 'TribalBongo.jpg',
            quantity: 34,
            price: 5000.78,
            types: [types[2]._id, types[3]._id]
        },
        {
            name: 'Two-Sided Bongo',
            description:
                'The bongo inside you has two sides: one side, and the other side.',
            image: 'TwoSidedBongo.jpg',
            quantity: 67,
            price: 500.34,
            types: [types[1]._id, types[3]._id]
        },
        {
            name: 'Catch and Release Bongo',
            description:
                'Very lively bongos. Note: These are not instruments, DO NOT use them as drums.',
            image: 'WildCaughtBongo.png',
            quantity: 500,
            price: 91320.34,
            types: [types[6]._id]
        },
        {
            name: 'Wooden Top Bongo',
            description:
                'We are pretty sure this is a bongo, can\'t be too hard to use, right?',
            image: 'WoodenTopBongo.jpg',
            quantity: 45,
            price: 21.21,
            types: [types[0]._id, types[3]._id]
        },
        {
            name: 'Yellow Bongo (w/stand)',
            description:
                'This premium bongo comes with its very own stand! Very groovy style.',
            image: 'YellowBongoWithStand.png',
            quantity: 343,
            price: 654.01,
            types: [types[2]._id, types[3]._id]
        },
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