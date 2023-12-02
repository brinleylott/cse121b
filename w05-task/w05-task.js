/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
const templeList = [];
const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'

const displayTemples = (temples) => {
    temples.forEach(element => {
        const article = document.createElement('article');
        const templeName = document.createElement('h3');
        const image = document.createElement('img');

        templeName.textContent = element.templeName;
        image.setAttribute('src', element.imageUrl);
        image.setAttribute('alt', element.location);
        templeName.textContent = element.location;

        article.appendChild(templeName); 
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async displayTemples Function */

const getTemples = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        templeList.push(...data); // Spread the data into the templeList array
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
}

/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();
console.log(templeList)

/* Event Listener */
