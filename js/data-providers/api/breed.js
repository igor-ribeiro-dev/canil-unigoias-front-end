import * as Http from '../api/client-http.js';

export async function getAll() {
    const racas = await Http.get('/racas');

    return racas.map(raca => ({
        id: raca.id,
        name: raca.descricao,
        created_at: (new Date(raca.dataInclusao)).toLocaleDateString('pt-BR')
    }));
}

export async function create(name) {

    await Http.post('/racas', {
        descricao: name
    })
}