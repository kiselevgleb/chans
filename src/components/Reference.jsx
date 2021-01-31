import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
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
                            <Feedback history={props.history}></Feedback>

                            <h4>Power Tool battery repair</h4>
                            <Feedback history={props.history}></Feedback>

                            <h4>Laptop battery repair</h4>
                            <Feedback history={props.history}></Feedback>

                            <h4>Battery rebuild for various other equipment</h4>
                            <Feedback history={props.history}></Feedback>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>


            <Footer history={props.history}></Footer>
        </Fragment>
    )
}