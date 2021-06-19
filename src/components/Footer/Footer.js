import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export const Footer = () => {
	return <footer className="footer-container">
		<p className="footer-brand-name">Buena Vida Fitness</p>
		<div className="footer-social-media">
			<Link className="footer-social-media-link">
				<FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
			</Link>
		</div>
		<div className="personal-info">
			<p className="footer-signature">Diseñado por Ernesto Dainesi</p>
			<Link className="footer-social-media-link">
				<FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
			</Link>
		</div>
	</footer>
}
