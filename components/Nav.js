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
			<nav className="nav">
			<div className="nav__left-wrapper">
				<ul className="nav__left">
					<li className="nav__list">
						<Link to={prefixLink('/')} id="logo"><img src={logo1} alt=""/></Link>	
					</li>
				</ul>
			</div>
				<label htmlFor="toggle" className="nav__toggle">
						<Link class="nav__toggle-text">MENU</Link>
				</label>
					<input type="checkbox" id="toggle" />
					

					<div className="nav__right-wrapper">
						<ul className="nav__right">	
							<li className="nav__list">
								<Link className="item" to={prefixLink('/how/')}>How It Works</Link>
							</li>
							<li className="nav__list">
								<Link className="item" to={prefixLink('/itinerary/')}>Itinerary</Link>
							</li>
							<li className="nav__list">
								<Link className="item" to={prefixLink('/apply-now/')}>
									Apply Now
								</Link>
							</li>
						</ul>
					</div>
				
			  </nav>
	 </header>
		);
	}
}
export default Nav