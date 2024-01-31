// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: $${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.5);
// const product3 = new Product("Underwear", 99.99);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// ------- STATIC KEYWORD -------

// class mathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
// }

// console.log(mathUtil.getCircumference(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }
//   sayHello() {
//     console.log(`Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Squidward");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);

// user1.sayHello();
// console.log(User.username);

// ------- INHERITANCE AND SUPER KEYWORD -------

class Animal {
  //   alive = true;
  //   eat() {
  //     console.log(`This ${this.name} is eating`);
  //   }
  //   sleep() {
  //     console.log(`This ${this.name} is sleeping`);
  //   }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed} km/h`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 6, 10);
const hawk = new Hawk("hawk", 3, 125);
