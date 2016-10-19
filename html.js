import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
},

render () {
  const head = Helmet.rewind()
  let css
  if (process.env.NODE_ENV === 'production') {
  css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

return (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      {css}
      <script dangerouslySetInnerHTML={{ __html: `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1602175506753620');
    fbq('track', 'PageView');
    fbq('track', 'CompleteRegistration');
  `}}
/>

    </head>
    <body>
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
      )
    },
  })

