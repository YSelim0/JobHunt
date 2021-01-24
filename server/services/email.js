const config = require("../config/index");
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

    async sendEmail(options) {
        return await this.emailer.send(options);
    }
}

module.exports = EmailService;
