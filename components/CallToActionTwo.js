import React from 'react';

const CallToActionTwo = () => {
        return (
            <section className="cta-two">
                <div className="container">
                    <img src="/assets/images/resources/soccer-hero-3.png" className="cta-two__moc" alt="Awesome Image" width="60%" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-two__content">
                                <i className="cta-two__icon dimon-icon-data"></i>
                                <div className="block-title text-left">
                                    {/* <h2 className="block-title__title">Interact with <span>Customers</span> <br /> on
                                        Single Platform.</h2> */}
                                    <h2 className="block-title__title">How is Real Life Performance Linked?</h2>
                                </div>
                                <div className="cta-two__text">
                                    <p>Every month , the number of player tokens will be minted based on his/her real-life performance. These tokens are distributed to NFT owners & LP Stakers. Thus the player's performance directly influences users to Buy or sell or hold making it truly linked to real-life performance.</p>
                                </div>
                                {/* <a href="#" className="thm-btn"><span>Get Started</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToActionTwo;