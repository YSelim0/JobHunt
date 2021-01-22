const app = require("express")();
const EmailService = require("../../services/controllers/email");
const jwt = require("jsonwebtoken");
const config = require("../../config/index");
const PostService = require("../../services/controllers/post");
const { verifyToken } = require("../helpers/common");
const ApiRoutes = require("../helpers/apiRoutes");

const emailService = new EmailService();

app.use(ApiRoutes.confirmationURL, verifyToken, (req, res) => {
    let { payload } = req;
    let publishURL = ApiRoutes.baseURL + ApiRoutes.publihPostURL + "?token=";

    PostService.confirmPost(payload.postId, true)
        .then(post => {
            post = post.toJSON();
            publishURL += jwt.sign({ postId: post._id }, config.secretKey, { expiresIn: config.mailTokenLife });

            delete post._id;
            delete post.status;

            const options = {
                template: "publish",
                message: {
                    from: `JobHunt <${config.email}>`,
                    to: config.email,
                    subject: "Confirmation Email"
                },
                locals: {
                    post,
                    publishURL
                }
            };

            emailService.sendEmail(options)
                .then(() => res.status(200).json({
                    message: "Post confirmed successfully."
                }))
                .catch(() => res.status(400).json({
                    message: "E-mail sending failed."
                }));
        })  
        .catch(() => res.status(400).json({
            message: "There was an error confirming post."
        }));
});

app.use(ApiRoutes.publihPostURL, verifyToken, (req, res) => {
    let { payload } = req;

    PostService.confirmPost(payload.postId, false)
        .then(() => res.status(200).json({
            message: "Post published successfully."
        }))  
        .catch(() => res.status(400).json({
            message: "There was an error confirming post."
        }));
});

module.exports = app;
