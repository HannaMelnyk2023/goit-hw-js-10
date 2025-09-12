import axios from "axios";
axios.defaults.headers.common['x-api-key'] =
    'live_ONbKV4NVOaPRb31Nncmw8MrSJaxrtb3B8CqBEH8TaOH4ZqkShFJz03wJbuBMNXH5';

export function fetchBreeds() {
    return axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => response.data);
};

