import React from 'react';
import Logo from '../images/logo-buena-vida-circle.png'

export const DesktopNavbar = () => {
	return <>
		<nav className="desktop-nav">
			<div className="logo-title">
				<img src={Logo} alt="logo" class="logo-img" />
				<h1 className="nav-title">Buena Vida Fitness</h1>
			</div>
			<ul className="nav-links" role="list">
				<li><a className="nav-link" href="#">Inicio</a></li>
				<li><a className="nav-link" href="#">Productos</a></li>
				<li><a className="nav-link" href="#">Nosotros</a></li>
				<li><a className="nav-link" href="#">Contacto</a></li>
			</ul>
		</nav>
	</>;
}

export const MobileNavbar = () => {
	return <>
		<nav className="mobile-nav">
			<div className="logo-title">
				<img src={Logo} alt="logo" class="logo-img" />
				<h1 className="nav-title">Buena Vida Fitness</h1>
			</div>
			<div className="mobile-nav-menu" id="mobile-menu">
				<span className="mobile-nav-menu-icon"></span>
				<span className="mobile-nav-menu-icon"></span>
				<span className="mobile-nav-menu-icon"></span>
			</div>
			<ul className="nav-links" id="mobile-menu-links" role="list">
				<li><a className="nav-link" href="#">Inicio</a></li>
				<li><a className="nav-link" href="#">Productos</a></li>
				<li><a className="nav-link" href="#">Nosotros</a></li>
				<li><a className="nav-link" href="#">Contacto</a></li>
			</ul>
		</nav>
	</>;
}
