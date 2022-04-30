import {Carousel} from "react-bootstrap";
import WaterfallImg from '../assets/1_img.jpg'
import MountainsImg from '../assets/2_img.jpg'
import SnowyLandscape from '../assets/3_img.jpg'
import CliffImg from '../assets/4_img.jpg'
import React, {Component} from "react";

export default class CarouselBoxHk extends Component {
    render() {
        return(
            <Carousel fade interval='4000'>
                <Carousel.Item>
                    <img className='d-block w-100' src={WaterfallImg} alt='Waterfall'/>
                    <Carousel.Caption>
                        <h3>Waterfall</h3>
                        <p>The best thing one can do when it’s raining is to let it rain.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={MountainsImg} alt='Mountains'/>
                    <Carousel.Caption>
                        <h3>Mountains</h3>
                        <p>Land really is the best art</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={SnowyLandscape} alt='Snowy Landscape'/>
                    <Carousel.Caption>
                        <h3>Snowy Landscape</h3>
                        <p>Look deep into nature, and then you will understand everything better.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={CliffImg} alt='Cliff'/>
                    <Carousel.Caption>
                        <h3>Cliff</h3>
                        <p>The earth is what we all have in common.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
