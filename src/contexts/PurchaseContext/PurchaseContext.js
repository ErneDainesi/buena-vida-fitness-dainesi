import React, {useState, createContext} from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = props => {
	const [purchaseSuccess, setPurchaseSuccess] = useState(false);
	const [purchaseId, setPurchaseId] = useState("");
	const handlePurchaseSuccess = value => {
		setPurchaseSuccess(value);
	}
	const handlePurchaseId = newId => {
		setPurchaseId(newId);
	}
	return <PurchaseContext.Provider value={{purchaseSuccess, handlePurchaseSuccess, purchaseId, handlePurchaseId}}>
		{props.children}
	</PurchaseContext.Provider>
}
