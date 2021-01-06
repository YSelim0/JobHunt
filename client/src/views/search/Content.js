import React from "react";
import JobTile from "../../components/JobTile";
import QuickSearch from "../search/QuickSearch";
import "../../assets/css/views/search/content.css";
import jobs from "../../jobs";

class Content extends React.Component {
    render() {
        const posts = jobs.map(job => <JobTile job={job} key={job.companyName} />);

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
}

export default Content;
