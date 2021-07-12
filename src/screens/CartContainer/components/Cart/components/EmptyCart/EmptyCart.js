import React from 'react';
import {useHistory} from 'react-router-dom';

export const EmptyCart = () => {
	const history = useHistory();
	return <div className="empty-cart">
		<h1>Carrito Vacío</h1>
		<button className="btn btn-dark-green" onClick={() => history.push('/productos/todo')}>Volver a productos</button>
	</div>
}
