//DECORATOR ??? : A decorator in the end is just a function you apply to sth (e.g a class) in a certain way
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

const peers = new Person();
console.log(peers);