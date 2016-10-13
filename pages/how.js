import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'


import bed1 from '../image/accomodation3.jpg'
import coworking from '../image/cowork-cape-town.jpg'
import activities from '../image/activity3.jpg'

import transportation from '../image/transportation2.jpg'
import comfort from '../image/comfort.jpg'
import growth from '../image/growth.jpg'
import support from '../image/support.jpg'


export default class How extends React.Component {
 
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | The Program`} 
        />
      <div className="hero" id="how-hero">
        <div className="overlay">
          <h2 style={{color:'#fff'}}>An Epic Year . . .</h2>
        </div>
      </div>
        <section id="whats-included">
          <div className="center-xs">
            <h1>What's Included</h1>
          </div>
          <div className="row gallery center-xs">
            <div className="col-xs-7 col-lg-5 col-md-5" >
              <img src={bed1} alt="" />
              <p>Accommodation</p>
            </div>
            <div className="col-xs-7 col-lg-5 col-md-5">
              <img src={transportation} alt=""/>
              <p>Transportation</p>
            </div>
          </div>
          <div className="row gallery center-xs">
            <div className="col-xs-7 col-lg-5 col-md-5">
              <img src={coworking} alt=""/>
              <p>Coworking space and 24/7 Wi-fi Access</p>
            </div>
            <div className="col-xs-7 col-lg-5 col-md-5">
              <img src={activities} alt=""/>
              <p>Local Events and Social Activities.</p>
            </div>
          </div>
          <div className="row gallery" >
            <div className="col-xs-12 col-lg-10 center-xs" id="cost" >
              <h1>Program Cost</h1>
              <p>Downpayment: $5,000</p>
              <p>Monthly: $1,650</p>
            </div>
          </div>
        </section>

        <section id="average">
          <div className="" id="average-overlay">
            <div className="row gallery">
              <div className="col-xs-8">
                <p>The average person pays $2,200 a month to live in an apartment. The average S.N.F.S member pays $1,650 a month to travel the world.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy">
          <div className="row center-xs">
            <div className="col-md-3 col-xs-10">
              <h3>Comfort</h3>
              <img src={comfort} alt=""/>
              <p>We do not sacrifice comfort for budget. All accommodations and logistics are in the mid to high range. You'll be still pushed out of your comfort zone of course.</p>
            </div>
            <div className="col-md-3 col-xs-10">
              <h3>Growth</h3>
              <img src={growth} alt=""/>
              <p>If we travel the world for an entire year and only had fun, but neglect personal professional growth. Then we would have failed our mission.</p>
            </div>
            <div className="col-md-3 col-xs-10">
              <h3>Support</h3>
              <img src={support} alt=""/>
              <p>24/7 ground support from our staff. Need a doctor? A local sim card? Money changer? Tour site advice? Our team will be there for you to the best of our abilities.</p>
            </div>
          </div>
        </section>
        
        <section id="remote-work">
        <div className=""id="remote-work-overlay">
          <div className="row gallery">
            <div className="col-lg-9">
              <h2>Remote Work</h2>
              <p>We are not job providers. All members of the epic squad should have their own jobs throughout our epic journey. However, fear not, as our team can provide guidance and resources for finding employment.</p>
            </div>
          </div>
        </div>
        </section>

        <section id="faq">
           <div className="row gallery">
              <h1>Faq</h1>       
           </div>
           <div className="row center-xs">
              <div className="col-lg-4 col-xs-12 first-lg">
                <h3>What are accommodations like?</h3>
                <p>You will be staying in apartments or hotels, always with your own private room. No budget hostels or anything of the like.</p>
                <h3>Are there any qualifications to apply?</h3>
                <p>No. But we expect our members to have and maintain employment that lets you work remotely during the course of the trip.</p>
              </div> 
              <div className="col-lg-4 col-xs-12 first-xs">
                <h3>Does Super Nomad Friend Squad mean anything?</h3>
                <p>Yes. It means we're terrible at naming things.</p>
                <h3>Do I have to participate for an entire year?</h3>
                <p>Yes. We are looking for squad members to travel for an entire year!</p>
              </div> 
              <div className="col-lg-4 col-xs-12">
                <h3>Are we free to travel independently?</h3>
                <p>You are free to travel and rejoin the squad whenever you feel like it. Do you what you gotta do.</p>
                <h3>Can I join as a couple or with a friend?</h3>
                <p>Hell yeah! We've seen those <strong>#relationshipgoals</strong> photos and videos. We know what you're up to. Let's make it happen. We also offer a monthly discount if you share accommodations.</p>
              </div> 
           </div>
        </section>
      </div>
    )
  }
}
