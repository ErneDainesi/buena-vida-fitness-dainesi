import React, {useContext, useState, useEffect} from 'react';
import {CartContext} from '../../../../../../contexts/CartContext/CartContext';
import Card from '../../../../../../components/Card/Card';
import {getStorageRef} from '../../../../../../firebase/firebase';

export const CartItem = ({item, quantity, changeCartState}) => {
	const {removeFromCart, isCartEmpty} = useContext(CartContext);
	const {id, imgUrl, price, title} = item;
	const [imgRef, setImgRef] = useState(null);
	useEffect(() => {
		const storageRef = getStorageRef();
		const finalRef = storageRef.child(imgUrl);
		finalRef.getDownloadURL()
			.then(url => {
				setImgRef(url);
			})
			.catch(err => console.error(err))
	}, [imgUrl])
	return <Card title={`${title} (x${quantity})`} imgUrl={imgRef} id={id}
		cardBody={<p className="cart-item-price">{`$${price}`}</p>}
		cardButton={
			<button className="btn btn-dark-green" onClick={() => {
				removeFromCart(id);
				isCartEmpty() && changeCartState(true);
			}}>Quitar del Carrito</button>
		} />
}

