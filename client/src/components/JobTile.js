import React from "react";
import "../assets/css/job-tile.css";
import moment from "moment";

class JobTile extends React.Component {
    constructor(props) {
        super(props);

        this.post = props.post;
    }

    getCreationDateStr() {
        const now = moment(new Date());
        const creationDate = moment(new Date(this.post.creationDate));
        const diff = now.diff(creationDate, "days");

        if (diff == 0)
            return "Today";
        else if (diff == 1)
            return "Yesterday";
        else if (diff <= 7)
            return `${Math.floor(diff)} days ago`;
        else if (diff <= 30)
            return `${Math.floor(diff / 7)} weeks ago`;
        else if (diff <= 365)
            return `${Math.floor(diff / 30)} months ago`;
        else
            return `${Math.floor(diff / 365)} years ago`;
    }

    render() {
        const post = this.post;
        const tags = post.job.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>);

        const jobTypes = {
            1: ["full-time", "Full Time"],
            2: ["part-time", "Part Time"],
            3: ["remote", "Remote"]
        }

        return (
            <div className="post mt-2">
                <div className="col-auto">
                    <img className="post-img" src={post.company.logoURL} alt="Logo"></img>
                </div>

                <div className="col-11 post-content">
                    <div className="row justify-content-between">
                        <h5 className="title">{post.job.position}</h5>
                        <span className={`type-badge ${jobTypes[post.job.type][0]}`}>{jobTypes[post.job.type][1]}</span>
                    </div>

                    <div className="row post-details justify-content-between">
                        <div>
                            <span>
                                <i className="fas fa-briefcase icon"></i>
                                <span className="detail">{post.company.name}</span>
                            </span>
                            <span className="ml-3">
                                <i className="fas fa-map-marker-alt icon"></i>
                                <span className="detail">{post.job.location}</span>
                            </span>
                        </div>

                        <span><h6 className="date">{this.getCreationDateStr()}</h6></span>
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
