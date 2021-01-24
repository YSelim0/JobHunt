const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");
const controllerLoader = require("./controllers");

module.exports = ({ expressApp }) => {
    expressLoader(expressApp);
    controllerLoader(expressApp);
    mongooseLoader();
};
