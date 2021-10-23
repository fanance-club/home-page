import React from "react";

const CallToAction = () => {
	return (
		<section className="cta-one">
			{/* <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" /> */}
			<div className="container">
				<img
					src="/assets/images/resources/soccer-hero-2.png"
					className="cta-one__moc"
					alt="Awesome Image"
				/>
				<div className="row justify-content-lg-end">
					<div className="col-lg-6">
						<div className="cta-one__content">
							<i className="cta-one__icon dimon-icon-data1"></i>
							<div className="block-title text-left">
								<h2 className="block-title__title">
									<span>FANC Token</span>.
								</h2>
							</div>
							<div className="cta-one__text">
								<p>
									FANC is the deflationary token by nature with the total
									Maximum supply upon the Fanance club platform’s launch will be
									hard-capped to 500,000,000 FANC tokens and the minimum supply
									via burning mechanism will be capped to 100,000,000 FANC
								</p>
								<p>
									FANC is a native token on the Cardano network. FANC token has
									multiple utility use cases that give you an enormous reason to
									BUY and HODL
								</p>
							</div>
							<ul className="list-unstyled">
								<li>
									<i className="fa fa-check"></i>STAKE FANC-ADA LP and EARN APY & % of the transaction fee
								</li>
								<li>
									<i className="fa fa-check"></i>Initial Star offering (ISO) Purchase
								</li>
								<li>
									<i className="fa fa-check"></i>Stake PLAYER - FANC LP and earn APY and % of the translation Fee
								</li>
                                <li>
									<i className="fa fa-check"></i>Buy / Sell player Token
								</li>
                                <li>
									<i className="fa fa-check"></i>Buy / Sell Player’s NFT
								</li>
                                <li>
									<i className="fa fa-check"></i>Participate in Prediction Markets
								</li>
                                <li>
									<i className="fa fa-check"></i>Governance & voting
								</li>
							</ul>
							{/* <a href="#" className="thm-btn"><span>Get Started</span></a> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CallToAction;
