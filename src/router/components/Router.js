import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemListContainer from '../../screens/ItemListContainer/ItemListContainer';

export const Router = () => {
	return <>
		<Switch>
			<Route exact path="/"></Route>
			<Route exact path="/productos">
				<ItemListContainer />
			</Route>
			<Route exact path="/nosotros"></Route>
			<Route exact path="/contacto"></Route>
		</Switch>
	</>
}
