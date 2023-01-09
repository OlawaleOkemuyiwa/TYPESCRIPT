//INTERFACES: provides the structure/skeleton of an object/class. It only exists in ts and not js. We can use it as a type check for objects that must have the specified structure
interface Human {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Human = {
  name: "Olawale",
  age: 23,

  greet(phrase: string) {
    console.log(phrase);
  },
};
user1.greet("Hello World!!");
console.log(user1);

//INTERFACES AND TYPE ALIAS ARE NOT THE SAME EVEN THO BOTH CAN BE USED INTERCNHANGELY. They have 1 major difference interfaces can only be used to define/describe the structure of an object while type aliases are used to "store" type(s) and reuse it in several places. We can also use type aliases with union types etc.
interface Named {
  readonly name: string;
  output?: string; //optional properties
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  /*
  The Person class implements Greetable interface so now the class must have the properties and methods as specified by the interface
  Though we're not only limited to the fields specified by the interface, the only thing is the fields specified by the interface must be included in the class body
  Interfaces are used to share functionality amongst different classes regarding the structure of the classes e.g all classes that implements Greetable interface must have name age and greet fields
  A class can implement more than 1 interface seperated by "," i.e class Person implements Greetable, Named but a class can only extend 1 super/base class
  An interface can also extend more than 1 interface e.g interface Greetable extends Named, Sth etc but cannot implement other interfaces
  */
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log("Hi, I am " + this.name + ", " + phrase);
  }
}

const user2: Greetable = new Person("Gbenga", 35);
user2.greet("Nice to be here.");
console.log(user2);
