const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

const CommentController =  {
  getAll : async (req, res) => {
    try{
      const comments = await Comment.find()
      res.send(comments);
    } catch (error) {
      res.status(404).send({ message: error });
    }

  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        res.send(comment);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  },

  create: async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        const post = await Post.findById(comment.post)
        post.comments.push(comment._id)
        await post.save()
        res.send(comment);
    } catch (error) {
        res.status(400).send({ message: error });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByIdAndUpdate(id, req.body, {new: true})
        console.log(comment);
        res.send(comment);
    } catch (error) {
        res.status(400).send({ message: error });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByIdAndDelete(id);
        res.send(comment);
    } catch (error) {
        res.status(404).send({ message: error });
    }
  }
}

module.exports = CommentController