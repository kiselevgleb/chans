import React, { Fragment } from 'react';
import fb from '../img/fb.png';
import fb2 from '../img/fb2.png';
import point from '../img/point.png';

export default function Feedback(props) {

    return (
        <Fragment>
            <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>Feedbacks</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-fb-width">
                            {/* <img className="img-fb" src={fb} alt="refresh"></img> */}
                            <div>
                                <p><b>"The battery is amazinnnnggggggg !!!! You saved my BionX bike ! )))))) "</b></p>
                                <p><b>Yves Rivet, Ottawa ON</b></p>
                                <p className="text-fb">"Already have 30K on it and no dent on the voltmeter ! It fitted perfect the battery case. Thanks again for a great job !!!! You saved my BionX bike ! )))))) "</p>
                            </div>
                        </div>
                        <div className="col col-fb-width">
                            {/* <img className="img-fb" src={fb2} alt="refresh"></img> */}
                            <div>
                                <p><b>"U saved me $400 from buying new one. ! "</b></p>
                                <p><b>Dusty Collyer, Kelowna, BC</b></p>
                                <p className="text-fb">"The rebuilt adflo 3m battery works awesome! I was useing it in -40 and the battery held charge perfectly. U saved me $400 from buying new one. "</p>
                            </div>
                        </div>
                        <div className="col col-fb-width">
                            {/* <img className="img-fb" src={fb2} alt="refresh"></img> */}
                            <div>
                                <p><b>"Better than new! "</b></p>
                                <p><b>Greg Collins, Geoscience Inc, Lakefield, ON</b></p>
                                <p className="text-fb">"Received my Asus Pro battery after rebuilding. It works great - better than new! Thanks for your service. "</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-center">
                        <div className="col">
                            <img className="point" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                        </div>
                    </div>
                </div>
            </main>
            {/* <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>ОТЗЫВЫ</h2>
                        </div>
                    </div>
                    <div className="row row-inline">
                        <div className="col-inline">
                            <img className="img-fb" src={fb} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                        <div className="col-inline">
                            <img className="img-fb" src={fb2} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-center">
                    <div className="col">
                        <img className="point" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                    </div>
                    </div>
                </div>
            </main> */}
        </Fragment>
    )
}
