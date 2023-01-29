const express = require('express');
const BookingController = require('../controllers/booking.controller');
const router = express.Router();

router.get("/bookings", BookingController.getAll);
router.get("/bookings/:id", BookingController.getOne);
router.post("/bookings", BookingController.create);
router.put("/bookings/:id", BookingController.update);
router.delete("/bookings/:id", BookingController.delete);

module.exports = router