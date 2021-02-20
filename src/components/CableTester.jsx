import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import WavetekTester from '../img/wavetek-tester1.jpg';
import ref2 from '../content/references/references.json';

export default function CableTester(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Cable Tester Battery Rebuild</h2>
                            <p>We can rebuild Ni-Cd, Ni-Mh and Li-ion batteries for cable testers such as <b>Wavetek, Fluke, NetScout </b> and other brands. Warranty 6-12 months. <a href="/chans/build/warranty">Read more</a></p>
                            <p>The price depends on the battery's voltage, capacity, and chemistry. Specifications for your battery can be found on the battery case.</p>
                            <p>For example, to rebuild a <b>Wavetek </b> LT8 Ni-Mh 8.4V 2450 mAh costs <b>69.00 only</b>. Compare with the new one for 200.00!</p>
                            <img src={WavetekTester} alt="Wavetek Tester"  width = "500px"></img>

                            <p>Please, call us <a href="tel:226-977-0998">226-977-0998</a> or email <a href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> and we will be happy to help you.</p>
                            </section>
                    </div>
                </div>
            </main>
            {/* <Feedback history={props.history} content={ref2} h2={"Feedbacks"}></Feedback> */}
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
