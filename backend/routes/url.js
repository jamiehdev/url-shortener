const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/shorten', urlController.shortenURL);
router.get('/:shortUrl', urlController.redirectToURL);

module.exports = router;