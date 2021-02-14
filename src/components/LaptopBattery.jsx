import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import Laptop_battery from '../img/laptop_battery.jpg';
import Laptop from '../img/laptop.jpg';
import ref2 from '../content/references/references.json';

export default function LaptopBattery(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Laptop Battery Rebuild</h2>
                            <p>Specifications for your battery can be found on the battery case. Indicated thereon is the battery capacity and voltage and chemistery. Determine the cost of your battery rebuild using the battery's specifications and the price tables below. The prices are based on the regular cylindrical cells. So far, as a small supplier, we !<b>don't charge the GST/HTS</b></p>
                            <p>Warranty 12 months. <a href="/chans/build/warranty">Read more</a></p>                       
                            <table className="tab">
                                <tr className="tr">
                                    <td className="tb">Voltage V </td><td colspan="3">10.8 - 11.00</td>
                                </tr>
                                <tr className="tr">
                                    <td className="tb">Capacity mAh </td><td>1800-2600</td><td>4000-5200</td><td>5400-7800</td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">$ CAD </td><td> 25.00 </td><td> 36.00 </td><td> 46.00 </td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">Capacity after rebuild mAh </td><td> 2600 </td><td> 5200 </td><td> 7800 </td>
                                </tr>
                            </table>
                            <br></br>
                            <img src={Laptop_battery} alt="Laptop battery" width = "500px"></img>
                            <br></br>
                            <br></br>
                            <table className="tab" >
                                <tr className="tr">
                                    <td className="tb">Voltage V </td><td colspan="3">14.4 - 14.8</td>
                                </tr>
                                <tr className="tr">
                                    <td className="tb">Capacity mAh </td><td>1800-2600</td><td>4000-5200</td><td>5400-7200</td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">$ CAD </td><td> 29.00 </td><td> 42.00 </td><td> 56.00 </td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">Capacity after rebuild mAh </td><td> 2600 </td><td> 5200 </td><td> 7800 </td>
                                </tr>
                            </table>
                            <br></br>
                            <img src={Laptop} alt="Laptop" width = "500px"></img>
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history} content={ref2} h2={"Feedbacks"}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
