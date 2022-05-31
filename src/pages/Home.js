import React, {Component} from 'react';
import CarouselBoxHk from "../components/CarouselBoxHk";
import OutTeam from "./OurTeam";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBoxHk/>
                <OutTeam/>
            </div>
        );
    }
}

export default Home;
