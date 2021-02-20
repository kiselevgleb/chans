import React, { Fragment } from 'react';
import About from './About';
import Header from './Header';
import Work from './Work';
import Feedback from './Feedback';
import Footer from './Footer';
import ref2 from '../content/references/references.json';

export default function Main(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <About history={props.history}></About>
            <Work history={props.history}></Work>
            <Feedback history={props.history} content={ref2} h2={"Reviews"}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
