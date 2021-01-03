import React from "react";
import "../../assets/css/views/home/last_published_jobs.css";
import gitHubLogo from "../../assets/images/companies/github.png";
import envatoLogo from "../../assets/images/companies/envato.png";
import hopeLogo from "../../assets/images/companies/hope.png";
import buzcoLogo from "../../assets/images/companies/buzco.png";
import bebShaLogo from "../../assets/images/companies/bebsha.png";
import mediCoreLogo from "../../assets/images/companies/medicore.png";
import generousLogo from "../../assets/images/companies/generous.png";
import salinaLogo from "../../assets/images/companies/salina.png";
import greenSoulLogo from "../../assets/images/companies/greensoul.png";
import asthaLogo from "../../assets/images/companies/astha.png";

class LastPublishedJobs extends React.Component {
    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="top-section">
                    <h4 className="title">Last published jobs</h4>
                    <button className="btn-see-all">See All</button>
                </div>

                <div className="row posts mt-1">
                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={gitHubLogo} alt="GitHub"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Senior Frontend Developer</h5>
                                <span className="type-badge full-time">Full Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Github</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">USA</span>
                                    </span>
                                </div>

                                <span><h6 className="date">30 mins ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">Angular</span>
                                <span className="tag">CSS</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={envatoLogo} alt="Envato"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Team Lead</h5>
                                <span className="type-badge part-time">Part Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Envato</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Germany</span>
                                    </span>
                                </div>

                                <span><h6 className="date">5 hour ago</h6></span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={hopeLogo} alt="Hope"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">DevOps Engineer</h5>
                                <span className="type-badge remote">Remote</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Hope</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Turkey</span>
                                    </span>
                                </div>

                                <span><h6 className="date">18 hour ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">DevOps</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={buzcoLogo} alt="Buzco"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Jr. Full Stack Developer</h5>
                                <span className="type-badge full-time">Full Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Buzco</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Italy</span>
                                    </span>
                                </div>

                                <span><h6 className="date">1 day ago</h6></span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={bebShaLogo} alt="BebSha"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">React Native Developer</h5>
                                <span className="type-badge full-time">Full Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">BebSha</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Poland</span>
                                    </span>
                                </div>

                                <span><h6 className="date">2 hour ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">React Native</span>
                                <span className="tag">Javascript</span>
                                <span className="tag">Redux</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={mediCoreLogo} alt="MediCore"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Senior Software Engineer</h5>
                                <span className="type-badge full-time">Full Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">MediCore</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">England</span>
                                    </span>
                                </div>

                                <span><h6 className="date">2 days ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">C#</span>
                                <span className="tag">ASP.NET Core</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={generousLogo} alt="Generous"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Game Developer</h5>
                                <span className="type-badge remote">Remote</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Generous</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Spain</span>
                                    </span>
                                </div>

                                <span><h6 className="date">3 days ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">Unity</span>
                                <span className="tag">C#</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={salinaLogo} alt="Salina"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">C/C++ Developer</h5>
                                <span className="type-badge part-time">Part Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Salina</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Italy</span>
                                    </span>
                                </div>

                                <span><h6 className="date">5 days ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">C</span>
                                <span className="tag">C++</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={greenSoulLogo} alt="GreenSoul"></img>
                        </div>  

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Javascript Developer</h5>
                                <span className="type-badge full-time">Full Time</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">GreenSoul</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">Sweden</span>
                                    </span>
                                </div>

                                <span><h6 className="date">1 week ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">Javascript</span>
                                <span className="tag">React</span>
                                <span className="tag">Express</span>
                            </div>
                        </div>
                    </div>

                    <div className="post mt-2">
                        <div className="col-1">
                            <img className="post-img" src={asthaLogo} alt="Astha"></img>
                        </div>

                        <div className="col-11 post-content">
                            <div className="row justify-content-between">
                                <h5 className="title">Mobile App Developer</h5>
                                <span className="type-badge remote">Remote</span>
                            </div>

                            <div className="row post-details justify-content-between">
                                <div>
                                    <span>
                                        <i className="fas fa-briefcase icon"></i>
                                        <span className="detail">Astha</span>
                                    </span>
                                    <span className="ml-3">
                                        <i className="fas fa-map-marker-alt icon"></i>
                                        <span className="detail">USA</span>
                                    </span>
                                </div>

                                <span><h6 className="date">1 week ago</h6></span>
                            </div>

                            <div className="row">
                                <span className="tag">Flutter</span>
                                <span className="tag">Dart</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn-see-all mt-4">See All</button>
                </div>
            </div>
        )
    }
}

export default LastPublishedJobs;