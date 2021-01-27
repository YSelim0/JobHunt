const config = require("../../config/index");

class ApiRoutes {
    static baseURL = `http://localhost:${config.port}`;

    static postCreateURL = "/post/create/";
    static getPostURL = "/post/get/";

    static confirmationURL = "/email/confirmation/";
    static publihPostURL = "/email/publish/";
}

module.exports = ApiRoutes;
