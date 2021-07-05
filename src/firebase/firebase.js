import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyABrXHak_V26f7fLRxtibiJ0mG58RZsfYE",
	authDomain: "buena-vida-fitness.firebaseapp.com",
	projectId: "buena-vida-fitness",
	storageBucket: "buena-vida-fitness.appspot.com",
	messagingSenderId: "645943436692",
	appId: "1:645943436692:web:952ec1a1611b1350065b81"
};

const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();
export const getStorageRef = () => {
	let storage = fb.storage();
	return storage.ref('images');
}

