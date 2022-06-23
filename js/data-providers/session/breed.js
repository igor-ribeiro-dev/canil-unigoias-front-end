
export function getAll() {

    const breedsJson = sessionStorage.getItem('breeds');

    const breeds = JSON.parse(breedsJson);

    if(Array.isArray(breeds)) {
        return breeds;
    }

    return [];
}

export function create(name) {

    const breeds = getAll();

    const maxId = breeds.reduce((carry, item) => (
        item.id > carry
            ? item.id
            : carry
    ), 0);

    const now = new Date();

    breeds.push({
        id: maxId + 1,
        name,
        created_at: now.toLocaleDateString('pt-BR')
    });

    sessionStorage.setItem('breeds', JSON.stringify(breeds));
}