import React from 'react';
import Logo from '../../images/logo-buena-vida-circle.png'
import {CartWidget} from './components/CartWidget/CartWidget';
import {Link} from 'react-router-dom';

export const NavBar = () => {
	return <>
		<nav className="desktop-nav">
			<div className="logo-title">
				<Link to="/">
					<img src={Logo} alt="logo" className="logo-img" />
				</Link>
				<h1 className="nav-title">Buena Vida Fitness</h1>
			</div>
			<ul className="nav-links">
				<li>
					<Link className="nav-link" to="/">Inicio</Link>
				</li>
				<li>
					<Link className="nav-link" to="productos">Productos</Link>
				</li>
				<li>
					<Link className="nav-link" to="nosotros">Nosotros</Link>
				</li>
				<li>
					<Link className="nav-link" to="contacto">Contacto</Link>
				</li>
				<li>
					<CartWidget />
				</li>
			</ul>
		</nav>
	</>;
}

