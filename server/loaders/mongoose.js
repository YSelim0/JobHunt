const mongoose = require("mongoose");
const config = require("../config/index");
const MongoMemoryServer = require("mongodb-memory-server-core").default;

module.exports = async () => {
    if (config.node_env == "TEST") {
        config.databaseURL = await (new MongoMemoryServer()).getUri();
    }

    mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
