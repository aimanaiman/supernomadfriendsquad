import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import aiman from '../image/me.jpg'
import blake from '../image/blake.jpg'
import brune2 from '../image/brune2.jpg'
import beck from '../image/beck.jpg'
import suki from '../image/suki.jpg'


export default class AboutUs extends React.Component {
	render() {
		return (
				<div>
					<Helmet title={`${config.siteTitle} | About Us`} />
					
				  <div className="hero" id="about-us-hero">
		        <div className="overlay row">
		          <h2 style={{color:'#fff'}}>The Super Nomad Friend Squad Support Staff Team</h2>
		        </div>
		      </div>

					<section id="about-us">
						<div className="row gallery" >
							<div className="col-xs-12">
								<h2>About Us</h2>
								<p>The Super Nomad Friend Squad team consist of a remote team from different parts of the world. We handle business with the ethics and proficiency of a Navy Seal. Filled with tons love and of juvenille laughter at the same time, everyday.</p>
								<p>We wish to extend the proficiencies that we've acquired professionally and our innate ability for fun, to all our applicants.</p>
							</div>
						</div>
					</section>

					<section>
						<div className="row center-xs">
							<h1>Meet The Team</h1>
						</div>
						<div className="row top-xs around-xs" id="the-team">
							
							<div className="col-lg-4 col-md-6 col-xs-12">
								<div className="row around-xs middle-xs">
									<div className="col-lg-5">
										<img src={aiman} alt=""/>
									</div>
									<div className="col-lg-5">
										<h3>Aiman Farhan</h3>
										<p className="aka">aka Father of Penguins</p>
										<p className="job-title">Strategic Partnership</p>
									</div>
								</div>
								<p className="member-profile">When not busy slaying the stock markets. Aiman enjoys a lot of comedy and documentaries. Hates using social media, mainly because he’s ridiculously not good at it. Loves animals and weird travel experiences. In this program he will lead expeditions such as “A day at Ninja School” in Tokyo, “Caged Shark Diving” in Cape Town and “Watch Elderly Women Wrestle WWE Style” in Bolivia.</p>
							</div>

							<div className="col-lg-4 col-md-6 col-xs-12">
								<div className="row around-xs middle-xs">
									<div className="col-lg-5">
										<img src={blake} alt=""/>
									</div>
									<div className="col-lg-5">
										<h3>Blake Ng</h3>
										<p className="aka">aka Waste of Everybody's Time</p>
										<p className="job-title">Marketing</p>
									</div>
								</div>
								<p className="member-profile">Once hailed the man with the wrong priorities, Blake is an expert at convincing people to do things they really shouldn’t do. People who he’s convinced have experienced fights with pimps, kayak capsizes in the winter and even herpes(just kidding). These are just some of the amazing experiences you could live through with us.</p>
							</div>

							<div className="col-lg-4 col-md-6 col-xs-12">
								<div className="row around-xs middle-xs">
									<div className="col-lg-5">
										<img src={brune2} alt=""/>
									</div>
									<div className="col-lg-5">
										<h3>Brune Charvin</h3>
										<p className="aka">aka Midnight Photographer</p>
										<p className="job-title"> Community Manager</p>
									</div>
								</div>
								<p className="member-profile">Brune makes short videos about stuff, usually food or dance related. She’s yet never yet tried to mix both and isn’t looking forward to it. She also takes photographs of people, because people are great. In this program, she will keep on doing what she does best: being behind the camera and popping out every once in awhile to remind the world she exists.</p>
							</div>

							<div className="col-lg-4 col-md-6 col-xs-12">
								<div className="row around-xs middle-xs">
									<div className="col-lg-5">
										<img src={beck} alt=""/>
									</div>
									<div className="col-lg-5">
										<h3>Beck Power</h3>
										<p className="aka">aka Catch Flights not Feelings</p>
										<p className="job-title"> Operations</p>
									</div>
								</div>
								<p className="member-profile">Beck Power is a fan of three things: travel, girls, and entrepreneurship. (OK and anything with cheese on it.) She runs NomadFly, a small flights startup based out of Bangkok, and various projects related to innovation and tech. Once a stand up comic, Beck has a weakness for gin  & tonic and also random activities where there is an element of danger.  When she grows up, she wants to be Amy Poehler and Tina Fey’s lovechild. Beck is most excited to sample cheeses in every place.</p>
							</div>

							<div className="col-lg-4 col-md-6 col-xs-12">
								<div className="row around-xs middle-xs">
									<div className="col-lg-5">
										<img src={suki} alt=""/>
									</div>
									<div className="col-lg-5">
										<h3>Suki Lim</h3>
										<p className="aka">aka Naughty Asian</p>
										<p className="job-title"> Community Manager</p>
									</div>
								</div>
								<p className="member-profile">This urban chick called Suki, loves the digital world of social media. Anything from posting a tweet to filming a video on Youtube. She also loves comedy therefore you’ll see her performing standup comedy on a Tuesday night. She works out on her free time and codes for moolah!</p>
							</div>

						</div>
					</section>
				</div>
			)
	}
}