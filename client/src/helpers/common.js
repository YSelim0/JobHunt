const axios = require("axios").default;

class ApiService {
    static async sendRequest(requestType, url, body = null) {
        if (requestType == RequestType.GET) {
            return await axios.get(url);
        }
        else if (requestType == RequestType.POST) {
            return await axios.post(url, body);
        }
    }
}

class ApiRoutes {
    static baseURL = "http://localhost:3001/";
    
    static createPostURL = this.baseURL + "post/create";
    static getPostURL = this.baseURL + "post/get";

    static searchURL = this.baseURL + "search";
}

const RequestType = {
    GET: "get",
    POST: "post"
}

module.exports = {
    ApiService,
    ApiRoutes,
    RequestType
}
