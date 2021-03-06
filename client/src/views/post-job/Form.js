import { useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../../assets/css/views/post-job/form.css";
import PostService from "../../services/post";
import countryList from "country-list";
import swal from "sweetalert";

export default () => {
    const [quill, setQuill] = useState(null);
    const [post, setPost] = useState({
        company: {
            name: "",
            email: "",
            website: "",
            logoURL: "",
            linkedinURL: "",
            twitterUsername: ""
        },
        job: {
            position: "",
            description: "",
            location: "Pick a country",
            type: "Full time",
            tags: []
        },
        contact: {
            url: "",
            email: ""
        }
    });
    
    useEffect(() => {
        const toolbarOptions = [
            [{ "size": [] }],
            [ "bold", "italic", "underline", "strike" ],
            [{ "color": [] }, { "background": [] }],
            [{ "align": [] }, { "align": ["center"] }, { "align": ["right"] }, { "align": ["justify"] }],
            [{ "list": "ordered" }, { "list": "bullet"}, { "list": "check"}],
            [{ "indent": "-1" }, { "indent": "+1" }],
            [ "link", "video" ],
            [ "blockquote", "code-block" ],
            [ "clean" ]
        ];

        const quill = new Quill("#post-description", {
            modules: {
                toolbar: toolbarOptions
            },
            theme: "snow"
        });
        setQuill(quill);
    }, []);

    function handleChanges(e, parent, key) {
        let { value, innerText } = e.target;

        post[parent][key] = key != "tags" ? value || innerText : value.split(",");
        setPost(post);
    }
    
    async function submitForm() {
        post.job.description = this.quill.root.innerHTML;
        setPost(post);

        await PostService.createPost(post)
            .then(() => swal({
                title: "SUCCESSFULL",
                text: "Your post submitted successfully.",
                icon: "success"
            }))
            .catch(() => swal({
                title: "ERROR",
                text: "Check the information you entered and try again.",
                icon: "error"
            }));
    }
    
    function listCountryItems() {
        return countryList.getNames().map(countryName => {
            return <a className="dropdown-item" onClick={e => handleChanges(e, "job", "location")}>{countryName}</a>;
        });
    }

    return (
        <div className="container">
            <div className="container-fluid form">
                <h3 className="title">Company details</h3>
                
                <div className="input-area">
                    <label className="subtitle">Company name</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "name")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">E-mail address</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "email")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">Website</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "website")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">Logo URL</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "logoURL")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">Twitter username (optional)</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "twitterUsername")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">Linkedin URL (optional)</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "company", "linkedinURL")} aria-label="Large"></input>
                </div>

                <h3 className="title mt-5">Job details</h3>
                
                <div className="input-area mt-4">
                    <label className="subtitle">Position</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "job", "position")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">Post description</label>
                    <div id="post-description"></div>
                </div>

                <div className="input-area">
                    <label className="subtitle">Location</label>
                    <div className="dropdown">
                        <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>{ post.job.location }</span>
                            <i className="fas fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu mt-1 country-dropdown" aria-labelledby="dropdownMenuButton">
                            {listCountryItems()}
                        </div>
                    </div>
                </div>

                <div className="input-area">
                    <label className="subtitle">Job type</label>
                    <div className="dropdown">
                        <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>{ post.job.type }</span>
                            <i className="fas fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" onClick={e => handleChanges(e, "job", "type")}>Full time</a>
                            <a className="dropdown-item" onClick={e => handleChanges(e, "job", "type")}>Part time</a>
                            <a className="dropdown-item" onClick={e => handleChanges(e, "job", "type")}>Remote</a>
                        </div>
                    </div>
                </div>

                <div className="input-area">
                    <label className="subtitle">Tags</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "job", "tags")} aria-label="Large"></input>
                    <div class="alert alert-primary mt-3" role="alert">
                        Write the tags separated by commas. Example: js, express
                    </div>
                </div>

                <h3 className="title mt-5">Contact information</h3>
                
                <div className="input-area mt-4">
                    <label className="subtitle">URL</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "contact", "url")} aria-label="Large"></input>
                </div>

                <div className="input-area">
                    <label className="subtitle">E-mail</label>
                    <input type="text" className="form-control" onChange={e => handleChanges(e, "contact", "email")} aria-label="Large"></input>
                </div>

                <div class="alert alert-primary mt-4" role="alert">
                    <b><i>IMPORTANT!</i></b> After posting a job, a confirmation e-mail will be sent to the e-mail address you have entered. Your post will be published after clicking the confirmation link in the e-mail you received.
                </div>

                <button className="btn-submit" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}
