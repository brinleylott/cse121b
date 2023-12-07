/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Brinley Lott',
    photo: '../w02-task/images/brinley.webp',
    favoriteFoods: [
        'Sweet Potatoes',
        'Meet Balls',
        'Dognuts',
        'Steak',
        'Soup'
      ],
      hobbies: [
        'hiking',
        'designing',
        'painting',
        'crafts'
      ],
      placesLived: [
        'Clovis CA',
        'Rexburg ID'
      ],

}




/* Populate Profile Object with placesLive objects */
// This occurs outside of the object definition.
myProfile.placesLived.push(
  {
    place: 'Clovis, CA',
    length: '17 years',
    place: 'Rexburg, ID',
    length: '1 year'
  }
);



/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#favorite-foods').textContent = myProfile.favoriteFoods;
document.querySelector('#hobbies').textContent = myProfile.hobbies;
document.querySelector('#places-lived').textContent = myProfile.placesLived;
document.querySelector('#photo').setAttribute('src', photo);
document.querySelector('#photo').setAttribute('alt', 'Profile Picture')

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

  const placesLivedDL = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    // Create HTML <dt> element and put its place property in the <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    // Create HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    // Append the HTML <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
    placesLivedDL.appendChild(dt);
    placesLivedDL.appendChild(dd);
});
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


