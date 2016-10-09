import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link, IndexLink } from 'react-router';
import style from './Nav.scss'

import facebook from '../icon/facebook.png'
import twitter from '../icon/twitter.png'
import instagram from '../icon/instagram.png'



export class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div className="footer">
					<div className="row center-xs">
						<Link to={prefixLink('https://www.facebook.com/supernomadfriendsquad')} target="_blank"><img src={facebook} alt="" /></Link>
						<Link to={prefixLink('https://twitter.com/supernomadfs')} target="_blank"><img src={twitter} alt=""/></Link>
						<Link to={prefixLink('https://www.instagram.com/supernomadfriendsquad')} target="_blank"><img src={instagram} alt=""/></Link>
					</div>
					<form name="subscribe" action="thank-you" netlify>
						<h4 style={{textAlign:'center'}}>For more News and Updates</h4>
					  <p>
					    <input type="email" name="email" placeholder="Email" />
					    <button>SUBSCRIBE</button>
					  </p>
					</form>
				</div>
					
				<ul className="row center-xs">
					<li className="col-xs col-lg-1">
						<Link to={prefixLink('/about-us/')}>About Us</Link>
					</li>
					<li className="col-xs col-lg-1">
						<Link to={prefixLink('/contact-us/')}>Contact Us</Link>
					</li>
					<li className="col-xs col-lg-1">
						<Link to={prefixLink('/privacy-policy/')}>Privacy Policy</Link>
					</li>
				</ul>
						
			</footer>
			)
	}
}

export default Footer