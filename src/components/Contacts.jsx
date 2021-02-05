import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import ref from '../content/contacts.json';

export default function Contacts(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">ref.header</h2>
                            <p>CHANS Battery Rebuild is located in London Ontario Canada. We are committed to offering a high-quality service while maintaining great prices for our customers. For this reason, we operate a home-based business.</p>
                            <p>Please, call us <a href="tel:226-977-0998">226-977-0998</a>, email <a href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> or <a href="mailto:chansbattery@gmail.com">chansbattery@gmail.com</a> and we will be happy to tell you the address and meet with you.</p>
                            <p>You can drop off a battery or send it by Canada Post or other courier companies. The back shipping is paid by a customer as well.</p>
                            <p>Attention the US and other international customers: filling in the customs declaration make sure the the value is zero to avoid Entry Clearence Fee. Should any duties and taxes arise, it is a customer's responsibility to pay them.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
