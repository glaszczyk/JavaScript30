document.addEventListener('DOMContentLoaded', main);

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const fetchCities = async () => {
    try {
        const response = await fetch(endpoint)
        const json = await response.json()
        return await json;
    } catch(error) { return error }
}

async function main() {
    console.info('Fetching cities…');
    const cities = await fetchCities();
    
    const searchInput = document.querySelector('.search');
    
    searchInput.addEventListener('keyup', (event) => searchFor(cities, event.target.value));
}

searchFor = (list, string) => {
    const results = list.filter( ({city}) => city.toLowerCase().includes(string.toLowerCase()) );
    displayResults(results);
}

displayResults = (cities) => {
    const prepareCities = listOfCities(cities);

    const oldCityList = document.querySelector('.suggestions');
    const listParent = oldCityList.parentNode;

    const newCityList = createElement('ul', '');

    addElementTo(prepareCities, newCityList);

    newCityList.classList.add('suggestions');

    listParent.replaceChild(newCityList, oldCityList);
}

listOfCities = (cities) => 
    cities.reduce( (list, {city, population}) => {
        const li = createElement('li', city);
        const span = createElement('span', population);
        addElementTo(span, li);
        list.appendChild(li);
        return list;
    }, document.createElement('ul'));

function createElement(tag, content) {
    const element = document.createElement(tag);
    element.innerHTML += content;
    return element;
}

function addElementTo(element, target) {
    return target.appendChild(element);
}