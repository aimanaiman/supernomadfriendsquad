import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link, IndexLink } from 'react-router';
import style from './Nav.scss'
import logo1 from '../image/logo.png'




export class Nav extends React.Component {
constructor(props) {
super(props)
this.state = {
open: false
}
}

render() {
return (
		<header>
			<nav className="navbar">
				<Link to={prefixLink('/')} id="logo"><img src={logo1} alt=""/></Link>
				<ul className="menu" id="topNav">	
					<li>
						<Link to={prefixLink('/how/')}>How It Works</Link>
					</li>
					<li>
						<Link to={prefixLink('/itinerary/')}>Itinerary</Link>
					</li>
					<li>
						<Link to={prefixLink('/apply-now/')}>
							Apply Now
						</Link>
					</li>
				</ul>
		 </nav>
	 </header>

		);
	}
}
export default Nav