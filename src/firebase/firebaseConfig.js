import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export class FirebaseConfig {
	// PRODUCTS
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

	async getProductByMainCategory(mainCategory) {
		try {
			const q = query(collection(db, 'taiyaki'), where('category-main', '==', mainCategory));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id, ...doc.data(),
			}));
		} catch (error) {
			console.error('getProductByMainCategory', error);
		}
	};

}