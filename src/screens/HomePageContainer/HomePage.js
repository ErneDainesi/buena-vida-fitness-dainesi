import React from 'react';
import {useHistory} from 'react-router-dom';

export const HomePageContainer = () => {
	const history = useHistory();
	return <main className="home-container">
		<div className="home-header">
			<h1 className="home-title">Bienvenido</h1>
			<h3 className="home-description">Te llevamos los mejores frutos secos y rojos para una buena vida</h3>
			<button className="btn btn-light-green" onClick={() => history.push("/productos/todo")}>Ver Productos</button>
		</div>
	</main>
}
