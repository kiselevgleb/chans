import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
import Bionx from '../img/bionx.jpg';

export default function ElectricBikes(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Electric Bike Li-ion Battery Rebuild</h2>
                            <p>Save money and enjoy riding!</p>
                            <p>We can rebuild Li-ion batteries for electric bikes such as <b>BionX, Igo, Pedego, Easy Motion</b> and other brands. Our rebuilt Li-ion batteries are 100% genuine batteries in the old case. We use the freshest, high-quality and the high-power Samsung 2.5Ah 20A cells. The cells are balanced and connected with the spot welder. Warranty 12 months.  <a href="/chans/build/warranty">Read more</a></p>
                            <img src={Bionx} alt="Bionx"></img>
                            <p>The price depends on the kind and the number of the li-ion cells that are inside the battery. The table below shows the approximate prices for the rebuilt batteries with the capacities we can make. For example, in 36V 10Ah battery there can be from 40 till 60 cells. So we can make from 10Ah up to 15 Ah. using our 2.5Ah cells. The price doesn't include the BMS (Battery management System) if it is faulty and needs replacing. So far, as a small supplier, we don't charge the GST/HTS!</p>
                            <table className="tab">
                                <tr className="tr">
                                    <td className="tb">Voltage V </td><td colspan="2">24</td><td colspan="3">36</td><td colspan="3">48</td>
                                </tr>
                                <tr className="tr">
                                    <td className="tb">Capacity Ah </td><td>10 </td><td>12.5</td><td>10</td><td>12.5</td><td>15</td><td>10</td><td>12.5</td><td>15</td>
                                </tr>
                                <tr className="tr tr-col">
                                    <td className="tb">$ CAD </td><td> 329.00 </td><td> 359.00 </td><td> 379.00 </td><td> 429.00 </td><td> 479.00 </td><td> 439.00 </td><td> 499.00 </td><td> 559.00 </td>
                                </tr>
                            </table>
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}></Feedback>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}