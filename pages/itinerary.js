import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import osaka from '../img/osaka.jpg'
import chiangmai from '../img/Chiang Mai.jpg'
import talin from '../img/talin.jpg'
import split from '../img/split.jpg'
import buenos from '../img/buenos air.jpg'
import lima from '../img/lima.jpg'


export default class Itinerary extends React.Component {
  render () {
    return (
      <div>
        <Helmet title={`${config.siteTitle} | Itinerary`} />

        <section id="destinations">
        <div className="row">
          <div className="col-xs center-xs">
            <h1>Destinations</h1>
          </div>

        </div>
          <div className="row center-xs">
            <div className="col-lg-3 col-xs-12">
              <div className="center-xs">
                <img src={osaka} alt=""/>
                <p>Osaka, Japan</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
              <div className="center-xs">
                <img src={chiangmai} alt=""/>
                <p>Chiang Mai, Thailand</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
              <div className="center-xs">
                <img src={talin} alt=""/>
                <p>Tallinn, Estonia</p>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-lg-3 col-xs-12">
              <div className="center-xs">
                <img src={split} alt=""/>
                <p>Split, Croatia</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
              <div className="center-xs">
                <img src={buenos} alt=""/>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
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
              <h3>Spending 2 Months in Each City</h3>
              <div className="row gallery">
                <div className="col-lg-7 col-xs-12">
                  <p>
                    A balance between sating your wanderlust and immersing yourself in a local culture, at a relaxing pace.
                  </p>
                  <button style={{backgroundColor:'#e67e22'}}><Link to={prefixLink('/apply-now/')}>Apply Now</Link></button>
                </div>
              </div>
            </div>
          </div>
       </section>

       <section id="good-day">
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
       </div>
      )
  }
}