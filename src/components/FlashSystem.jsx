import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import FlashBattery from '../img/flash-battery.jpg';

export default function FlashSystem(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Flash System Battery Rebuild</h2>
                            <p>Save money and enjoy taking your professional photoes!</p>
                            <p>We can rebuild Ni-Cd and Li-ion Flash batteries such as <b>Lumedyne, Quantum, Norman, Metz, Sunpak </b> and many more brands. Warranty 6-12 months. <a href="/chans/build/warranty">Read more</a></p>
                            <p>The price depends on the battery's voltage, capacity, and chemistry. Specifications for your battery can be found on the battery case.</p>
                            <p>For example, to rebuild a <b>Lumedyne </b> BMED Medium Battery Ni-Cd 10.8V costs <b>93.00 only </b> while the capacity will be 7.5 Ah! Compare with the new one for 300.00!!</p>

                            <img src={FlashBattery} alt="Flash Battery"  width = "500px"></img>

                            <p>Please, call us <a href="tel:226-977-0998">226-977-0998</a> or email <a href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> and we will be happy to help you.</p>
                            </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
