import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
export default function Warranty(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Warranty</h2>
                            <h4>Thank you for your interest in the service of CHANS Battery Rebuild. Your satisfaction is our utmost goal.</h4>
                            <p>CHANS Battery Rebuild warrants that the rebuilt battery will perform satisfactorily for a Warranty period from the date of receipt.</p>
                            <p>- for Li-ion batteries Warranty period is TWELVE months</p>
                            <p>- for Ni-Cd and Ni-Mh batteries Warranty period is SIX months</p>
                            <br></br>
                            <p>The usage period of the laptop battery, while working without the use of CD/DVD drivers and other peripheral devices will correspond to the period that has been stated by this laptop's manufacturer taking into account the battery's parameters and the laptop's condition.</p>
                            <br></br>
                            <p>CHANS Battery Rebuild warrants that a free repair will be performed against defects in material or workmanship under normal use for the "Warranty Period".</p>
                            <br></br>
                            <p>The rebuild process can leave traces and minor scratches where a battery has been opened and serviced that won't affect the operability of the battery.</p>
                            <br></br>
                            <p>If a problem with the rebuilt battery can't be fixed during the warranty period, the sum paid for this battery rebuild service will be refunded. Prior to refunding the cost of service rendered, CHANS Battery Rebuild will return the battery to the condition it was received in when accepted for repair, with the exception of the minor cosmetic defects incurred during the opening phase of the rebuild. CHANS reserves the right to retrieve the new replacement battery cells inserted into the battery.</p>
                            <br></br>
                            <p>This Warranty does not cover and will be void for defects or damages resulting from casualty, accident, transportation, misuse or abuse, liquid, viruses and spyware, neglect, alterations, service or repair by organizations other than CHANS Battery Rebuild, improper installation, operation or maintenance, improper connections with peripherals, or other causes not arising out of defects in materials or workmanship. CHANS Battery Rebuild is not responsible for damage to or loss of any programs, data, or removable storage media, whether it occurs during warranty or other repair service.</p>
                            <br></br>
                            <p>CHANS battery Rebuild will be responsible for the operability of the rebuilt battery only and will not be responsible for any device for which the battery (or batteries) will be used. CHANS Battery Rebuild will not be responsible for any product(s) that is/are physically damaged or that is/are not in normal operating condition as a result of misuse or improper installation on the user's part.</p>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
