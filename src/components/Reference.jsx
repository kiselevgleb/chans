import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import refElectric from '../content/references/referencesElectric.json';
import refPower from '../content/references/referencesPower.json';
import refLaptop from '../content/references/referencesLaptop.json';
import refBattery from '../content/references/referencesBattery.json';

export default function Reference(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">What our Customers say</h2>
                            <h4>Electric bike battery repair</h4>
                            <Feedback history={props.history} content={refElectric} h2={""}></Feedback>

                            <h4>Power Tool battery repair</h4>
                            <Feedback history={props.history} content={refPower} h2={""}></Feedback>

                            <h4>Laptop battery repair</h4>
                            <Feedback history={props.history} content={refLaptop} h2={""}></Feedback>

                            <h4>Battery rebuild for various other equipment</h4>
                            <Feedback history={props.history} content={refBattery} h2={""}></Feedback>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>


            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
