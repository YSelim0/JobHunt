const body_parser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
    app.use(cors());
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({ extended: false }));

    return app;
}