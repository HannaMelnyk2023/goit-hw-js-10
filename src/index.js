import { fetchBreeds, fetchCatByBreeds } from './cat-api';
const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
// start
select.style.display = 'none';
error.style.display = 'none';
// show loader
loader.style.display = 'block';

fetchBreeds()
    .then(breeds => {
        select.innerHTML = breeds
            .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
            .join('');
        select.style.display = 'block';
    })
    .catch(() => (error.style.display = 'block'))
    .finally(() => {
        loader.style.display = 'none';
    });

// вибір породи
select.addEventListener('change', () => {
    const breedId = select.value;
    loader.style.display = 'block';
    catInfo.style.display = 'none';
    error.style.display = 'none';

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
            error.style.display = "block";
        })
        .finally(() => {
            loader.style.display = "none";
        });
});
