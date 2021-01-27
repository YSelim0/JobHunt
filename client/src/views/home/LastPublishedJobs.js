import React from "react";
import JobTile from "../../components/JobTile";
import "../../assets/css/views/home/last_published_jobs.css";
import PostService from "../../services/post";

class LastPublishedJobs extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const result = await PostService.getPost(10);
        this.setState(async state => state.posts = result.data.posts);
    }

    render() {
        const posts = this.state.posts.map(post => <JobTile post={post} key={post._id} />);

        return (
            <div className="container mt-5 mb-5">
                <div className="top-section">
                    <h4 className="title">Last published jobs</h4>
                    <button className="btn-see-all">See All</button>
                </div>

                <div className="row posts mt-1">
                    {posts}
                </div>

                <div className="row justify-content-center">
                    <button className="btn-see-all mt-4">See All</button>
                </div>
            </div>
        )
    }
}

export default LastPublishedJobs;