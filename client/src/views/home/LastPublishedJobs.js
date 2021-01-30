import { useState, useEffect } from "react";
import JobTile from "../../components/JobTile";
import "../../assets/css/views/home/last_published_jobs.css";
import PostService from "../../services/post";
import { Link } from "react-router-dom";

export default () => {
    const [posts, setPosts] = useState(null);

    useEffect(async () => {
        const result = await PostService.getPost(10);
        setPosts(result.posts.map(post => <JobTile post={post} key={post._id} />));
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div className="top-section">
                <h4 className="title">Last published jobs</h4>
                <Link to="search" className="btn-see-all">See All</Link>
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
