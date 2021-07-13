import React, {useState, useContext} from 'react';
import Logo from '../../images/logo-buena-vida-circle.png'
import {CartWidget} from './components/CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../contexts/CartContext/CartContext';

export const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const {isCartEmpty} = useContext(CartContext);
	return <>
		<nav className="desktop-nav">
			<div className="logo-title">
				<Link to="/">
					<img src={Logo} alt="logo" className="logo-img" />
				</Link>
				<h1 className="nav-title">Buena Vida Fitness</h1>
				<div className="mobile-menu" onClick={() => setToggleMenu(!toggleMenu)}><FontAwesomeIcon icon={toggleMenu ? faTimes : faBars} /></div>
			</div>
			<div className={`mobile-nav ${toggleMenu ? "show-menu" : ""}`}>
				<div className="nav-links">
					<Link className="nav-link" to="/" onClick={() => setToggleMenu(false)}>Inicio</Link>
					<div className="dropdown">
						<Link className="nav-link" to="/productos/todo" onClick={() => setToggleMenu(false)}>
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
					<Link className="nav-link" to="/nosotros" onClick={() => setToggleMenu(false)}>Nosotros</Link>
					<Link className="nav-link" to="/contacto" onClick={() => setToggleMenu(false)}>Contacto</Link>
					{!isCartEmpty() && <CartWidget handleMenu={setToggleMenu} />}
				</div>
			</div>
		</nav>
	</>;
}

