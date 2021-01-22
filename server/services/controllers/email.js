const config = require("../../config/index");
const Email = require("email-templates");

class EmailService {
    constructor() {
        this.emailer = new Email({
            preview: false,
            send: true,
            transport: {
                service: "gmail",
                auth: {
                    user: config.email,
                    pass: config.password
                }
            }
        });
    }

    sendEmail(options) {
        return new Promise((resolve, reject) => {
            this.emailer.send(options)
                .then(payload => resolve(payload))
                .catch(error => reject(error));
        });
    }
}

module.exports = EmailService;