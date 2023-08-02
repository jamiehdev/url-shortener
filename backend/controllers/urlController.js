const ShortUrl = require('../models/shortUrl');
const { generateShortUrl } = require('../utils');

exports.shortenURL = async (req, res) => {
    let shortUrl = generateShortUrl(7);
    const newUrl = new ShortUrl({ full: req.body.url, short: shortUrl });

    try {
        await newUrl.save();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to shorten the URL' });
        return;
    }

    res.json({ originalUrl: req.body.url, shortUrl: 'http://localhost:5000/' + shortUrl });
};

exports.redirectToURL = async (req, res) => {
    const shortUrl = await ShortUrl.findOneAndUpdate(
        { short: req.params.shortUrl },
        { $inc: { clicks: 1 } },
        { new: true }
    );

    if (shortUrl == null) return res.sendStatus(404);

    console.log("test");

    res.redirect(shortUrl.full);
};