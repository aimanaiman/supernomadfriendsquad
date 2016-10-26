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
            {"name": "description", "content": "Super Nomad Friend Squad is a travel group for digital nomads."},
            {"name": "keywords", "content": "digital, nomad, remote, work, travel, world"},
          ]}
        />
        <div className="hero" id="home-hero">
          <div className="overlay">
            <div className="hero-cta">
              <h1 style={{color: 'white',position:'relative',textAlign:'center'}} >
                Application for June 2017 is now open
              </h1>
            </div>
          </div>
        </div>
        <section style={{backgroundColor:'#ecf0f1'}} id="what">
          <div className="container">
            <p>
              Super Nomad Friend Squad brings together a community of 50 digital nomads from across the globe to spend a year working, traveling, and exploring 6 cities around the world.
            </p>
            <p>
             Be part of a community of like minded remote professionals. Equally committed to personal and professional growth, as they are to having unnecessary juvenille fun. On top of that, we take care of all your logistics so you can focus on what matters to you most.
            </p>
            <button style={{textAlign:'center',marginTop:'30px',textTransform:'uppercase',backgroundColor:'rgba(230, 126, 34,1.0)'}}>
              <Link to={prefixLink('/how/')} style={{color:'white',fontSize:'15px'}}>
                How It Works
              </Link>
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
                <p>If you are an open minded and independent individual.</p>
                <p>Loves the nomadic lifestyle and want to share it with a like minded community.</p>
                 <p>Committed to a year of epic adventure.</p>
                 <p>It <strong>SUPER</strong> helps if you're funny.</p>
              </div>
            </div>     
          </div>
        </section>

        <section id="community">
          <div className="row gallery">
            <div className="col-xs-12 col-lg-10">
              <h2>The Community</h2>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-xs-12 col-lg-10">
              <p>It's predicted that in 2035 there would be 1 billion people will be working remotely. This of course is just a natural progression due to the advent of ever advancing technology. Which explains the current rise of the digital nomad movement.</p>
              <p>SNFS members will be playing the part of human guinea pigs in this movement. Figuring out what works and what doesn't.</p>
            </div>
          </div>
          <div className="col-xs-12 center-xs">
            <button style={{backgroundColor:'#e67e22', marginTop:'30px'}}>
              <Link to={prefixLink('/itinerary/')} style={{color:'white',fontSize:'16px'}} >It's A Cause I Can Get With</Link>
            </button>
          </div>
        </section>

      </div>
    )
  }
}
