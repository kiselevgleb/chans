import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import ChansTeam from '../img/chans-team.jpg';
import ChansTeam2 from '../img/techcellence.jpg';
import ref from '../content/about/about.json';
import parse from 'react-render-html'

export default function Story(props) {

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
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
