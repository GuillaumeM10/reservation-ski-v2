const express = require('express');
const PostController = require('../controllers/post.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.post("/posts", authMiddleware, PostController.create);
router.put("/posts/:id", authMiddleware, PostController.update);
router.delete("/posts/:id", authMiddleware, PostController.delete);

module.exports = router