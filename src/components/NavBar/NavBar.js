import React, {useContext} from 'react';
import Logo from '../../images/logo-buena-vida-circle.png'
import {CartWidget} from './components/CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../contexts/CartContext/CartContext';

export const NavBar = () => {
	const {isCartEmpty} = useContext(CartContext);
	return <>
		<nav className="desktop-nav">
			<div className="logo-title">
				<Link to="/">
					<img src={Logo} alt="logo" className="logo-img" />
				</Link>
				<h1 className="nav-title">Buena Vida Fitness</h1>
			</div>
			<div className="nav-links">
				<Link className="nav-link" to="/">Inicio</Link>
				<div className="dropdown">
					<Link className="nav-link" to="/productos/todo">
						Productos
						<FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
					</Link>
					<div className="dropdown-content">
						<Link className="dropdown-link" to="/productos/frutos-secos">Frutos Secos</Link>
						<Link className="dropdown-link" to="/productos/frutos-rojos">Frutos Rojos</Link>
						<Link className="dropdown-link" to="/productos/cereales">Cereales</Link>
						<Link className="dropdown-link" to="/productos/semillas">Semillas</Link>
					</div>
				</div>
				<Link className="nav-link" to="/nosotros">Nosotros</Link>
				<Link className="nav-link" to="/contacto">Contacto</Link>
				{!isCartEmpty() && <CartWidget />}
			</div>
		</nav>
	</>;
}

