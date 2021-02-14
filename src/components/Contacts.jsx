import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import ref from '../content/contacts/contacts.json';
import parse from 'react-render-html'
import ref2 from '../content/references/references.json';

export default function Contacts(props) {
    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">{ref.header}</h2>
                           {parse(ref.text)}
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history} content={ref2} h2={"Feedbacks"}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
