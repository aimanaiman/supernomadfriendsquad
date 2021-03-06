import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import osaka from '../image/osaka.jpg'
import chiangmai from '../image/Chiang Mai.jpg'
import talin from '../image/talin.jpg'
import split from '../image/split.jpg'
import buenos from '../image/buenos air.jpg'
import lima from '../image/lima.jpg'

import coworkingEvent from '../image/coworking-events.jpg'
import bolivian from '../image/bolivian-women-wrestling.jpg'
import bbq from '../image/bbq.jpg'
import excursion from '../image/excursion.jpg'
import ninja from '../image/ninja.jpg'
import swim from '../image/seal-yoga.jpg'


export default class Itinerary extends React.Component {
  render () {
    return (
      <div>
        <Helmet title={`${config.siteTitle} | Itinerary`} />

        <section id="adventure">
          <div id="adventure-overlay">
            <div className="row center-xs" id="adventure-description">
              <div className="col-xs-8">
                 <h2>Choose Your Own Adventure</h2>
              </div>
              <div className="col-xs-8 col-lg-6">
                <p>What we do and how we live will take shape of the squad. Your personality will inevitably inject itself to our experience for the year, and vice versa. Be as inclusive as you want or as independent soul 'searchy' as you need to be. It's all good.
                </p>
                <button style={{backgroundColor:'#e67e22', marginTop:'30px'}}>
                  <Link to={prefixLink('/apply-now/')}>
                    Apply Now
                  </Link>
              </button>
              </div>
            </div>
          </div>      
        </section>
        
        <section id="destinations">
        <div className="row">
          <div className="col-xs center-xs">
            <h1>Destinations</h1>
          </div>
        </div>
          <div className="row center-xs">
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={osaka} alt=""/>
                <p>Osaka, Japan</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={chiangmai} alt=""/>
                <p>Chiang Mai, Thailand</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={talin} alt=""/>
                <p>Tallinn, Estonia</p>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={split} alt=""/>
                <p>Split, Croatia</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={buenos} alt=""/>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 col-md-3">
              <div className="center-xs">
                <img src={lima} alt=""/>
                <p>Lima, Peru</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{backgroundColor:'#ecf0f1'}} id="relax" >
          <div className="row center-xs" id="relax-overlay">
            <div className="col-xs-12">
              <h3>Spending Two Months in Each City</h3>
              <div className="row gallery">
                <div className="col-lg-7 col-xs-9">
                  <p>
                    A balance between quenching your wanderlust and immersing yourself in a local culture, at a relaxing pace.
                  </p>
                  <button style={{backgroundColor:'#e67e22'}}><Link to={prefixLink('/apply-now/')}>Apply Now</Link></button>
                </div>
              </div>
            </div>
          </div>
       </section>

       <section id="good-day" >
          <div className="row gallery">
            <div className="col-xs-12">
              <h2>A Good Day</h2>
              <p>7am - Wake up and go for a run in the city park.</p>
              <p>8am - Have breakfast at a local cafe and get some work done.
              </p>
              <p>12pm - Lunch with a few of your squad members. Conspire and plan out your group trip this weekend.</p>
              <p>2pm - Resume work at the coworking space.</p>
              <p>5pm - Take a nap and get ready for the evening.</p>
              <p>7pm - Dinner and some street food.</p>
              <p>9pm - Casual drinks and make new local friends.</p>
              <p>11pm - Go to sleep and be ready for tommorrow.</p>
            </div>
          </div>
       </section>

       <section id="activities">
          <div className="row">
            <div className="col-xs-offset-1">
              <h2>Normal Activities</h2>
            </div>
          </div>
          <div className="row around-xs">
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={coworkingEvent} alt=""/>
                <p>Meetups and Professional Events.</p>
              </div>
            </div>
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={bbq} alt=""/>
                <p>Social activities: Drinks at the bar. Or a good ol' fashioned bbq.</p>
              </div>
            </div>
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={excursion} alt=""/>
                <p>Touristy site visits. Or a weekend excursions to the outskirts of the city.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-offset-9">
              <h2 style={{paddingTop:'50px'}} >... Not So Normal Activities</h2>
            </div>
          </div>
          <div className="row around-xs">
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={ninja} alt=""/>
                <p>Ninja School: You know you want to.</p>
              </div>
            </div>
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={bolivian} alt=""/>
                <p>Bolivian women wrestling: You probably don't want to.</p>
              </div>
            </div>
            <div className="col-xs-8 col-md-10 col-lg-4 ">
              <div className="card activity-card">
                <img src={swim} alt=""/>
                <p>Yoga with seals</p>
              </div>
            </div>
          </div>
       </section>

       </div>
      )
  }
}