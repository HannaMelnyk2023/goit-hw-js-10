import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import { fetchBreeds, fetchCatByBreeds } from './cat-api';


const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
// const error = document.querySelector('.error');


function showLoader() {
    loader.style.display = "block";
}
function hideLoader() {
    loader.style.display = "none";
}
// function showError() {
//     error.style.display = "block";
// }
// function hideError() {
//     error.style.display = "none";
// }

select.style.display = 'none';
catInfo.style.display = 'none'
// hideError();
showLoader();


fetchBreeds()
    .then(breeds => {
        select.innerHTML = breeds
            .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
            .join('');
        select.style.display = 'block';
        new SlimSelect({
            select: '.breed-select',
        });


    })
    .catch(() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
        hideLoader();
    });


select.addEventListener('change', () => {
    const breedId = select.value;

    showLoader();
    // hideError()
    catInfo.style.display = 'none';


    fetchCatByBreeds(breedId)
        .then(data => {
            const cat = data[0];
            const breed = cat.breeds[0];

            catInfo.innerHTML =
                `<img src = "${cat.url}" alt ="${breed.name}" width = "300">
            <h2>${breed.name}</h2>
            <p>${breed.description}</p>
            <p><b>Temperament:</b> ${breed.temperament}</p>`;
            catInfo.style.display = "block";
        })
        .catch(() => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(() => {
            hideLoader();
        });
});
