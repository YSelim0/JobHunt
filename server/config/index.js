require("dotenv").config();

module.exports = {
    node_env: process.env.NODE_ENV || "DEV",
    port: process.env.PORT || 3001,
    databaseURL: process.env.DATABASE_URL,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    secretKey: process.env.SECRET_KEY,
    mailTokenLife: process.env.MAIL_TOKEN_LIFE || "7d"
};
