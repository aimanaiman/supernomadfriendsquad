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
          <h1 style={{color:'#fff'}}>An Epic Year . . .</h1>
        </div>
      </div>


      <section id="whats-included-2">
        <div className="row middle-xs center-xs around-lg how">
          <div className="col-lg-5 col-md-6 col-xs-12" style={{padding:'0'}} >
            <div className="program-cost">
              <h2>Program Cost</h2>
              <p>Downpayment: $4,000</p>
              <p>Monthly: $1,800  (11 months)</p>
            </div>
            <div className="whats-included">
              <h2>What's Included</h2>
              <ul>
                <li>
                  <p>A private room in an apartment or hotel.</p>
                </li>
                <li>
                  <p>All travel between countries (travel to 1st destination and home are on your own)</p>
                </li>
                <li>
                  <p>24/7 access to a workspace with wifi.</p>
                </li>
                <li>
                  <p>Social and Professional events. Squad activities and excursions.</p>
                </li>
                <li>
                  <p>Support staff for the entire year.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-xs-12 included-items">
           <div className="row around-xs ">
             <div className="col-lg-6 col-md-6 col-xs-6 included-card">
              <img src={coworking} alt=""/>
              
            </div> <div className="col-lg-6 col-md-6 col-xs-6 included-card">
              <img src={bed1} alt=""/>
             
            </div> <div className="col-lg-6 col-md-6 col-xs-6 included-card">
              <img src={transportation} alt=""/>
              
            </div> <div className="col-lg-6 col-md-6 col-xs-6 included-card">
              <img src={activities} alt=""/>
              
            </div>
           </div>
          </div>
        </div>
      </section>


        

        <section id="average">
          <div className="" id="average-overlay">
            <div className="row gallery">
              <div className="col-xs-10 col-lg-6">
                <p>"The average person pays $2,200 a month to live in an apartment. The average S.N.F.S member pays $1,750 a month to travel the world."</p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy">
          <div className="row center-xs">
            <div className="col-md-3 col-xs-10">
              <h3>Collaboration</h3>
              <img src={comfort} alt=""/>
              <p>The core value of our program is our community. By developing a network with individuals from all walks of life, we create plenty of opportunity for collaboration.</p>
            </div>
            <div className="col-md-3 col-xs-10">
              <h3>Growth</h3>
              <img src={growth} alt=""/>
              <p>If we travel the world for an entire year but neglect personal and professional growth. Then we would have failed our mission.</p>
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
                <p>You are free to travel and rejoin the squad whenever you feel like it. Do what you gotta do.</p>
                <h3>Can I join as a couple or with a friend?</h3>
                <p>Hell yeah! We've seen those <strong>#relationshipgoals</strong> photos and videos. We know what you're up to. Let's make it happen. We also offer a monthly discount if you share accommodations.</p>
              </div> 
           </div>
        </section>
      </div>
    )
  }
}
