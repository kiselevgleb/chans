import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import Greenworks from '../img/greenworks.jpg';
import ref2 from '../content/references/references.json';

export default function LawnCareTool(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Lawn Care Tool Battery Rebuild</h2>
                            <p>We can rebuild Ni-Cd, Ni-Mh and Li-ion batteries for Lawnmowers and Trimmers such as <b> Greenworks, Zuchetti </b> and other brands. Warranty 6-12 months. <a href="/chans/build/warranty">Read more</a></p>
                            <p>The price depends on the battery's voltage, capacity, and chemistry. Specifications for your battery can be found on the battery case.</p>
                            <p>For example, to rebuild a <b>Greenworks </b> Li-ion 40V 5Ah costs <b>136.00 only. </b> Compare with the new one for 180.00!</p>

                            <img src={Greenworks} alt="Greenworks"  width = "500px"></img>

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
