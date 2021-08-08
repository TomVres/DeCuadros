export async function getItems() {
    const response = await fetch('/json/mockdb.json');
    const data = await response.json();
    return data.items;
}

export async function getCategories() {
    const response = await fetch('/json/mockdb.json');
    const data = await response.json();
    return data.categories;
}

export async function getItemDetail(id) {
    const products = await getItems();
    const product = products.find(element => element.id == id);
    return product;
}

export async function getItemsByCategory(category) {
    const products = await getItems();
    const filteredProducts = products.filter(element => element.category == category);
    return filteredProducts;
}

