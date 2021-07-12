import React, {useContext} from 'react';
import {PurchaseContext} from '../../../../../../contexts/PurchaseContext/PurchaseContext';

export const PurchaseSuccess = () => {
	const {purchaseId} = useContext(PurchaseContext);
	return <h1>{`Compra exitosa con id: ${purchaseId}`}</h1>
}
