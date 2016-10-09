import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import '../css/flexboxgrid.min.css'
import '../css/main.scss'

import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'


import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (

      <div>
        <Nav />

        <div>
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  },
})
