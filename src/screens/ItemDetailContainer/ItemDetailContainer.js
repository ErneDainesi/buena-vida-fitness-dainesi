import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {itemDetailDataService} from '../../services/itemDataService';

export const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState(undefined);
	const {id: selectedItemId} = useParams();
	useEffect(() => {
		itemDetailDataService()
			.get()
			.then(querySnapshot => {
				if (querySnapshot.size === 0) {
					console.error("No results");
				} else {
					querySnapshot.docs.find(doc => {
						if (doc.id === selectedItemId) {
							setItemDetail({id: doc.id, ...doc.data()});
							return true;
						}
						return false;
					})
				}
			})
			.catch(err => console.error(err));
	}, [selectedItemId]);
	return itemDetail ? <ItemDetail key={itemDetail.id} detail={itemDetail} /> : <LoadingSpinner />;
}

