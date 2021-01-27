const { ApiService, ApiRoutes, RequestType } = require("../helpers/common"); 

class PostService {
    static async createPost(post) {
        return await ApiService.sendRequest(RequestType.POST, ApiRoutes.createPost, { post });
    }
    
    static async getPost(limit = null) {
        return await ApiService.sendRequest(RequestType.POST, ApiRoutes.getPost, { limit });
    }
}

module.exports = PostService;
