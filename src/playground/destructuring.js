// array destructuring

const address = ['1299 S. Juniper Street', 'Philadelphia', 'Pensylvania', ' 19876'];

const item = ['Coffee (iced)', '2.00', '3.50', '2.75'];

const [drink,,price] = item;

console.log(`A medium ${drink} costs ${price}.`)


// using the comma as the first item in destructuring means to not assign a variable
// to the first element in the array.

// const[, city, state = 'New York'] = address;

// console.log(`You are in ${address[1]} ${address[2]}.`);

// console.log(`You are in ${city}  ${state}.`);

// object destructuring
// const book = {

//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {

//        name: 'penguin'
//     }

// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// const person = {

//     name: 'Andrew',
//     age: 26,
//     location:  {
//         city: 'Philadelphia',
//         temp: 92

//     }

// }

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${person.name} is ${person.age}.`);

// console.log(`${firstName} is ${age}.`);

// if (person.location.temp && person.location.city) {

//     console.log(`It's ${person.location.temp} in ${person.location.city}.`);

// }

// const { city, temp: temperature } = person.location;

// if ( city && temperature ) {

//     console.log(`It's ${temperature} in ${city}.`);
// }



