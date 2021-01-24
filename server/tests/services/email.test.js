const EmailService = require("../../services/email");
const faker = require("faker");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { expect } = require("chai");
const JobPostFaker = require("../helpers/jobPostFaker");

chai.use(chaiAsPromised);

const emailService = new EmailService();

const options = {
    message: {
        from: faker.internet.email(),
        to: faker.internet.email(),
        text: faker.lorem.sentences(3)
    }
};

const fakePost = JobPostFaker.createFakeJobPost();

async function sendEmail(options) {
    return (await expect(emailService.sendEmail(options)));
}

describe("Email Service", () => {
    it("Should send email", async () => {
        return (await sendEmail(options)).to.be.not.rejected;
    });

    it("Should cannot send email without parameters", async () => {
        return (await sendEmail()).to.be.rejected;
    });

    it("Should send email with confirmation template", async () => {
        const emailOptions = {
            template: "confirmation",
            locals: {
                postTitle: fakePost.job.position,
                confirmationURL: faker.internet.url()
            },
            ...options
        };

        return (await sendEmail(emailOptions)).to.be.not.rejected;
    });

    it("Should send email with publish template", async () => {
        const emailOptions = {
            template: "publish",
            locals: {
                post: fakePost,
                publishURL: faker.internet.url()
            },
            ...options
        };

        return (await sendEmail(emailOptions)).to.be.not.rejected;
    });
});
