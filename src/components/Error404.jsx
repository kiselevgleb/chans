import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Error404(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Error 404</h2>
                            <p>Page not found</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
