const breeds = [];

export function getAll() {
    return breeds;
}

export function create(name) {

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
}