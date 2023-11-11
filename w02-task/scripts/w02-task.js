/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brinley Lott'
let currentYear = '2023'
let profilePicture = 'images/brinley.webp'


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#imageElement');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of Brinley Lott`);

/* Step 5 - Array */

let favoriteFoods = ['apples', 'bananas', 'curry', 'french fries'];
foodElement.textContent = `${favoriteFoods}`;
let additionalFavoriteFood = 'pizza';
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


