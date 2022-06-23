const canines = [];

export function getAll() {
    return canines;
}

export function create({name, gender, breed}) {

    const maxId = canines.reduce((carry, item) => (
        item.id > carry
            ? item.id
            : carry
    ), 0);

    const now = new Date();

    canines.push({
        id: maxId + 1,
        name,
        gender,
        breed,
        created_at: now.toLocaleDateString('pt-BR')
    });
}