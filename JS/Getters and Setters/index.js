// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }

//   get height() {
//     return this._height.toFixed(1);
//   }

//   get area() {
//     return (this._width * this._height).toFixed(1);
//   }
// }

// const rectangle = new Rectangle(3, 5);

// rectangle.width = 5;
// rectangle.height = 6;

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error(`First Name Must Be A Non-Empty String!`);
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error(`Last name must be a non-empty string!`);
    }
  }
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Spongebob", "Squarepants");
