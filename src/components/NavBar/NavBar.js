import React from 'react';
import Logo from '../../images/logo-buena-vida-circle.png'
import {CartWidget} from './components/CartWidget/CartWidget';

export const NavBar = () => {
	return <>
		<nav className="desktop-nav">
			<div className="logo-title">
				<img src={Logo} alt="logo" className="logo-img" />
				<h1 className="nav-title">Buena Vida Fitness</h1>
			</div>
			<ul className="nav-links">
				<li><a className="nav-link" href="\#">Inicio</a></li>
				<li><a className="nav-link" href="\#">Productos</a></li>
				<li><a className="nav-link" href="\#">Nosotros</a></li>
				<li><a className="nav-link" href="\#">Contacto</a></li>
				<CartWidget />
			</ul>
		</nav>
	</>;
}

