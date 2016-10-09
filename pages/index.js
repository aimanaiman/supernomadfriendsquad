import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

import squad from '../icon/squad.png'
import city from '../icon/city.png'
import year from '../icon/year.png'


export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle} 
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="hero" id="home-hero">
          <div className="overlay">
            <div className="hero-cta">
              <h1 style={{color: 'white',position:'relative',textAlign:'center'}} >
                Application for 2017 is now open
              </h1>
            </div>
          </div>
        </div>

        <section style={{backgroundColor:'#ecf0f1'}} >
          <div className="container">
            <p>
              The Super Nomad Friend Squad brings together 50 remote professionals to travel, work and play and maybe fight crime. We handle all the hassles of solo-travel such as flights and accommodations so you can focus on what matters.
            </p>
            <p>
              We believe that 2 months allows just the right amount of time for one to truly live in a country, to form connections with local cultures as well as businesses while maintaining the excitement of a nomadic lifestyle.
            </p>
            <button style={{textAlign:'center',marginTop:'20px',textTransform:'uppercase',backgroundColor:'rgba(230, 126, 34,1.0)'}}>
              <Link to={prefixLink('/how/')} style={{color:'white'}} >
              How It Works</Link>
            </button>
          </div>
        </section>

        <section>
          <div className="row center-xs gallery" id="services">
            <div className="col-xs-7 col-md-4">
              <img src={squad} alt=""/>
              <p>50 Remote Professionals</p>
            </div>
            <div className="col-xs-7 col-md-4">
              <img src={city} alt=""/>
              <p>6 Cities</p>
            </div>
            <div className="col-xs-7 col-md-4">
              <img src={year} alt="One Year"/>
              <p>12 Months</p>
            </div>
          </div>
        </section>

         <section className="" id="call-to-arms">
          <div id="call-to-arms-overlay">
            <div className="row container">
              <div className="col-xs-10">
                <h1>We Want You</h1>
                <p>If you are open minded and independent.</p>
                <p>A remote work ninja who got his/her shit together.</p>
                <p>Loves the nomadic lifestyle and want to share it with a like minded community.</p>
                 <p>Committed to a year of epic adventure.</p>
                 <p>It SUPER helps if you're funny.</p>
              </div>
            </div>     
          </div>
        </section>

        <section>
          <div className="row gallery">
            <div className="col-xs-12 col-lg-8">
              <h2>The Community</h2>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-xs-12 col-lg-8">
              <p>It's predicted that in 2035 there would be 1 billion people will be working remotely. This of course is just a natural progression due to the advent of ever advancing technology.</p>
              <p>SNFS members will be playing the part of human guinea pigs in this movement. Where will discover and refine possible ways of living as digital nomads. We believe there is a way to translate the stability, healthy routines and sense of community that traditionally came along in a normal 9-5 life, into a remote work lifestyle.</p>
            </div>
          </div>
          <div className="col-xs-12 center-xs">
            <button style={{backgroundColor:'#e67e22'}}>
              <Link to={prefixLink('/itinerary/')}>It's A Cause I Can Get With</Link>
            </button>
          </div>
        </section>

      </div>
    )
  }
}
