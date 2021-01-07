require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3001,
    databaseURL: process.env.DATABASE_URL
}
