
export function getAll() {

    try{
        const caninesJson = sessionStorage.getItem('canines');

        const canines = JSON.parse(caninesJson);

        if (Array.isArray(canines)) {
            return canines;
        }
    }catch (e) {
        console.error('Erro ao recuperar caninos.', e);
    }

    return [];
}

export function create({name, gender, breed}) {

    const canines = getAll();

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

    sessionStorage.setItem('canines', JSON.stringify(canines));
}