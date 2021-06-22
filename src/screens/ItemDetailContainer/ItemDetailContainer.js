import React, {useEffect, useState} from 'react';
import ItemDetail from './components/ItemDetail/ItemDetail';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {useParams} from 'react-router-dom';
import img1 from '../../images/portada-almendras.jpg';
import img2 from '../../images/mix-frutos-secos.jpg';
import img3 from '../../images/cereales-cuadrados.jpg';
import img4 from '../../images/mix-semillas.jpg';
import img5 from '../../images/mix-frutos-rojos.jpg';

const itemDetailData = [
	{
		id: '1',
		price: 100,
		title: 'Almendras',
		description: 'Pack de almendras frescas',
		category: 'frutos-secos',
		imgUrl: img1
	},
	{
		id: '2',
		price: 100,
		title: 'Mix Frutos Secos',
		description: 'Bolsa de mix de frutos secos',
		category: 'frutos-secos',
		imgUrl: img2
	},
	{
		id: '3',
		price: 100,
		title: 'Cereales Almohaditas',
		description: 'Rellenos de chocolate blanco',
		category: 'cereales',
		imgUrl: img3
	},
	{
		id: '4',
		price: 100,
		title: 'Mix Semillas',
		description: 'Lino, sésamo, chía y girasol',
		category: 'semillas',
		imgUrl: img4
	},
	{
		id: '5',
		price: 100,
		title: 'Mix Frutos Rojos',
		description: 'Frambuesas y arandanos',
		category: 'frutos-rojos',
		imgUrl: img5
	}
];



export const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState(undefined);
	const {id: selectedItemId} = useParams();
	const filterId = (item, selectedItemId) => {
		if (item.id === selectedItemId) {
			setItemDetail(item);
		}
	}
	useEffect(() => {
		const fetchedData = () => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(itemDetailData), 2000)
			})
		}
		fetchedData()
			.then(data => data.filter(item => filterId(item, selectedItemId)))
			.catch(err => console.error(err))
	}, [selectedItemId])
	return itemDetail ? <ItemDetail key={itemDetail.id} detail={itemDetail} /> : <LoadingSpinner />;
}

