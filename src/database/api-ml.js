export async function getItems(query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data = await response.json();
    return data.results;
}

export async function getItemDetail(id) {
    //ej. id MLA919142773
    const response = await fetch(`https://api.mercadolibre.com/items/${id}#json`);
    const data = await response.json();
    return data;
}

