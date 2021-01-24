const PostService = require("../../services/post");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { assert, expect } = require("chai");
const JobPostFaker = require("../helpers/jobPostFaker");
require("../../loaders/mongoose")();

chai.use(chaiAsPromised);

async function createRealPost() {
    const fakePost = JobPostFaker.createFakeJobPost();
    return await PostService.createPost(fakePost);
}

describe("Post Service", () => {
    describe("createPost function", () => {
        it("Should create a post", async () => {
            const fakePost = JobPostFaker.createFakeJobPost();

            return await (await expect(PostService.createPost(fakePost))).to.be.not.rejected;
        });

        it("Should cannot create post", async () => {
            const fakePost = JobPostFaker.createFakeJobPost();

            delete fakePost.company;

            return await (await expect(PostService.createPost(fakePost))).to.be.rejected;
        });
    });

    describe("confirmPost function", () => {
        it("Should return confirmed post", async () => {
            const post = await createRealPost();

            return await (await expect(PostService.confirmPost(post._id, true))).to.be.not.rejected;
        });

        it("Should set post id as two", async () => {
            const post = await createRealPost();

            const confirmedPost = await PostService.confirmPost(post._id, true);

            assert(confirmedPost.status == 2);
        });

        it("Should set post id as three", async () => {
            const post = await createRealPost();

            const confirmedPost = await PostService.confirmPost(post._id, false);

            assert(confirmedPost.status == 3);
        });

        it("Should not set post id as three when called again with true", async () => {
            const post = await createRealPost();

            const confirmedPost = await PostService.confirmPost(post._id, true);
            const confirmedPost2 = await PostService.confirmPost(confirmedPost._id, true);

            assert(confirmedPost2.status == 2);
        });
    });
});
