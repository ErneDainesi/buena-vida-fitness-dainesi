import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../../../contexts/CartContext';

export const EndPurchase = ({detail, handlePurchaseStatus, changeStock}) => {
	const history = useHistory();
	const {emptyCart} = useContext(CartContext);
	return <div className="end-purchase">
		<button className="btn btn-dark-green end-purchase-btn" onClick={() => history.push('/cart')}>Finalizar Compra</button>
		<button className="btn btn-light-green cancel-purchase-btn" onClick={() => {
			changeStock(0);
			emptyCart(detail);
			handlePurchaseStatus(false);
		}}>Cancelar</button>
	</div>
}
