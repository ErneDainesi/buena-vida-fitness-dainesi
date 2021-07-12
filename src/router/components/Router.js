import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemListContainer from '../../screens/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from '../../screens/ItemDetailContainer/ItemDetailContainer';
import {HomePageContainer} from '../../screens/HomePageContainer/HomePage';
import {PurchaseSuccess} from '../../screens/CartContainer/components/Cart/components/PurchaseSuccess/PurchaseSuccess';
import {CartContainer} from '../../screens/CartContainer/CartContainer';

export const Router = () => {
	return <>
		<Switch>
			<Route exact path="/">
				<HomePageContainer />
			</Route>
			<Route exact path="/productos/:category">
				<ItemListContainer />
			</Route>
			<Route exact path="/nosotros"></Route>
			<Route exact path="/contacto"></Route>
			<Route exact path="/itemDetailContainer/:id">
				<ItemDetailContainer />
			</Route>
			<Route exact path="/cart">
				<CartContainer />
			</Route>
			<Route exact path="/purchaseSuccess/:id">
				<PurchaseSuccess />
			</Route>
		</Switch>
	</>
}
