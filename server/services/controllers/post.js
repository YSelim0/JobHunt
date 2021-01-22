const Post = require("../../models/post");

class PostService {
    static createPost(post) {
        return new Promise((resolve, reject) => {
            Post.create(post)
                .then(post => resolve(post))
                .catch(error => reject(error));
        });
    }

    static confirmPost(postId, isPublic) {
        return new Promise(async (resolve, reject) => {
            let postStatus = (await Post.findById(postId)).status;

            Post.updateOne({ _id: postId }, {
                status: isPublic && postStatus != 3 ? 2 : 3 
            })
                .then(() => resolve(Post.findById(postId)))
                .catch(error => reject(error));
        });
    }
}

module.exports = PostService;
