import React from 'react';
import {useHistory} from 'react-router-dom';

export const EmptyCart = () => {
	const history = useHistory();
	return <div className="empty-cart">
		<div className="empty-cart-blur">
			<h1 className="empty-cart-title">Carrito Vacío</h1>
			<button className="btn btn-dark-green" onClick={() => history.push('/productos/todo')}>Volver a productos</button>
		</div>
	</div>
}
