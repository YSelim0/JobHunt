const mongoose = require("mongoose");
const config = require("../config/index");

module.exports = () => {
    mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
