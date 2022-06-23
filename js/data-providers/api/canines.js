import * as Http from '../api/client-http.js';

export async function getAll() {

    const canines = await Http.get('/caes');

    return canines.map(canine => ({
        id: canine.id,
        name: canine.nome,
        gender_name: canine.sexo,
        breed: canine.raca.id,
        created_at: (new Date(canine.dataInclusao)).toLocaleDateString('pt-BR')
    }));
}

export async function create({name, gender, breed}) {

    await Http.post(`/racas/${breed}/caes`, {
        nome: name,
        sexo: gender
    });
}