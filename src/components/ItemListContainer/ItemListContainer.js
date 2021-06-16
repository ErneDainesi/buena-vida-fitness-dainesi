import React, {useState, useEffect} from 'react';
import ItemList from './components/ItemList/ItemList'
import img1 from '../../images/portada-almendras.jpg';
import img2 from '../../images/mix-frutos-secos.jpg';
import img3 from '../../images/cereales-cuadrados.jpg';
import img4 from '../../images/mix-semillas.jpg';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const data = [
	{
		id: '1',
		price: 100,
		title: 'Almendras',
		description: 'Pack de almendras frescas',
		imgUrl: img1
	},
	{
		id: '2',
		price: 100,
		title: 'Mix Frutos Secos',
		description: 'Bolsa de mix de frutos secos',
		imgUrl: img2
	},
	{
		id: '3',
		price: 100,
		title: 'Cereales Cuadrados',
		description: 'Rellenos de chocolate blanco',
		imgUrl: img3
	},
	{
		id: '4',
		price: 100,
		title: 'Mix Semillas',
		description: 'Variedad de semillas',
		imgUrl: img4
	}
];


export const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const myPromise = () => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(data), 2000);
		})
	};
	useEffect(() => {
		myPromise()
			.then(data => setItems(data))
			.catch(err => console.error(err));
	}, []);
	return items.length < 1 ? <LoadingSpinner /> : <ItemList items={items} />;
}
