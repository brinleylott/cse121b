/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
const templeList = [];
const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'


/* async displayTemples Function */
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


/* async getTemples Function using fetch()*/
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


/* reset Function */
const reset = () => {
    // Clear all child elements of templesElement
    templesElement.innerHTML = '';
};


/* sortBy Function */

const sortBy = function(temples) {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of sortBy
    const filter = document.getElementById('sortBy').value;

    // Use a switch statement to handle different cases
    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temp => temp.location.includes('Utah')));
            break;

        case 'nonutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
            break;

        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temp => new Date(temp.dedicatedDate) < new Date(1950, 0, 1)));
            break;

        case 'all':
        default:
            // No filter, just use temples as the argument
            displayTemples(temples);
            break;
    }
};

const templesData = [
    { location: 'Salt Lake City, Utah', dedicatedDate: '1893-04-06' },
    { location: 'Los Angeles, California', dedicatedDate: '1956-03-11' },
];

sortBy(templesData);
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();
console.log(templeList)

/* Event Listener */
