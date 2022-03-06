import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs, getDoc, doc, query, where} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: (process.env.API_KEY),
    authDomain: "taiyaki-85b82.firebaseapp.com",
    projectId: "taiyaki-85b82",
    storageBucket: "taiyaki-85b82.appspot.com",
    messagingSenderId: "217962657157",
    appId: "1:217962657157:web:1628eb2bf78b3da6b0c0ec",
    measurementId: "G-BQQCPGSNX6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export class FirebaseConfig {
	async getProducts() {
		try {
			const productCollection = collection(db, 'taiyaki');
			const docSnapshot = await getDocs(productCollection);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	};

	async getProductById(id) {
		try {
			const productCollection = doc(db, 'taiyaki', id);
			const docSnapshot = await getDoc(productCollection);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id, ...docSnapshot.data(),
				};
			}
		} catch (error) {
			console.error('getProductById', error);
		}
	};

	async getProductByCategory(category) {
		try {
			const q = query(collection(db, 'taiyaki'), where('category', '==', category));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id, ...doc.data(),
			}));
		} catch (error) {
			console.error('getProductByCategory', error);
		}
	};

	// async addOrder(items, name, lastname, price, total) {
	// 	try {
	// 		const newOrder = {
	// 			name,
	// 			lastname,
    //             items,
	// 			date: Timestamp.now().toDate(),
	// 			price,
	// 			total,
	// 		};
	// 		const docRef = await addDoc(collection(db, 'orders'), newOrder);
	// 		return docRef.id;
	// 	} catch (error) {
	// 		console.error('addOrder', error);
	// 	}
	// };
}