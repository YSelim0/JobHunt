const { ApiService, ApiRoutes, RequestType } = require("../helpers/common"); 

class PostService {
    static async createPost(post) {
        return await ApiService.sendRequest(RequestType.POST, ApiRoutes.createPost, { post });
    }
}

module.exports = PostService;
