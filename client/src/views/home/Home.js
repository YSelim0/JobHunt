import React from "react";
import Header from "../../components/Header";
import IntroSection from "./IntroSection";
import SuggestedTopics from "./SuggestedTopics";
import LastPublishedJobs from "./LastPublishedJobs";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IntroSection />
                <SuggestedTopics />
                <LastPublishedJobs />
            </div>
        )
    }
}

export default Home;