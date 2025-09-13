import axios from "axios";
axios.defaults.headers.common['x-api-key'] =
    'live_ONbKV4NVOaPRb31Nncmw8MrSJaxrtb3B8CqBEH8TaOH4ZqkShFJz03wJbuBMNXH5';
// 1. масив порід
export function fetchBreeds() {
    return axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => response.data);
};
// 2. одна порода
export function fetchCatByBreeds(breedId) {
    return axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data);
};

