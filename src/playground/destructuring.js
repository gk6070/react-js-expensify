
//object destruturing

// console.log('destruct');
// const person = {
//     name: 'gopal',
//     age: 26,
//     location: {
//         city: 'BANgaloe',
//         temp: 92
//     }

// };
// const {name = 'opal', age} =person;

// console.log(`${name} is ${age}`);

// const {city, temp}=person.location;
// if(temp && city){
//     console.log(`${temp} in ${city}`)
// }

//array destructuring

const address = ['128 gargeswari','ecity','banga','india'];

const [street, city, state, zip]= address;


// const [street, city, state="ap", zip]= address;
console.log(`You are in ${city} ${state}`);
