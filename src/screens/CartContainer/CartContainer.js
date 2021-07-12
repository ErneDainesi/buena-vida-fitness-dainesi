import React, {useContext} from 'react';
import {PurchaseSuccess} from './components/Cart/components/PurchaseSuccess/PurchaseSuccess';
import {Cart} from './components/Cart/Cart';
import {PurchaseContext} from '../../contexts/PurchaseContext/PurchaseContext';

export const CartContainer = () => {
	const {purchaseSuccess} = useContext(PurchaseContext);
	return purchaseSuccess ? <PurchaseSuccess /> : <Cart />;
}
