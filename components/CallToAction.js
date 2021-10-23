import React from 'react';

const CallToAction = () => {
        return (
            <section className="cta-one">
                {/* <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" /> */}
                <div className="container">
                    <img src="/assets/images/resources/soccer-hero-2.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title"><span>User Flow</span>.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>Following depicts the user flow in our platform</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Buy FANC tokens and Stake FANC tokens</li>
                                    <li><i className="fa fa-check"></i>Buy Player tokens
                                    </li>
                                    <li><i className="fa fa-check"></i>Prediction and Fantasy League
                                    </li>
                                </ul>
                                {/* <a href="#" className="thm-btn"><span>Get Started</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;