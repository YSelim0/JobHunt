const Post = require("../models/post");

class SearchService {
    static async search(keyword, page = 1, limit = 10, location, type) {
        return await Post.find({
            status: 3,
            $or: [
                { "job.tags": { $regex: `.*${keyword}.*`, $options: "i" } },
                { "job.position": { $regex: `.*${keyword}.*`, $options: "i" } },
                { "job.description": { $regex: `.*${keyword}.*`, $options: "i" } },
                { "company.name": { $regex: `.*${keyword}.*`, $options: "i" } },
                { "job.location": location },
                { "job.type": type }
            ]
        }).limit(limit).skip((page - 1) * limit);
    }
}

module.exports = SearchService;
