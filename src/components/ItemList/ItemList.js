import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import img1 from '../../images/portada-almendras.jpg';
import img2 from '../../images/mix-frutos-secos.jpg';
import img3 from '../../images/cereales-cuadrados.jpg';

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
	}
];


const ItemList = () => {
	const [items, setItems] = useState([]);
	const myPromise = () => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(data), 2000);
		})
	};
	const fetchData = () => {
		myPromise()
			.then(data => setItems(data))
			.catch(err => console.error(err));
	};
	useEffect(() => {
		fetchData();
	}, []);
	return <div className="item-list-container">
		{items.map(item => <Item key={item.id} itemData={item} />)}
	</div>
};

export default ItemList;
