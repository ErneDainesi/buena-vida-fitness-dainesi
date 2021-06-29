import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../../../contexts/CartContext/CartContext';

export const EndPurchase = ({detail: selectedItem, amount, handlePurchaseStatus, changeStock}) => {
	const history = useHistory();
	const {addToCart, emptyCart} = useContext(CartContext);
	return <div className="end-purchase">
		<button className="btn btn-dark-green end-purchase-btn" onClick={() => {
			history.push('/cart');
			addToCart(selectedItem, amount);
		}}>Finalizar Compra</button>
		<button className="btn btn-light-green cancel-purchase-btn" onClick={() => {
			changeStock(0);
			emptyCart();
			handlePurchaseStatus(false);
		}}>Cancelar</button>
	</div>
}
