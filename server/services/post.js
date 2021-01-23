const Post = require("../models/post");

class PostService {
    static async createPost(post) {
        return await Post.create(post);
    }

    static async confirmPost(postId, isPublic) {
        let post = await Post.findById(postId);

        await Post.updateOne({ _id: postId }, {
            status: isPublic && post.status != 3 ? 2 : 3
        });

        return await Post.findById(postId);
    }
}

module.exports = PostService;
