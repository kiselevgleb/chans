import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import Liion from '../img/liion_drill_battery.jpg';
import Nicd from '../img/nicd_drill_battery.jpg';
import ref2 from '../content/references/references.json';

export default function DrillBattery(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Power Tool Battery Rebuild</h2>
                            <p>We can rebuild Ni-Cd, Ni-Mh and Li-ion batteries. Warranty 6-12 months. <a href="/warranty">Read more</a></p>
                            <p>Specifications for your battery can be found on the battery case. Indicated thereon is the battery capacity, voltage and chemistery (Li-ion, Ni-Cd, Ni-Mh). Determine the cost of your battery rebuild using the battery's specifications and the price tables below. So far, as a small supplier, we don't charge the GST/HTS! <b>don't charge the GST/HTS!</b></p>
                            <h4 className="text-center">Li-ion (Lithium ion) battery</h4>
                            <p><b>We use the high-power Samsung cells 2.5 Ah 20C.</b> The higher capacity a battery has the longer it works without charging.</p>
                            <p>The price doesn't include the BMS (Battery Management System) if it is faulty and needs replacing.</p>
                          
                            <table className="tab">
                                <tr className="tr">
                                    <td className="tb">Voltage V </td><td colspan="2">10-12</td><td colspan="2">14</td><td colspan="2">18</td><td colspan="2">24</td><td colspan="2">28</td><td colspan="2">36</td>
                                </tr>
                                <tr className="tr">
                                    <td className="tb">Capacity Ah </td><td>1.3-2.5</td><td>3.0-5.0</td><td>1.3-2.5</td><td>3.0-5.0</td><td>1.3-2.5</td><td>3.0-5.0</td><td>1.3-2.5</td><td>3.0-5.0</td><td>1.3-2.5</td><td>3.0-5.0</td><td>1.3-2.5</td><td>3.0-5.0</td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">$ CAD </td><td> 34.00 </td><td> 51.00 </td><td> 39.00 </td><td> 64.00 </td><td> 46.00 </td><td> 76.00 </td><td> 51.00 </td><td> 89.00 </td> <td> 58.00 </td><td> 101.00 </td><td> 76.00 </td><td> 136.00 </td>
                                </tr>
                            </table>
                            <img src={Liion} alt="Liion drill battery"></img>

                            <h4 className="text-center">Ni-Cd (Nickel Cadmium) battery</h4>
                            <p>After rebuilding the capacity of your battery will be <b>2500mAh</b> As result, a battery delivers <b>double the runtime</b> in comparison with a replacement 1.3 Ah battery.</p>
                            
                            <table className="tab">
                                <tr className="tr">
                                    <td className="tb">Voltage V </td><td>9.6</td><td>12</td><td>14.4</td><td>15</td><td>18</td><td>19</td><td>24</td><td>36</td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">$ CAD </td><td> 36.00 </td><td> 41.00 </td><td> 43.00 </td><td> 45.00 </td><td> 49.00 </td><td> 51.00 </td><td> 62.00 </td><td> 82.00 </td>
                                </tr>
                            </table>
                            <img src={Nicd} alt="Nicd drill battery"></img>
                        </section>
                    </div>
                </div>
            </main>
            {/* <Feedback history={props.history} content={ref2} h2={"Feedbacks"}></Feedback> */}
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
