import React, {useEffect, useState} from 'react';
import Card from '../../../../components/Card/Card';
import {useHistory} from 'react-router-dom';
import {getStorageRef} from '../../../../firebase/firebase';

const Item = props => {
	const {title, imgUrl, id, description, price} = props.itemData;
	const [imgRef, setImgRef] = useState(null);
	const history = useHistory();
	useEffect(() => {
		const storageRef = getStorageRef();
		const finalRef = storageRef.child(imgUrl);
		finalRef.getDownloadURL()
			.then(url => {
				setImgRef(url);
			})
			.catch(err => console.error(err));
	}, [imgUrl])
	return <Card title={title} imgUrl={imgRef} id={id}
		cardBody={<>
			<p className="item-description">{description}</p>
			<p className="item-price">{`$${price}`}</p>
		</>} cardButton={
			<button className="btn btn-dark-green" onClick={() =>
				history.push(`/itemDetailContainer/${id}`)}>Ver Detalle
			</button>
		} />
}

export default Item;

