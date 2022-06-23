import * as Canine from "../data-providers/api/canines.js";
import * as Breed from "../data-providers/api/breed.js";

const caesPage = function () {

    let breeds = [];
    let caninesForm;
    let nameInput;
    let genderInput;
    let breedInput;
    let caninesTableBody;

    async function initBreeds() {
        const _breeds = await Breed.getAll();
        if(Array.isArray(_breeds)) {
            breeds = _breeds;
        }
    }

    function initElements() {
        caninesForm = document.getElementById('form-caninos');
        nameInput = document.getElementById('nome');
        genderInput = document.getElementById('sexo');
        breedInput = document.getElementById('raca');
        caninesTableBody = document.querySelector('#caninos-tbl tbody');

        if(breeds.length){
            const breedsElements = [
                '<option selected disabled="disabled" value="">Selecione a raça...</option>',
                ...breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`)
            ];
            breedInput.innerHTML = breedsElements.join('');
            breedInput.value = '';
        }
    }

    function initListeners() {
        caninesForm.addEventListener('submit', e => {
            e.preventDefault();
            addCanine();
        });
    }

    async function addCanine() {
        if(await createCanine()) {
            cleanForm();
            await refreshCaninesTable();
        }
    }

    function cleanForm() {
        nameInput.value = '';
        genderInput.value = '';
        breedInput.value = '';
    }

    async function createCanine() {

        const name = nameInput.value.trim();
        const gender = genderInput.value.trim();
        const breed = breedInput.value.trim();

        if( ! name) {
            alert('Preencha o nome do canino.');
            return false;
        }

        if( ! gender) {
            alert('Selecione o sexo do canino.');
            return false;
        }

        if( ! breed) {
            alert('Selecione a raça do canino.');
            return false;
        }

        await Canine.create({name, gender, breed});

        return true;
    }

    async function refreshCaninesTable() {

        const trs = (await Canine.getAll())
            .map(canine => {
                const breed = breeds.find(breed => breed.id == canine.breed);

                return {
                    ...canine,
                    gender_name: canine.gender === 'M' ? 'Masculino' : 'Feminino',
                    breed_name: breed ? breed.name : '[Raça desconhecida]'
                }
            })
            .map(canine => (
            `<tr>
                <td class="center">${canine.id}</td>
                <td>${canine.name}</td>
                <td>${canine.gender_name}</td>
                <td>${canine.breed_name}</td>
                <td class="center">${canine.created_at}</td>
            </tr>`
        ));

        caninesTableBody.innerHTML = trs.join('');
    }

    return {
        init: async () => {
            await initBreeds();
            await initElements();
            await initListeners();
            await refreshCaninesTable();
            await cleanForm();
        }
    }
}();

document.addEventListener('DOMContentLoaded', async () => {
    await caesPage.init();
});
