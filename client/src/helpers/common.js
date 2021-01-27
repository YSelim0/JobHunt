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
    
    static createPost = this.baseURL + "post/create";
    static getPost = this.baseURL + "post/get";
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
