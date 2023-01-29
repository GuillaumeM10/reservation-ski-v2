const Post = require("../models/post.model");
const Shop = require('../models/shop.model')

const PostController =  {
  getAll : async (req, res) => {
    try {
      // const posts = await Post.find();
      const posts = await Post.find().populate("comments").populate("bookings")
      res.send(posts);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
        // const post = await Post.findById(id);
        const post = await Post.findById(id).populate("comments").populate("bookings")
        res.send(post);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  },

  create: async (req, res) => {
    try {
        const post = await Post.create(req.body);
        const shop = await Shop.findById(req.body.shop)

        shop.posts.push(post._id)
        await shop.save()
        res.send(post);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndUpdate(id, req.body, {new: true})
        res.send(post);
    } catch (error) {
        res.status(400).send({ message: error });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        res.send(post);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  }
}

module.exports = PostController