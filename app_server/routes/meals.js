var express = require('express');
var router = express.Router();
const mealsController = require('../controllers/meals');

router.get('/', mealsController.mealsList);

module.exports = router;