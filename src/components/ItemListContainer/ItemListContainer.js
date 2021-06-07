import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export const ItemListContainer = () => {
	return <div>
		<ItemCount productName="Almendras" stock={5} initial={1} />
	</div>
}
