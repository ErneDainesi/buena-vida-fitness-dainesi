import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../../../contexts/CartContext/CartContext';
import {PurchaseContext} from '../../../../contexts/PurchaseContext/PurchaseContext';

export const EndPurchase = ({detail: selectedItem, amount, handlePurchaseStatus, changeStock}) => {
	const history = useHistory();
	const {addToCart, emptyCart} = useContext(CartContext);
	const {handlePurchaseSuccess} = useContext(PurchaseContext);
	return <div className="end-purchase">
		<button className="btn btn-dark-green end-purchase-btn" onClick={() => {
			addToCart(selectedItem, amount);
			handlePurchaseSuccess(false);
			history.push('/cart');
		}}>Finalizar Compra</button>
		<button className="btn btn-light-green cancel-purchase-btn" onClick={() => {
			changeStock(0);
			emptyCart();
			handlePurchaseSuccess(false);
			handlePurchaseStatus(false);
		}}>Cancelar</button>
	</div>
}
