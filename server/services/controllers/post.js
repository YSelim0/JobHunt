const Post = require("../../models/Post");

class PostService {
    static createPost(post) {
        return new Promise((resolve, reject) => {
            Post.create(post)
                .then(post => {
                    post.save()
                        .then(() => resolve());
                })
                .catch(() => reject());
        });
    }
}

module.exports = PostService;
