import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'
import fbThumb from './image/snfs-meta-img.jpg'

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
  <html lang="en" prefix="og: http://ogp.me/ns#">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      <meta name="google-site-verification" content="iaZGTuta5qUDQhKuKc6lMHQdBSSNAbNBf8-1LH7TOmk" />
      <meta property="og:title" content="Super Nomad Friend Squad" />
      <meta property="og:site_name" content="Super Nomad Friend Squad" />
      <meta property="og:url" content="https://www.supernomadfriendsquad.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Travel the World while Working Remotely" />
      <meta property="og:image" content={fbThumb} />

      <meta itemprop="name" content="Super Nomad Friend Squad" />
      <meta itemprop="url" content="https://www.supernomadfriendsquad.com/" />
      <meta itemprop="description" content="Travel the World while Working Remotely" />
      <meta itemprop="thumnbnailUrl" content="http://res.cloudinary.com/super-nomad-friend-squad-llc/image/upload/v1476908433/snfs-meta-img_pgguam.jpg" />
      <link rel="image_src" href="http://res.cloudinary.com/super-nomad-friend-squad-llc/image/upload/v1476908433/snfs-meta-img_pgguam.jpg"/>
      <meta itemprop="image" content="http://res.cloudinary.com/super-nomad-friend-squad-llc/image/upload/v1476908433/snfs-meta-img_pgguam.jpg" />

      <meta name="twitter:title" content="Super Nomad Friend Squad" />
      <meta name="twitter:image" content="http://res.cloudinary.com/super-nomad-friend-squad-llc/image/upload/v1476908433/snfs-meta-img_pgguam.jpg" />
      <meta name="twitter:url" content="https://www.supernomadfriendsquad.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@supernomadfs" />
      <meta name="twitter:description" content="Travel the World while Working Remotely" />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      {css}
      <script dangerouslySetInnerHtml={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77344556-1', 'auto');
ga('send', 'pageview');`}} />


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

