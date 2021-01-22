const config = require("../../config/index");

class ApiRoutes {
    static baseURL = config.serverURL;

    static postCreateURL = "/post/create/";

    static confirmationURL = "/email/confirmation/";
    static publihPostURL = "/email/publish/";
}

module.exports = ApiRoutes;
