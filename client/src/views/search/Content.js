import { useState,useEffect } from "react";
import JobTile from "../../components/JobTile";
import QuickSearch from "../search/QuickSearch";
import "../../assets/css/views/search/content.css";
import SearchService from "../../services/search";

export default (props) => {
    const [posts, setPosts] = useState(null);

    useEffect(async () => {
        const posts = await SearchService.search(props.query, 1, 10);
        setPosts(posts.results?.map(post => <JobTile post={post} key={post._id} />));
    }, []);

    return (
        <div className="container-fluid search-content">
            <div className="main-container row justify-content-between">
                <div className="col-8 p-0">
                    {posts}
                </div>

                <div className="col-3 p-0 mt-2">
                    <QuickSearch />
                </div>
            </div>
        </div>
    )
}
