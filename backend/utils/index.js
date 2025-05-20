const crypto = require('crypto');

exports.generateShortUrl = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};