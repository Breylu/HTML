const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! Im Sponge :)");
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 45,
  isEmployed: false,
  sayHello: () => console.log("NO, THIS IS PATRICK!"),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello;

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello;

// -------- THIS REFERENCE TO OBJECTS --------

const person3 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi! Im ${this.firstName}, im ${this.age} years old :)`);
  },
};
const person4 = {
  firstName: "Squidward",
  favFood: "pizza",
  age: 50,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi! Im ${this.firstName}, i like ${this.favFood} :)`);
  },
};

person3.sayHello();
person4.sayHello();
