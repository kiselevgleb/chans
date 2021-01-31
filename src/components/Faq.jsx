import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Feedback from './Feedback';
export default function Faq(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <section className="top-sales">
                            <h2 className="text-center">Frequently Asked Questions</h2>
                            <h4>What batteries do we rebuild?</h4>
                            <p>We rebuild batteries for e-bikes, laptops, power tools, flash systems, auto diagnosis and survey equipment, cable testers, and many other divices with Ni-Cd, Ni-Mh, Li-ion batteries.</p>
                            <br></br>
                            <h4>Can you increase the capacity of my e-bike battery so that I could ride longer?</h4>
                            <p>It depends on the number and kind of the cells that were installed in the battery initially. As rule, our cells are of the higher capacity that results in the insreased total run-time. Also, if there is enough room in the battery case we can put more cells.</p>
                            <br></br>
                            <h4>How is the rebuilt power tool battery cost-effective?</h4>
                            <p>Buying new professional electronics and tools is very expensive. We use the highest quality materials, so your rebuilt batteries will outlast and outperform new batteries. This will save you from having to buy new batteries and equipment in the future. We fix the problem!</p>
                            <br></br>

                            <h4>Should you rebuild a laptop battery or buy a new original battery?</h4>
                            <p>- While a new original battery will cost about $120.00 CAD, the approximate cost of a CHANS rebuilt battery will on average cost no more than $50 CAD, a savings of at least 50%</p>
                            <p>- We use only fresh, newly produced factory supplied Li-ion cells</p>
                            <p>- Many batteries that are sold in stores have been produced months or even years ago and can continue to lose their charge while awaiting sale in the sellers stock. As a result, the cells in these "new" batteries have lost their capacity.</p>

                            <br></br>
                            <h4>Would it be more cost-effective to buy a low-cost replacement battery?</h4>
                            <p>- Our experience has proven that the cells used in many replacement batteries are old at the time the battery is produced. We have also seen batteries where the cells were from several different manufacturers. If the low-cost replacement battery contained 'new' quality cells, the price would be much higher!</p>
                            <p>- A replacement laptop battery might not be compatible with the laptop brand or is unable to perform to full capacity due to a malfunction of the internal controller</p>
                            <p>- In most cases it is not possible to repair a replacement battery.</p>

                            
                            <br></br>
                            <h4>What warranty do we give?</h4>
                            <p>We give 12 months for li-ion batteries and 6 months for Ni-Cd / Ni-Mh batteries.</p>

                            <br></br>
                            <h4>How long does it take to rebuild a battery?</h4>
                            <p>The average time needed for rebuilding a small battery is 1-2 business days, excluding holidays. it takes about a week to rebuild e-bike battery because we need to test a large number of the cells. The repair time may vary slightly depending on the size of your service order and the availability of stock needed to fulfill your order.</p>
                            <br></br>

                            <h4>What method of payment do you accept?</h4>
                            <p>We accept cash, credit cards, Interact E-transfers, and business cheques. However, with credit card payment or PayPal we will have to add their fee of 3.4% and 2.9% relatively to the total sum. Thank you for understanding.</p>
                            <br></br>

                            <h4>How can I send a battery to you</h4>
                            <p>You can send a battery by regular Canada Post or other courier companies. The back shipping is paid by a customer as well. Attention to US customers: filling in the customs declaration make sure the the value is zero to avoid Entry Clearence Fee. Should any duties and taxes arise, it is a customer's responsibility to pay them.</p>
                            <br></br>

                            <h4>What is the general process of getting my battery rebuilt?</h4>
                            <p>After you dropped off or sent a battery we check it and confirm the cost. Please, notice that before we check e-bike battery we can tell you the approximate price only. When the battery is done we will send you email to arrange pick up. If you are outside London we will ask you to send Interact E-Transfer for the service and back shipping. After the payment we will send you the battery with the tracking number.</p>
                            <br></br>

                            <h4>Do you replace all battery cells or only the dead ones?</h4>
                            <p>Our commitment is to rebuild a battery with a guaranteed quality. Replacing cells selectively is not cost-effective because if we only replace some cells today, you may find yourself coming back tomorrow to fix the non-replaced cells that have now also failed. This is a waste of your time and money, and your satisfaction is our primary concern. We fix the entire device.</p>
                            <br></br>

                            <h4>What is the method used to connect the battery cells?</h4>
                            <p>We use a spot welding machine and nickel tape to connect the battery cells into the battery pack.</p>
                            <br></br>


                            <h4>Do you test the cells prior to installing them into a battery?</h4>
                            <p>We use a specialized Ni-Cd and Li-ion cell analyzer to balance or 'equalize' the voltage of the battery cells ensuring the battery will charge to maximum capacity</p>
                            <br></br>

                            <h4>What if you are not sure if the problem is a dead battery or if something is wrong with your device or charger?</h4>
                            <p>We offer complimentary on-site battery testing when a battery is dropped off by customers.</p>
                            <br></br>

                            <h4>How long will a laptop / power tool run independent of a wired power source if using a rebuilt battery?</h4>
                            <p>The rebuilt battery doesn't differ from the original battery. Consult the runtime in the technical documentation of your laptop / drill to find this.</p>
                            <br></br>

                            <h4>Can any battery be repaired?</h4>
                            <p>We can repair approximately 95% of all Li-ion, Ni-Cd, N-Mh batteries.</p>
                            <br></br>

                            <h4>Why are you not always successfull rebuilding a battery?</h4>
                            <p>We are unable to rebuild a battery in two cases:</p>
                            <p>- If there are the cells that we don't have. For instance, we can't rebuild Ni-Mh laptop batteries.</p>
                            <p>- If the BMS (battery management system) was faulty. Sometimes, we can replace the BMS.</p>
                            <br></br>

                            <h4>How many times can a battery be rebuilt?</h4>
                            <p>Our 15 years' experience has shown us that most batteries can be rebuilt several times without compromising performance or quality.</p>
                            <br></br>

                            <h4>If I am not happy with the result is there money back?</h4>
                            <p>We do our best to provide you with the high-quality rebuilt battery. However, if you aren't satisfied we will return money for the service. Please, pay your attention that you will have to send the battery back to us so that we could take off the cells. After that we will returne the battery without any cells and money for the rebuilt service.</p>
                            <br></br>

                            <h4>Do you have the special software for the battery microcontroller initialization?</h4>
                            <p>CHANS has proprietary ownership of the unique software that allows us to write the manufacturer settings into the controller.</p>
                            <br></br>

                            <h4>How to exrend li-ion battery life?</h4>
                            <p>We like the recommendations from www.Apple.com:</p>
                            <p>- Do not fully charge or fully discharge your device's battery - charge it to around 50%. If you store a device when its battery is fully discharged, the battery could fall into a deep discharge state, which renders it incapable of holding a charge. Conversely, if you store it fully charged for an extended period of time, the battery may lose some capacity, leading to shorter battery life.</p>
                            <p>- Power down the device to avoid additional battery use.</p>
                            <p>- Place your device in a cool, moisture-free environment that's less than 90 F (32 C).</p>
                            <p>- If you plan to store your device for longer than six months, charge it to 50% every six months."</p>
                            <br></br>
                        </section>
                    </div>
                </div>
            </main>
            <Feedback history={props.history}></Feedback>

            <Footer history={props.history}></Footer>
        </Fragment>
    )
}