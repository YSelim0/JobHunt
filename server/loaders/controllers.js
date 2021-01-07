const path = require("path");
const fs = require("fs");

module.exports = (app) => {
    const controllersPath = path.join(__dirname, "../api/controllers/");
    
    fs.readdirSync(controllersPath).forEach(controller => {
        app.use(require(controllersPath + controller));
    });
}
