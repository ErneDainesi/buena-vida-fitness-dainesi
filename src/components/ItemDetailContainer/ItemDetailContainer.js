import React, {useEffect, useState} from 'react';
import ItemDetail from './components/ItemDetail/ItemDetail';
import img1 from '../../images/portada-almendras.jpg';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const itemDetailData = {
	id: '1',
	price: 100,
	title: 'Almendras',
	description: 'Pack de almendras frescas',
	imgUrl: img1
};



export const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState(undefined);

	useEffect(() => {
		const fetchedData = () => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(itemDetailData), 2000)
			})
		}
		fetchedData()
			.then(data => setItemDetail(data))
			.catch(err => console.error(err))
	}, [])
	return itemDetail ? <ItemDetail key={itemDetail.id} detail={itemDetail} /> : <LoadingSpinner />;
}

