const app = require("express")();
const config = require("../../config/index");
const PostService = require("../../services/controllers/post");
const EmailService = require("../../services/controllers/email");
const jwt = require("jsonwebtoken");
const ApiRoutes = require("../helpers/apiRoutes");

const emailService = new EmailService();

app.post(ApiRoutes.postCreateURL, (req, res) => {
    let { post } = req.body;
    let receiverEmail = post.contact.email;
    let confirmationURL = ApiRoutes.baseURL + ApiRoutes.confirmationURL + "?token=";

    PostService.createPost(post)
        .then(post => {
            confirmationURL += jwt.sign({ postId: post._id }, config.secretKey, { expiresIn: config.mailTokenLife });

            const options = {
                template: "confirmation",
                message: {
                    from: `JobHunt <${config.email}>`,
                    to: receiverEmail,
                    subject: "Confirmation Email",
                },
                locals: {
                    postTitle: post.job.position,
                    confirmationURL
                }
            };

            emailService.sendEmail(options)
                .then(() => res.status(201).json({
                    message: "Post created and e-mail sent successfully."
                }))
                .catch(() => res.status(400).json({
                    message: "E-mail sending failed."
                }));
        })
        .catch(() => res.status(400).json({
            message: "Validation error."
        }));
});

module.exports = app;
