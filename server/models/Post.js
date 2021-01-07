const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    company: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        logoURL: {
            type: String,
            required: true
        },
        twitterUsername: {
            type: String
        },
        linkedinURL: {
            type: String
        }
    },
    job: {
        position: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false
        }
    },
    contact: {
        url: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("Post", postSchema);
