import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import DiveVehicle from '../img/dive_vehicle.jpg';
import ref2 from '../content/references/references.json';

export default function DivePropulsion(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Dive Propulsion Vehicle Li-ion Battery Rebuild</h2>
                            <p>Save money and enjoy diving!</p>
                            <p>Our rebuilt Li-ion batteries are 100% genuine batteries in the old case. We use the freshest, high-quality and high-power LG and Samsung 2.5Ah 20A cells. The cells are balanced and connected with the spot welder. Warranty 12 months. <a href="/chans/build/warranty">Read more</a></p>
                            <p>The price depends on the kind and the number of the li-ion cells that are inside the battery.</p>
                            <img src={DiveVehicle} alt="Dive Vehicle"  width = "500px"></img>

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
