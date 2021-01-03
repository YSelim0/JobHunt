import React from "react";
import javascriptLogo from "../../assets/images/topics/javascript.png";
import androidLogo from "../../assets/images/topics/android.png";
import reactLogo from "../../assets/images/topics/react.png";
import phpLogo from "../../assets/images/topics/php.png";
import vueLogo from "../../assets/images/topics/vue.png";
import csharpLogo from "../../assets/images/topics/csharp.png";
import "../../assets/css/views/home/suggested_topics.css";

class SuggestedTopics extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <h4 className="title">Suggested Topics</h4>

                <div className="topics">
                    <div className="col-3 topic">
                        <span>Javascript</span>
                        <img src={javascriptLogo} alt="Javascript"></img>
                    </div>
                    
                    <div className="col-3 offset-1 topic">
                        <span>Android</span>
                        <img src={androidLogo} alt="Android"></img>
                    </div>
                    
                    <div className="col-3 offset-1 topic">
                        <span>React</span>
                        <img src={reactLogo} alt="React"></img>
                    </div>

                    <div className="col-3 topic">
                        <span>Php</span>
                        <img src={phpLogo} alt="Php"></img>
                    </div>

                    <div className="col-3 offset-1 topic">
                        <span>Vue</span>
                        <img src={vueLogo} alt="Vue"></img>
                    </div>

                    <div className="col-3 offset-1 topic">
                        <span>C#</span>
                        <img src={csharpLogo} alt="C#"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuggestedTopics;
