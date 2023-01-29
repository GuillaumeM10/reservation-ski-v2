const Shop = require("../models/shop.model");

const ShopController =  {
  getAll : async (req, res) => {
    try {
      // const shops = await Shop.find();
      const shops = await Shop.find().populate("posts").populate('bookings')
      res.send(shops);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
        // const shop = await Shop.findById(id);
        const shop = await Shop.findById(id).populate("posts").populate('bookings')
        res.send(shop);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  },

  create: async (req, res) => {
    try {
        const shop = await Shop.create(req.body);
        res.send(shop);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
        const shop = await Shop.findByIdAndUpdate(id, req.body, {new: true})
        res.send(shop);
    } catch (error) {
        res.status(400).send({ message: error });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
        const shop = await Shop.findByIdAndDelete(id);
        res.send(shop);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  }
}

module.exports = ShopController