const app = require("express")();
const EmailService = require("../../services/email");
const jwt = require("jsonwebtoken");
const config = require("../../config/index");
const PostService = require("../../services/post");
const { verifyToken } = require("../helpers/common");
const ApiRoutes = require("../helpers/apiRoutes");
const ash = require("express-async-handler");

const emailService = new EmailService();

app.use(ApiRoutes.confirmationURL, verifyToken, ash(async (req, res) => {
    const { payload } = req;
    const post = await PostService.confirmPost(payload.postId, true);
    const publishURL = ApiRoutes.baseURL + ApiRoutes.publihPostURL + "?token=" + jwt.sign({ postId: post._id }, config.secretKey, { expiresIn: config.mailTokenLife });

    const { company, job, contact } = post;

    const options = {
        template: "publish",
        message: {
            from: `JobHunt <${config.email}>`,
            to: config.email,
            subject: "Confirmation Email"
        },
        locals: {
            post: { company, job, contact },
            publishURL
        }
    };

    await emailService.sendEmail(options);

    res.status(200).json({
        message: "Post confirmed successfully."
    });
}));

app.use(ApiRoutes.publihPostURL, verifyToken, ash(async (req, res) => {
    const { payload } = req;

    await PostService.confirmPost(payload.postId, false);

    res.status(200).json({
        message: "Post published successfully."
    });
}));

module.exports = app;
