import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import Spectrum from '../img/spectrum-r&h.jpg';
import ref2 from '../content/references/references.json';

export default function SpectrumAnalyzer(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Spectrum Analyzer Battery Rebuild</h2>
                            <p>We can rebuild Ni-Cd, Ni-Mh and Li-ion batteries for Spectrum Analyzers such as <b> Rohde & Schwarz, Tektronix, Precision </b> and other brands. Warranty 6-12 months. <a href="/chans/build/warranty">Read more</a></p>
                            <p>The price depends on the battery's voltage, capacity, and chemistry. Specifications for your battery can be found on the battery case.</p>
                            <p>For example, to rebuild a <b>R&S </b> FSH8.08 Li-ion 7.2V 7800 mAh costs <b>44.00 only. </b> Compare with the new one for 200.00!</p>

                            <img src={Spectrum} alt="Spectrum"  width = "300px"></img>

                            <p>Please, call us <a href="tel:226-977-0998">226-977-0998</a> or email <a href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> and we will be happy to help you.</p>
                            </section>
                    </div>
                </div>
            </main>
            {/* <Feedback history={props.history}  content={ref2} h2={"Feedbacks"}></Feedback> */}
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
