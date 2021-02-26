import React, { Fragment, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './FeedbackBig';
import refElectric from '../content/references/referencesElectric.json';
import refPower from '../content/references/referencesPower.json';
import refLaptop from '../content/references/referencesLaptop.json';
import refBattery from '../content/references/referencesBattery.json';

export default function Reference(props) {
    const [itemBike, setItemBike] = useState(false);
    const [itemTool, setItemTool] = useState(false);
    const [itemLap, setIteLap] = useState(false);
    const [itemOther, setItemOther] = useState(false);


    const handleMove = id => {
        switch (id) {
            case 1:
                setItemBike(itemBike ? false : true);
                break;
            case 2:
                setItemTool(itemTool ? false : true);
                break;
            case 3:
                setIteLap(itemLap ? false : true);
                break;
            case 4:
                setItemOther(itemOther ? false : true);
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center" >What our Customers say</h2>
                            <h4 className="feedback" onClick={() => handleMove(1)} >Electric bike battery repair</h4>
                            <div className={itemBike ? "" : "visibility"}>
                                <Feedback history={props.history} content={refElectric} h2={""} ></Feedback>
                            </div>
                            <h4 className="feedback" onClick={() => handleMove(2)} >Power Tool battery repair</h4>
                            <div className={itemTool ? "" : "visibility"}>
                                <Feedback history={props.history} content={refPower} h2={""}></Feedback>
                            </div>
                            <h4 className="feedback" onClick={() => handleMove(3)} >Laptop battery repair</h4>
                            <div className={itemLap ? "" : "visibility"}>
                                <Feedback history={props.history} content={refLaptop} h2={""}></Feedback>
                            </div>
                            <h4 className="feedback" onClick={() => handleMove(4)} >Battery rebuild for various other equipment</h4>
                            <div className={itemOther ? "" : "visibility"}>
                                <Feedback history={props.history} content={refBattery} h2={""}></Feedback>
                            </div>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
