const { User, Bongo, Category, Order  } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51O74PnDyudsQNOyEZIPgELCj3gGjDvFoLW5hPKjW2Lx5k7FGEQ3gkDKI7Hp5k0xpG3JzOMdXCVUMzYEItHJwFRUO00jJ9o07Uq');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      Bongos: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Bongo.find(params).populate('category');
      },
      Bongo: async (parent, { _id }) => {
        return await Bongo.findById(_id).populate('category');
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.Bongos',
            populate: 'category'
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw AuthenticationError;
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.Bongos',
            populate: 'category'
          });
  
          return user.orders.id(_id);
        }
  
        throw AuthenticationError;
      },
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        await Order.create({ Bongos: args.Bongos.map(({ _id }) => _id) });
        // eslint-disable-next-line camelcase
        const line_items = [];
  
        // eslint-disable-next-line no-restricted-syntax
        for (const Bongo of args.Bongos) {
          line_items.push({
            price_data: {
              currency: 'usd',
              Bongo_data: {
                name: Bongo.name,
                description: Bongo.description,
                images: [`${url}/images/${Bongo.image}`]
              },
              unit_amount: Bongo.price * 100,
            },
            quantity: Bongo.purchaseQuantity,
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });
  
        return { session: session.id };
      },
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      addOrder: async (parent, { Bongos }, context) => {
        if (context.user) {
          const order = new Order({ Bongos });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
  
          return order;
        }
  
        throw AuthenticationError;
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw AuthenticationError;
      },
      updateBongo: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Bongo.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw AuthenticationError;
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;