import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import GolfCart from '../img/golf-cart.jpg';
import Lifepack from '../img/lifepack12.jpg';
import Leica from '../img/leica.jpg';
import ref2 from '../content/references/references.json';


export default function OtherEquipment(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Other Equipment Battery Rebuild</h2>
                            <p>We can rebuild batteries for various devices with Ni-Cd, Ni-Mh, Li-ion batteries.</p>
                            <p>Here are some examples</p>
                            <p>Bateries for <b>Golf carts</b>, for instance, Cart-Tek Electric Caddie</p>
                            <img src={GolfCart} alt="Golf Cart"  width = "300px"></img>
                            <p>Batteries for <b>Defibrilators</b>, for instance, LifePack 12</p>
                            <img src={Lifepack} alt="Lifepack"  width = "300px"></img>
                            <p>Batteries for <b>Monitor equipment</b>, for instance, Hygiene monitor hygiene monitor battery rebuild</p>
                            <p>Batteries for <b>Massagers</b>, for instance, TimTam massager battery rebuild</p>
                            <p>Batteries for <b>Digital cameras</b>, for instance, Leica</p>
                            <img src={Leica} alt="Leica"  width = "300px"></img>
                            <p>Please, call us <a href="tel:226-977-0998">226-977-0998</a> or email <a href="mailto:info@chansbattery.ca">info@chansbattery.ca</a> and we will be happy to help you.</p>
                            </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}  content={ref2} h2={"Feedbacks"}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
