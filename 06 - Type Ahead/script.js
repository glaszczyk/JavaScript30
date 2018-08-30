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
    const currentList = document.querySelector('.suggestions');
    const listParent = currentList.parentNode;
    
    console.info('Fetching cities…');
    
    const cities = await fetchCities();
    const newCityList = createElement('ul', '');
    
    cities.forEach( city => {
        const li = createElement('li', city.city);
        const span = createElement('span', city.population);
        addElementTo(span, li);
        addElementTo(li, newCityList);
    });
    
    newCityList.classList.add('suggestions');
    listParent.replaceChild(newCityList, currentList);
}

function createElement(tag, content) {
    const element = document.createElement(tag);
    element.innerHTML += content;
    return element;
}

function addElementTo(element, target) {
    return target.appendChild(element);
}