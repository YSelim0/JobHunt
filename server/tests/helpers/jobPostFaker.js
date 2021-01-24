const faker = require("faker");

class JobPostFaker {
    static createFakeJobPost() {
        const post = {
            company: {
                name: faker.company.companyName(),
                email: faker.internet.email(),
                website: faker.internet.url(),
                logoURL: faker.image.business(),
                twitterUsername: faker.internet.userName(),
                linkedinURL: faker.internet.url()
            },
            job: {
                position: faker.name.jobTitle(),
                description: faker.lorem.paragraphs(2),
                location: faker.address.country(),
                type: faker.random.number({ min: 1, max: 3 }),
                tags: faker.lorem.word()
            },
            contact: {
                url: faker.internet.url(),
                email: faker.internet.email()
            }
        };
        return post;
    }
}

module.exports = JobPostFaker;
