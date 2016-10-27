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
					
					<section id="about-us">
						<div className="row gallery" >
							<div className="col-xs-12">
								<h2>About Us</h2>
								<p>You've probably notice that we try not to take ourselves too seriously. While we are delinquent, we are completely devoted and utterly passionate about the work we do here. The SNFS team consists of a individuals from all over the world. Each with his/her own quirks.</p>
								<p>Our days together as a team has been filled with much love and laughter. And we can't wait to extend them love to our squad members.</p>
								<h2></h2>
							</div>
						</div>
					</section>

					<section>
						<div className="row center-xs">
							<div className="col-xs-10">
								<h2>Meet the Team</h2>
							</div>
						</div>

						<div className="row around-xs top-xs team-members">
							
							<div className="col-lg-3 col-md-8 col-xs-12 ">
								<div className="row middle-xs card team-card">
									<div className="col-lg-6 team-img">
										<img src={aiman} alt=""/>
									</div>
									<div className="col-lg-6 team-description">
										<h3>Aiman Farhan</h3>
										<p className="aka">aka Father of Penguins</p>
										<p className="job-title">Strategic Partnership</p>
									</div>
									<div className="col-xs-12 about">
										<p>When not busy slaying the stock markets. Aiman enjoys a lot of comedy and documentaries. Hates using social media, mainly because he’s ridiculously not good at it. Loves animals and weird travel experiences. In this program he will lead expeditions such as “A day at Ninja School” in Tokyo, “Caged Shark Diving” in Cape Town and “Watch Elderly Women Wrestle WWE Style” in Bolivia.</p>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-8 col-xs-12 ">
								<div className="row middle-xs card team-card">
									<div className="col-lg-6 team-img">
										<img src={blake} alt=""/>
									</div>
									<div className="col-lg-6 team-description">
										<h3>Blake Ng</h3>
										<p className="aka">aka Waste of Everyone's Time</p>
										<p className="job-title">Marketing</p>
									</div>
									<div className="col-xs-12 about">
										<p>Once hailed the man with the wrong priorities, Blake is an expert at convincing people to do things they really shouldn’t do. People who he’s convinced have experienced fights with pimps and kayak capsizing in the winter. These are just some of the amazing experiences you could live through with us.</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-8 col-xs-12 ">
								<div className="row middle-xs card team-card">
									<div className="col-lg-6 team-img">
										<img src={brune2} alt=""/>
									</div>
									<div className="col-lg-6 team-description">
										<h3>Brune Charvin</h3>
										<p className="aka">aka Midnight Photographer</p>
										<p className="job-title">Community Manager</p>
									</div>
									<div className="col-xs-12 about">
										<p>Brune makes short videos about stuff, usually food or dance related. She’s yet never yet tried to mix both and isn’t looking forward to it. She also takes photographs of people, because people are great. In this program, she will keep on doing what she does best: being behind the camera and popping out every once in awhile to remind the world she exists.</p>
									</div>
								</div>
							</div>

							<div className="row around-xs team-members-2">
								<div className="col-lg-4 col-md-8 col-xs-12 ">
								<div className="row middle-xs card team-card">
									<div className="col-lg-6 team-img">
										<img src={beck} alt=""/>
									</div>
									<div className="col-lg-6 team-description">
										<h3>Beck Power</h3>
										<p className="aka">aka Catch Flights not Feelings</p>
										<p className="job-title">Operations</p>
									</div>
									<div className="col-xs-12 about">
										<p>Beck Power is a fan of three things: travel, girls, and entrepreneurship. (OK and anything with cheese on it.) She runs NomadFly, a small flights startup based out of Bangkok, and various projects related to innovation and tech. Once a stand up comic, Beck has a weakness for gin & tonic and also random activities where there is an element of danger. When she grows up, she wants to be Amy Poehler and Tina Fey’s lovechild. Beck is most excited to sample cheeses in every place.</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-8 col-xs-12 ">
								<div className="row middle-xs card team-card">
									<div className="col-lg-6 team-img">
										<img src={suki} alt=""/>
									</div>
									<div className="col-lg-6 team-description">
										<h3>Suki Lim</h3>
										<p className="aka">aka Naugthy Asian</p>
										<p className="job-title">Community Manager</p>
									</div>
									<div className="col-xs-12 about">
										<p>This urban chick called Suki, loves the digital world of social media. Anything from posting a tweet to filming a video on Youtube. She also loves comedy therefore you’ll see her performing standup comedy on a Tuesday night. She works out on her free time and codes for moolah!</p>
									</div>
								</div>
							</div>
							</div>



						</div>
					</section>
				</div>
			)
	}
}