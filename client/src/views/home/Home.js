import React from "react";
import Header from "../../components/Header";
import IntroSection from "./IntroSection";
import SuggestedTopics from "./SuggestedTopics";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IntroSection />
                <SuggestedTopics />
            </div>
        )
    }
}

export default Home;