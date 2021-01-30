const { ApiService, ApiRoutes, RequestType } = require("../helpers/common"); 

class PostService {
    static async createPost(post) {
        const result = await ApiService.sendRequest(RequestType.POST, ApiRoutes.createPostURL, { post });
        return result.data;
    }
    
    static async getPost(limit = null) {
        const result = await ApiService.sendRequest(RequestType.POST, ApiRoutes.getPostURL, { limit });
        return result.data;
    }
}

module.exports = PostService;
