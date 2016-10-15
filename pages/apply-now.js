import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import skype from '../icon/skype.png'
import pencil from '../icon/pencil.png'
import gift from '../icon/gift.png'
import businessman from '../icon/businessman.png'
import tie from '../icon/tie.png'


export default class ApplyNow extends React.Component {
   render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Application`} 
        />
        <div className="hero" id="apply-now-hero">
          <div className="overlay">
            <h2 style={{color:'#f3f3f3'}}>Here We Go . . .</h2>
          </div>
        </div>
        
        <section id="proccess" >
          <div className="gallery">
            <h1>The Proccess</h1>
          </div>
          <div className="row center-xs">
            <div className="col-xs-6 col-lg-3">
              <img src={pencil} alt=""/>
              <p>Fill in the application form below.</p>
            </div>
            <div className="col-xs-6 col-lg-3">
              <img src={skype} alt=""/>
              <p>We set up a skype call interview.</p>
            </div>
            <div className="col-xs-6 col-lg-3">
              <img src={tie} alt=""/>
              <p>We assess all applicants and select 50 Super Nomad Friend Squad Members. "12 Angry Men" style.</p>
            </div>
            <div className="col-xs-6 col-lg-3">
              <img src={gift} alt=""/>
              <p>Once approved we will send you an awesome care package to all our successful applicants.</p>
            </div>
          </div>
        </section>

        <section id="application-form" style={{backgroundColor:'#ecf0f1'}}>
          <div className="gallery">
            <h1>Application Form</h1>
          </div>
          
          <div className="container">
          
            <form netlify-data="true" name="application" action="success">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="Sandy H. Warmbuns" />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" placeholder="sandy@warm.buns" />
              <label htmlFor="skype">Skype ID:</label>
              <input type="text" name="skype" placeholder="the.warmest.bun" />

              <label htmlFor="gender" className="gender">Gender:</label>
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="occupation">What do you do for a living?</label>
              <input type="text" name="occupation" placeholder="Bun Warmer" />
              
              <label htmlFor="citizenship">Country of Citizenship:</label>
              <input type="text" name="citizenship" placeholder="Narnia" />
              
              <label htmlFor="remote-work">
                Are you currently working remotely?
              </label>
              <label htmlFor="yes" className="yes-no">
                <input type="radio" name="remote-work" value="yes" id="yes"/>Yes 
              </label>
              <label htmlFor="no" className="yes-no" style={{marginTop:'0'}}>
                <input type="radio" name="remote-work" value="no" id="no"/>No 
              </label>
            
              <label htmlFor="gender">Income Level?</label>
              <select name="gender" id="gender">
                <option value="25k">0 - $25,000</option>
                <option value="25k-75k">$25,000 - $75,000</option>
                <option value="75k-150k">$75,000 - $150,000</option>
                <option value="150k">$150,000 and above</option>
              </select>

              <label htmlFor="about-you">
                Tell us a little about yourself. About your daily routines.
              </label>
              <textarea type="textarea" name="about-you" placeholder="" />
              
              <label htmlFor="why">
                Why do you want to join our program?
              </label>
              <textarea type="why" name="why" placeholder="" />
              
              <div className="row">
                <button className="col-xs-12">
                  <Link >Submit</Link>
                </button>
              </div>
            </form>
            
          </div>
        </section>
      </div>
    )
  }
}