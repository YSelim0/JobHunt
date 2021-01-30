import Header from "../../components/Header";
import IntroSection from "./IntroSection";
import SuggestedTopics from "./SuggestedTopics";
import LastPublishedJobs from "./LastPublishedJobs";
import Footer from "../../components/Footer";

export default (props) => {
    return (
        <div>
            <Header />
            <IntroSection history={props.history} />
            <SuggestedTopics />
            <LastPublishedJobs />
            <Footer />
        </div>
    )
}
