import * as Breed from "../data-providers/api/breed.js";

const racasPage = function () {

    let breedForm;
    let breedInput;
    let breedsTableBody;

    function initElements() {
        breedForm = document.getElementById('form-raca');
        breedInput = document.getElementById('raca');
        breedsTableBody = document.querySelector('#racas-tbl tbody');
    }

    function initListeners() {
        breedForm.addEventListener('submit', e => {
            e.preventDefault();
            addBreed();
        });
    }

    async function addBreed() {
        if(await createBreed()) {
            cleanForm();
            await refreshBreedsTable();
        }
    }

    function cleanForm() {
        breedInput.value = '';
    }

    async function createBreed() {

        const name = breedInput.value.trim();

        if( ! name) {
            alert('Preencha o campo raça.');
            return false;
        }

        await Breed.create(name);
        return true;
    }

    async function refreshBreedsTable() {

        const trs = (await Breed.getAll()).map(breed => (
            `<tr>
                <td class="center">${breed.id}</td>
                <td>${breed.name}</td>
                <td class="center">${breed.created_at}</td>
            </tr>`
        ));

        breedsTableBody.innerHTML = trs.join('');
    }

    return {
        init: () => {
            initElements();
            initListeners();
            cleanForm();
            refreshBreedsTable();
        }
    }
}();




document.addEventListener('DOMContentLoaded', () => {
    racasPage.init();
});




