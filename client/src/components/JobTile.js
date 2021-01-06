import React from "react";
import "../assets/css/job-tile.css";

class JobTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { job } = this.props;
        const tags = job.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>);

        const jobTypes = {
            1: ["full-time", "Full Time"],
            2: ["part-time", "Part Time"],
            3: ["remote", "Remote"]
        }

        return (
            <div className="post mt-2">
                <div className="col-auto">
                    <img className="post-img" src={job.logo} alt="Logo"></img>
                </div>

                <div className="col-11 post-content">
                    <div className="row justify-content-between">
                        <h5 className="title">{job.title}</h5>
                        <span className={`type-badge ${jobTypes[job.type][0]}`}>{jobTypes[job.type][1]}</span>
                    </div>

                    <div className="row post-details justify-content-between">
                        <div>
                            <span>
                                <i className="fas fa-briefcase icon"></i>
                                <span className="detail">{job.companyName}</span>
                            </span>
                            <span className="ml-3">
                                <i className="fas fa-map-marker-alt icon"></i>
                                <span className="detail">{job.location}</span>
                            </span>
                        </div>

                        <span><h6 className="date">{job.date}</h6></span>
                    </div>

                    <div className="row">
                        {tags}
                    </div>
                </div>
            </div>
        )
    }
}

export default JobTile;
