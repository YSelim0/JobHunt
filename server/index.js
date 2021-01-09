const app = require("express")();
const http = require("http").createServer(app);
const loaders = require("./loaders/index");
const config = require("./config/index");

loaders({ expressApp: app });

app.listen(config.port);

module.exports = app;
