const express = require('express');
const ShopController = require('../controllers/shop.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get("/shops", ShopController.getAll);
router.get("/shops/:id", ShopController.getOne);
router.post("/shops", authMiddleware, ShopController.create);
router.put("/shops/:id", authMiddleware, ShopController.update);
router.delete("/shops/:id", authMiddleware, ShopController.delete);

module.exports = router