const jwt = require("jsonwebtoken");
const config = require("../../config/index");

function verifyToken(req, res, next) {
    const { token } = req.query;
    const payload = jwt.decode(token, config.secretKey);

    if (!payload) {
        return res.status(400).json({
            message: "Invalid token."
        });
    }
    req.payload = payload;
    next();
}

module.exports = { verifyToken };
