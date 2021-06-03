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

// WIP
// Esta era mi idea al principio para manejar el navbar
// con responsive, creo que lo mejor seria dejar todo en un mismo componente
// y hacer un display:none; en pantallas mas chicas y ocultar los links
// y lograr que se muestren una vez se haga click en el menu (ver carpeta utils)
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
