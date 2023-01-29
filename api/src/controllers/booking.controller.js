const Booking = require("../models/booking.model");
const Post = require("../models/post.model");
const Shop = require('../models/shop.model');

const BookingController =  {
  getAll : async (req, res) => {
    try{
      const bookings = await Booking.find()
      res.send(bookings);
    } catch (error) {
      res.status(404).send({ message: error });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findById(id);
        res.send(booking);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  },

  create: async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        const post = await Post.findById(booking.post);
        const shop = await Shop.findById(post.shop)

        booking.shop = post.shop

        post.bookings.push(booking._id);
        post.isAvailable = false;

        shop.bookings.push(booking._id)
        
        await post.save()
        await shop.save()
        res.send(booking);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByIdAndUpdate(id, req.body, {new: true})
        res.send(booking);
    } catch (error) {
        res.status(400).send({ message: error });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByIdAndDelete(id);
        res.send(booking);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  }
}

module.exports = BookingController