const request = require("supertest");
const JobPostFaker = require("../helpers/jobPostFaker");
const app = require("../../index");
const ApiRoutes = require("../../api/helpers/apiRoutes");

describe("Post Controller", async () => {
    it("Should create a new job post", done => {
        // Arrange
        let fakePost = JobPostFaker.createFakeJobPost();

        // Act & Assert
        request(app)
            .post(ApiRoutes.postCreateURL)
            .send({ post: fakePost })
            .expect(201, done);
    });

    it("Should return validation error", done => {
        // Arrange
        let fakePost = JobPostFaker.createFakeJobPost();

        // Act
        delete fakePost.company.name;

        // Assert
        request(app)
            .post(ApiRoutes.postCreateURL)
            .send({ post: fakePost })
            .expect(400, done);
    });
});
