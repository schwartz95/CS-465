var express = require('express');
var router = express.Router();
const newsController = require('../controllers/news');

router.get('/', newsController.newsList);

module.exports = router;