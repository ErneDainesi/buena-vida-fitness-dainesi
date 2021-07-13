import React, {useContext} from 'react';
import {PurchaseContext} from '../../../../../../contexts/PurchaseContext/PurchaseContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export const PurchaseSuccess = () => {
	const {purchaseId} = useContext(PurchaseContext);
	return <div className="purchase-success">
		<div className="purchase-success-blur">
			<FontAwesomeIcon className="purchase-success-icon" icon={faCheckCircle} />
			<h1 className="purchase-success-title">{`Compra exitosa con id: ${purchaseId}`}</h1>
		</div>
	</div>
}
