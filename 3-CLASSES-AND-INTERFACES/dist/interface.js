"use strict";
let user1 = {
  name: "Olawale",
  age: 23,
  greet(phrase) {
    console.log(phrase);
  },
};
user1.greet("Hello World!!");
console.log(user1);
class Person {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  greet(phrase) {
    console.log("Hi, I am " + this.name + ", " + phrase);
  }
}
const user2 = new Person("Gbenga", 35);
user2.greet("Nice to be here.");
console.log(user2);
