// live_ONbKV4NVOaPRb31Nncmw8MrSJaxrtb3B8CqBEH8TaOH4ZqkShFJz03wJbuBMNXH5
// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_ONbKV4NVOaPRb31Nncmw8MrSJaxrtb3B8CqBEH8TaOH4ZqkShFJz03wJbuBMNXH5";
import { fetchBreeds } from "./cat-api";
const select = document.querySelector('.breed-selector');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
// start
select.style.display = "none";
error.style.display = "none";
// show loader
loader.style.display = "block";

fetchBreeds()
    .then(breeds => {
        select.innerHTML = breeds
            .map(breeds => '<option value="${breed.id}">$breed.name}</option>')
            .join("");
        select.style.display = "block";
    })
    .catch(() => error.style.display = "block")
    .finally(() => {
        loader.style.display = "none";
    })

