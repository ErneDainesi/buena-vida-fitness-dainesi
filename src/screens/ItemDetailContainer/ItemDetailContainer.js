import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {itemDataService} from '../../services/itemDataService';

export const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState(undefined);
	const {id: selectedItemId} = useParams();
	useEffect(() => {
		itemDataService()
			.then(data => data.filter(item => (item.id === selectedItemId) && setItemDetail(item)))
			.catch(err => console.error(err))
	}, [selectedItemId])
	return itemDetail ? <ItemDetail key={itemDetail.id} detail={itemDetail} /> : <LoadingSpinner />;
}

