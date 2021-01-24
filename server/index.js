const app = require("express")();
const http = require("http").createServer(app);
const loaders = require("./loaders/index");
const config = require("./config/index");

loaders({ expressApp: app });

app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});

http.listen(config.port);

module.exports = app;
