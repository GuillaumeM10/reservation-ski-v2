const express = require('express');
const CommmentController = require('../controllers/comment.controller');
const router = express.Router();

router.get("/comments", CommmentController.getAll);
router.get("/comments/:id", CommmentController.getOne);
router.post("/comments", CommmentController.create);
router.put("/comments/:id", CommmentController.update);
router.delete("/comments/:id", CommmentController.delete);

module.exports = router