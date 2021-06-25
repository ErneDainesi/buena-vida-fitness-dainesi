import React from 'react';
import {useHistory} from 'react-router-dom';

export const EndPurchase = ({handlePurchaseStatus, changeStock}) => {
	const history = useHistory();
	return <div className="end-purchase">
		<button className="btn btn-dark-green end-purchase-btn" onClick={() => history.push('/cart')}>Finalizar Compra</button>
		<button className="btn btn-light-green cancel-purchase-btn" onClick={() => {
			changeStock(0);
			handlePurchaseStatus(false);
		}}>Cancelar</button>
	</div>
}
