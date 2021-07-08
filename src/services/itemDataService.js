import {database} from '../firebase/firebase';

export const itemListDataService = filter => {
	const itemCollection = database.collection("inventory");
	const filterderCollection = itemCollection.where("category", "==", filter);
	return filter === 'todo' ? itemCollection : filterderCollection;
}

export const itemDetailDataService = () => {
	return database.collection("inventory");
}

export const ordersDataService = () => {
	return database.collection("orders");
}

export const updateItemStock = (item, quantity) => {
	const inventory = itemDetailDataService();
	const newStock = item.stock - quantity;
	inventory.doc(item.id).update({...item, stock: newStock});
}

