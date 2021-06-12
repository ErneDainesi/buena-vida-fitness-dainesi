import React from 'react';
import Item from '../Item/Item';

const ItemList = props => {
	return <div className="item-list-container">
		{props.items.map(item => <Item key={item.id} itemData={item} />)}
	</div>
};

export default ItemList;
