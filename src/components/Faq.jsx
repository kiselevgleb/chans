import React, { Fragment, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ref from '../content/faq/faq.json';

export default function Faq(props) {

    const handleMove = e => {
        e.target.nextSibling.className = e.target.nextSibling.className === "visibility"? "":"visibility";
    }

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">{ref.header}</h2>
                            {ref.text.map(o =>
                                <>
                                <br></br>
                                    <h4 className="feedback" onClick={handleMove} >{o.header}</h4>
                                    <div className="visibility">
                                        {o.text.map(p => <p>{p}</p>)}
                                    </div>
                                    <br></br>
                                </>
                            )}
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
