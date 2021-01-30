const Post = require("../models/post");

class PostService {
    static async createPost(post) {
        return await Post.create(post);
    }

    static async confirmPost(postId, isPublic) {
        const post = await Post.findById(postId);

        await Post.updateOne({ _id: postId }, {
            status: isPublic && post.status != 3 ? 2 : 3
        });

        return (await Post.findById(postId)).toJSON();
    }

    static async getPost(limit = null, status = 3) {
        const posts = await (await Post.find().where("status").equals(status)).reverse();
        return limit ? posts.slice(0, limit) : posts;
    }
}

module.exports = PostService;
