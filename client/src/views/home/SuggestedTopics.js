import javascriptLogo from "../../assets/images/topics/javascript.png";
import androidLogo from "../../assets/images/topics/android.png";
import reactLogo from "../../assets/images/topics/react.png";
import phpLogo from "../../assets/images/topics/php.png";
import vueLogo from "../../assets/images/topics/vue.png";
import csharpLogo from "../../assets/images/topics/csharp.png";
import "../../assets/css/views/home/suggested_topics.css";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="container mt-5">
            <h4 className="title">Suggested Topics</h4>

            <div className="topics">
                <Link to="search?keyword=javascript" className="col-3 topic">
                    <span>Javascript</span>
                    <img className="topic-img" src={javascriptLogo} alt="Javascript"></img>
                </Link>
                
                <Link to="search?keyword=android" className="col-3 topic">
                    <span>Android</span>
                    <img className="topic-img" src={androidLogo} alt="Android"></img>
                </Link>
                
                <Link to="search?keyword=react" className="col-3 topic">
                    <span>React</span>
                    <img className="topic-img" src={reactLogo} alt="React"></img>
                </Link>

                <Link to="search?keyword=php" className="col-3 topic">
                    <span>Php</span>
                    <img className="topic-img" src={phpLogo} alt="Php"></img>
                </Link>

                <Link to="search?keyword=vue" className="col-3 topic">
                    <span>Vue</span>
                    <img className="topic-img" src={vueLogo} alt="Vue"></img>
                </Link>

                <Link to="search?keyword=csharp" className="col-3 topic">
                    <span>C#</span>
                    <img className="topic-img" src={csharpLogo} alt="C#"></img>
                </Link>
            </div>
        </div>
    )
}
