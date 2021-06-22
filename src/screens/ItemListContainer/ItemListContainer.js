import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './components/ItemList/ItemList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {ItemDataService} from '../../services/ItemDataService';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const {category: selectedCategory} = useParams();
	useEffect(() => {
		ItemDataService()
			.then(data => {
				setItems(data.filter(item => ((item.category === selectedCategory) || (selectedCategory === 'todo')) ? item : false));
				setLoading(false);
			})
			.catch(err => console.error(err));
	}, [selectedCategory, loading]);
	return loading ? <LoadingSpinner /> : <ItemList items={items} />;
}

export default ItemListContainer;
