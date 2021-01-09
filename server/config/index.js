require("dotenv").config();

module.exports = {
    test: process.env.TEST || false,
    port: process.env.PORT || 3001,
    databaseURL: process.env.DATABASE_URL
}
