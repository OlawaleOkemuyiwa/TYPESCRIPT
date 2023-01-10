//INTERSECTION TYPES: They allow us combine other types and then builds the intersection of these types
type Employee = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};

type ElevatedEmployee = Employee & Admin; //merge both obj types Admin and ElavatedEmployee so we have the intersections: name, startDate and privileges fields

const e1: ElevatedEmployee = {
  name: "Olawale",
  privileges: ["Add, Remove, Update"],
  startDate: new Date(),
};

type Combinable = string | number;
type numeric = boolean | string;
type Universal = Combinable & numeric;

const sth: Universal =
  "String is the intersection of those two combined union types, so sth is of type string";

//TYPE GUARDS: it is an approach of checking if a certain property or method exists before you try to use it. It allows us use the flexibility union types give us and still ensure that our code runs correctly at runtime
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //this is a type guard
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add(4, 5);
console.log(result);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name); //ts is always sure there would be a name property in emp argumement as the prop/type is common both Employee type and Admin Type. It is isn't sure of the rest that are not common and we can use type guards to effect this
  if ("privileges" in emp) console.log("Privileges: " + emp.privileges);

  if ("startDate" in emp) console.log("StartDate: " + emp.startDate);
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Bala", startDate: new Date() });
printEmployeeInformation({ name: "Bala", privileges: ["love", "salary"] });

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
console.log(v1, v2);

function useVehicle(vehicle: Vehicle) {
  vehicle.drive(); //this method will always exist on the Vehicle union type. As Vehicle is a union of 2 types that both has the drive(){} method but loadCargo() method is only available on Truck type. We then have to use Typeguards to ensure we don't call method on an object instance that doesn't have it
  // if ("loadCargo" in vehicle) vehicle.loadCargo(1200);
  if (vehicle instanceof Truck) vehicle.loadCargo(1200);
}
useVehicle(v1);
useVehicle(v2);

//DISCRIMINATED UNIONS: Special form of type guard that helps for type guarding
interface Bird {
  kind: "bird"; //giving every object that is to be part of a union type (Animal) an extra common property (named "kind") so as to use that property "kind" in our checks to ascertain types (fields available on an object with a union type)
  flyingSpeed: number;
}

interface Horse {
  kind: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
  // if ("flyingSpeed" in animal) {
  //   console.log("Moving with speed " + animal.flyingSpeed);
  // }
  let speed;
  switch (animal.kind) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed " + speed);
}
movingAnimal({ kind: "bird", flyingSpeed: 600 });
movingAnimal({ kind: "horse", runningSpeed: 600 });

//TYPE CASTING: ascertains the specific type of a value to ts in scenarios where ts is not able to detect it on its own or where we have a union type for a value and ts is not sure what exact type that value is
//for vanilla js
const $input = <HTMLInputElement>document.getElementById("user-output")!;
$input.value = "Hey there";

//for react
const $reactInput = document.getElementById("user-output")! as HTMLInputElement;
$reactInput.value = "Hey from react";

//INDEX PROPERTIES: a feature that allows us to create objects which are more flexible regarding the properties they hold
interface ErrorContainer {
  id: string;
  [prop: string]: string; //== i dont know the exact property name that would be added to the object with the interface ErrorContainer, i also dont know the no of properties it will house. I just know that every property which is added to such object must have a property name which can be interpreted as a string and each must have the type i've specified
}

const errorBag: ErrorContainer = {
  id: "6ca535d899u340u",
  email: "Not a valid email!",
  userName: "Must start with an uppercase",
  vibes: "Must be of type string!",
};

//FUNCTION OVERLOADS: a feature that allows us define function signatures i.e having multiple ways of calling a function with different paramters
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //this is a type guard
    return a.toString() + b.toString();
  }
  return a + b;
}
//this tells ts that if both the argument passsed to add2 function calls are numbers then add2 returns a number, else if both are of type string, return string
const result2 = add2("Olawale", " Okemuyiwa");
result2.split(" ");
console.log(result2);

//OPTIONAL CHAINING: to optionally access a property we're not sure exists or not by adding a "?" after the thing we're not sure of.
const fetchedUserData = {
  id: "u1",
  name: "max",
  // job: { title: "CEO", description: "My Own Company" },
};
// console.log(fetchedUserData?.job?.title); //this asks ts: only access job property if fetchedUserData exist, then only access title property if job exist

//NULLISH OPERATOR: helps us deal with nullish/undefined data using the nullish coalescing operator
const userInput = "";
const nullValue = null;
const undefinedValue = undefined;
const storedData1 = userInput ?? "DEFAULT FALLBACK 1"; //this means if userInput is exactly null or undefined then use the fallback
const storedData2 = nullValue ?? "DEFAULT FALLBACK 2"; //this means if userInput is exactly null or undefined then use the fallback
const storedData3 = undefinedValue ?? "DEFAULT FALLBACK 3"; //this means if userInput is exactly null or undefined then use the fallback

console.log(storedData1, storedData2, storedData3);
