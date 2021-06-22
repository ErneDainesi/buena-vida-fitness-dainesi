import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './components/ItemList/ItemList'
import img1 from '../../images/portada-almendras.jpg';
import img2 from '../../images/mix-frutos-secos.jpg';
import img3 from '../../images/cereales-cuadrados.jpg';
import img4 from '../../images/mix-semillas.jpg';
import img5 from '../../images/mix-frutos-rojos.jpg';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const data = [
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


const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const {category: selectedCategory} = useParams();
	const myPromise = () => {
		return new Promise((resolve) => setTimeout(() => resolve(data), 2000))
	};
	useEffect(() => {
		myPromise()
			.then(data => {
				setItems(data.filter(item => ((item.category === selectedCategory) || (selectedCategory === 'todo')) ? item : false));
				setLoading(false);
			})
			.catch(err => console.error(err));
	}, [selectedCategory, loading]);
	console.log(loading);
	return loading ? <LoadingSpinner /> : <ItemList items={items} />;
}

export default ItemListContainer;
