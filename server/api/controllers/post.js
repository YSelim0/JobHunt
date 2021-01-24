const app = require("express")();
const config = require("../../config/index");
const PostService = require("../../services/post");
const EmailService = require("../../services/email");
const jwt = require("jsonwebtoken");
const ApiRoutes = require("../helpers/apiRoutes");
const ash = require("express-async-handler");

const emailService = new EmailService();

app.use(ApiRoutes.postCreateURL, ash(async (req, res) => {
    const { post } = req.body;
    const createdPost = await PostService.createPost(post);
    const confirmationURL = ApiRoutes.baseURL + ApiRoutes.confirmationURL + "?token=" + jwt.sign({ postId: createdPost._id }, config.secretKey, { expiresIn: config.mailTokenLife });

    const options = {
        template: "confirmation",
        message: {
            from: `JobHunt <${config.email}>`,
            to: post.contact.email,
            subject: "Confirmation Email"
        },
        locals: {
            postTitle: createdPost.job.position,
            confirmationURL
        }
    };

    await emailService.sendEmail(options);

    res.status(201).json({
        message: "Post created and e-mail sent successfully."
    });
}));

module.exports = app;
