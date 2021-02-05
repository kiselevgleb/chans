import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import ref from '../content/contacts/contacts.json';

export default function Contacts(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">{ref.header}</h2>
                            {ref.text}
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
