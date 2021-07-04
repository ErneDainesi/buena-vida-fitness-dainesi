import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './components/ItemList/ItemList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {itemListDataService} from '../../services/itemDataService';

const NOT_LOADING = false;
const LOADING = true;

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(NOT_LOADING);
	const {category: selectedCategory} = useParams();
	useEffect(() => {
		setLoading(LOADING);
		itemListDataService(selectedCategory)
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.error("No results");
				} else {
					setItems(querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}}));
				}
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(NOT_LOADING));
	}, [selectedCategory]);
	return loading ? <LoadingSpinner /> : <ItemList items={items} />;
}

export default ItemListContainer;
