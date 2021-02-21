import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import ref from '../content/contacts/contacts.json';
import parse from 'react-render-html'

export default function Contacts(props) {
    let phone = `tel:${ref.phone}`;
    let email1 = `mailto:${ref.email[0]}`;
    let email2 = `mailto:${ref.email[1]}`;

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">{ref.header}</h2>
                            <br></br>
                            <p>Location – {ref.location}</p>
                            <p>Phone: <a href={phone}>{ref.phone}</a></p>
                            <p>E-mail: <a href={email1}>{ref.email[0]}</a>, <a href={email2}>{ref.email[1]}</a></p>
                            <br></br>
                            <p>{ref.text[0]}</p>
                            <p>{ref.text[1]}</p>
                            <p>{ref.text[2]}</p>
                            {/* {parse(ref.text)} */}
                        </section>
                    </div>
                </div>
            </main>
            {/* <Feedback history={props.history} content={ref2} h2={"Feedbacks"}></Feedback> */}
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
