import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import ChansBattery from '../img/chans-battery6.jpg';
import ChansBattery7 from '../img/chans-battery7.jpg';
import ChansBattery5 from '../img/chans-battery5.jpg';
import Techcellence from '../img/techcellence.jpg';


export default function Blog(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Blog</h2>
                            <a  href="http://chansbattery.ca/dive-vehicle-battery-rebuild.html">October 21, 2017</a>
                            <p>Brand Loyalty in the Power Tool Industry Read what people think</p>
                            <a href="https://www.protoolreviews.com/news/brand-loyalty-in-the-power-tool-industry/20696/">https://www.protoolreviews.com/news/brand-loyalty-in-the-power-tool-industry/20696/</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="http://chansbattery.ca/battery-rebuild.html">June 22, 2017</a>
                            <p>The Londoner has an article about us</p>
                            <a href="http://www.thelondoner.ca/ur/story/1256883">The first company in Canada that is focused on battery rebuild</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">May 24, 2017</a>
                            <p>150 years of social innovation in London</p>
                            <p>Tenant Coner</p>
                            <img width="189" src={ChansBattery} alt="Chans Battery"></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">May 6, 2017</a>
                            <p>Volunteering for SARI Therapetic Riding at "Day at the Derby" fundraiser, hosted at the Western Fair District.</p>
                            <p>A whopping $25,446.29 was raised!</p>
                            <img width="189" src={ChansBattery7} alt="Chans Battery7"></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">May 24, 2017</a>
                            <p>150 years of social innovation in London</p>
                            <p>Our company in taking part in Entrepreneur Elevator Pitch "Rap" Competition</p>
                            <img width="189" src={ChansBattery5} alt="Chans Battery5"></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">March 30, 2017</a>
                            <p>We are the 2017 Techcellence Award Finalist!</p>
                            <a  href="https://techalliance.ca/2017-techcellence-award-winners/">https://techalliance.ca/2017-techcellence-award-winners/ </a>
                            <br></br>
                            <br></br>

                            <img width="189" src={Techcellence} alt="Techcellence"></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">October 15, 2016</a>
                            <p>Professional vs. DIY Power Tools. Read what people think</p>
                            <a  href="http://www.askthebuilder.com/professional-vs-diy-power-tools/">http://www.askthebuilder.com/professional-vs-diy-power-tools/</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">October, 2016</a>
                            <p>Volunteering for SARI Therapetic Riding</p>
                            <p> I couldn't imagine that I would benefit so much from this volunteering. Sometimes on Wednesday nights I feel tired after the long working day to drive 30 min. to SARI. Fortunately, I do it and then feel so refreshed!! Amasing place!</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">October 2, 2016</a>
                            <p>Would You Buy No-Name Replacement Power Tool Battery Packs? Read what people think</p>
                            <a  href="https://toolguyd.com/replacement-power-tool-battery-packs-question/">https://toolguyd.com/replacement-power-tool-battery-packs-question/</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">September 30, 2016</a>
                            <p>Women and Power Tools. If I am a femail DIY what tools I should start out with.</p>
                            <a  href="https://toolsinaction.com/power-tool-information/women-and-power-tools/">https://toolsinaction.com/power-tool-information/women-and-power-tools/</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="#">September 10, 2016</a>
                            <p>Volunteering for ReForest London at Western Fair district</p>
                            <p>It's so enjoyable to take part in Free Tree Give Awway Reforest initiative. I like to engage people in usefull activities and help to make our city greener.</p>
                            <br></br>
                            <br></br>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
