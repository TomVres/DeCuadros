import { getFirestore } from "../firebase/client.jsx";

export async function getItems() {
    const DB = getFirestore(); //Conexión con DB
    const COLLECTION = DB.collection("products"); //Conexión con la collection
    const data = await COLLECTION.get();
    let items = data.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
    return items;
}

export async function getCategories() {
    const DB = getFirestore(); //Conexión con DB
    const COLLECTION = DB.collection("categories"); //Conexión con la collection
    const data = await COLLECTION.get();
    let categories = data.docs.map((doc) => doc.data().Name);
    return categories;
}

export async function getItemDetail(slug) {
    const products = await getItems();
    const product = products.find(element => element.slug == slug);
    return product;
}


export async function getItemsByCategory(category) {
    const products = await getItems();
    const filteredProducts = products.filter(element => element.category == category);
    return filteredProducts;
}