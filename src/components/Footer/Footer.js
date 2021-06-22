import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../images/logo-buena-vida-circle.png'

export const Footer = () => {
	return <footer className="footer-container">
		<div className="footer-social-media">
			<p className="footer-social-media-title">Seguinos en Instagram</p>
			<a className="footer-social-media-link" href="https://www.instagram.com/buenavida.fitness/" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
			</a>
		</div>
		<img src={Logo} alt="logo" className="logo-img" />
		<div className="personal-info">
			<p className="footer-signature">Diseñado por Ernesto Dainesi</p>
			<a className="footer-social-media-link" href="https://www.linkedin.com/in/ernesto-dainesi/" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
			</a>
		</div>
	</footer>
}
