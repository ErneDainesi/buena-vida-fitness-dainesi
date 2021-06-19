import React from 'react';
import {useHistory} from 'react-router-dom';

export const HomePageContainer = () => {
	const history = useHistory();
	return <main className="home-container">
		<div className="home-header">
			<h1 className="home-title">Bienvenido</h1>
			<h3 className="home-description">Algun detalle mas</h3>
			<button className="btn btn-light-green" onClick={() => history.push("/productos")}>Ver Productos</button>
		</div>
	</main>
}
