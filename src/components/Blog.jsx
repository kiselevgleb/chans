import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import ChansBattery from '../img/chans-battery6.jpg';

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
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
