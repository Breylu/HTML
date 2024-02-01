// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("Hi! Im Sponge :)");
//   },
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 45,
//   isEmployed: false,
//   sayHello: () => console.log("NO, THIS IS PATRICK!"),
// };

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello;

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello;

// // -------- THIS REFERENCE TO OBJECTS --------

// const person3 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log(`Hi! Im ${this.firstName}, im ${this.age} years old :)`);
//   },
// };
// const person4 = {
//   firstName: "Squidward",
//   favFood: "pizza",
//   age: 50,
//   isEmployed: true,
//   sayHello: function () {
//     console.log(`Hi! Im ${this.firstName}, i like ${this.favFood} :)`);
//   },
// };

// person3.sayHello();
// person4.sayHello();

// // -------- CONSTRUCTOR METHOD --------

// function Car(make, model, year, color) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color),
//     (this.drive = function () {
//       console.log(`You drive the ${this.model}`);
//     });
// }

// const car1 = new Car("Honda", "Civic", 1998, "white");
// const car2 = new Car("Ford", "F150", 2022, "black");

// car1.drive();
// car2.drive();
// car3.drive();

// -------- DESTRUCTURING METHOD --------

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// const colors = ["red", "green", "blue", "black"];

// [colors[0], colors[3]] = [colors[3], colors[0]];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
//   console.log(`name: ${firsName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job}`);
// }

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry cook",
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 50,
// };

// displayPerson(person1);

// const { firstName, lastName, age, job = "Unemployed" } = person1;

// -------- NESTED OBJECTS --------

// const person = {
//   fullname: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water",
//   },
// };

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongebob",
  30,
  "124 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);
const person2 = new Person(
  "Patrick",
  50,
  "129 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);
