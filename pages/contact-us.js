import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'


export default class ContactUs extends React.Component {
	render() {
		return (
			<div>
				<Helmet title={`${config.siteTitle} | Contact Us`} />
				<div className="hero" id="contact-us-hero">
					<div className="overlay">
						<h2 style={{color:'#fff'}}>Ask Us Anything</h2>
					</div>
				</div>

				<section id="contact-us">
					<div className="container" >
						<h1>Contact Us</h1>
						<form action="contact-us" netlify>
							<div className="row">
								<div className="col-xs-12">
									<p>
										<label htmlFor="">Name:</label>
										<input type="text" name="name" />
									</p>
								</div>
								<div className="col-xs-12">
									<p>
										<label htmlFor="">Email:</label>
										<input type="email" name="email" />
									</p>
								</div>
								<div className="col-xs-12">
									<p>
										<label htmlFor="">Subject:</label>
										<input type="text" name="subject" />
									</p>
								</div>
								<div className="col-xs-12">
									<p>
										<label htmlFor="">Message:</label>
										<textarea type="text" name="subject" />
									</p>
								</div>
								<div className="col-xs-12">
									<button action="submit">
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</section>

				<section id="contact-person">
					<div className="row around-xs">
						<div className="col-xs-7 col-lg-2">
							<h3>Partnerships</h3>
							<p>Aiman@supernomadfriendsquad.com</p>
						</div>
						<div className="col-xs-7 col-lg-2">
							<h3>Media Kit and Marketing</h3>
							<p>Blake@supernomadfriendsquad.com</p>
						</div>
						<div className="col-xs-7 col-lg-2">
							<h3>Squad Application Matters</h3>
							<p>Brune@supernomadfriendsquad.com</p>
						</div>
					</div>
				</section>

			</div>
			)
	}
}