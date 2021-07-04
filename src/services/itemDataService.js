import {database} from '../firebase/firebase';

export const itemListDataService = filter => {
	const itemCollection = database.collection("inventory");
	const filterderCollection = itemCollection.where("category", "==", filter);
	return filter === 'todo' ? itemCollection : filterderCollection;
}

export const itemDetailDataService = () => {
	return database.collection("inventory");
}
