//A generic type can take any type but the type it eventually takes must be consistently used in the scope it is declared in
//Inbuilt generics:
const names: Array<string> = ["Wale", "Seun", "Lanre"]; //== string[]

const promise: Promise<Array<string>> = new Promise((resolve, reject) => {
  //== Promise<string[]>
  //== this promise variable will house a Promise type which would resolve to be an array of strings
  setTimeout(() => {
    resolve(names);
  }, 2000);
});

promise.then(data => {
  data.splice(1, 1);
});

//CREATING OUR OWN CUSTOM GENERIC TYPE
//example 1: we specify a generic type T on getArray function
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
//myNumArr.push("Hi"); // Compiler Error as we can't push a string into a number array
//myStrArr.push(500); // Compiler Error as we can't push a number into a string array

//Now getArray function is very flexible and can be used/re-used to have an array of different types depending on what type is assigned to generic type T when the function is called

//We don't always have to specify what type the type variable(T) is. If we don't the compiler will use type inference to set the value of T on the function based on the data type of argument values used in calling the function with the generic set.
//e.g
let myNumArr2 = getArray([100, 200, 300]); // T's type is inferred to be a number and it is set
let myStrArr2 = getArray(["Hello", "World"]); // T's type is inferred to be a string and it is set

//example 2
function merge<T extends object, U extends object>(ObjA: T, ObjB: U) {
  //== objA is of generic type T(T extends object therefore T should be an object type even tho what specific type that object is is unknow) of merge function. ObjB is of generic type U. The type T and U are now setting stones type for A and B but they're set dynamically when we call the function. We can then explicitly set what type T and U are when the function is called or just allow ts infer the type they are from the 2 provided arguments (assigns T to the type structure of objA and U the the type structure of objB).
  return Object.assign(ObjA, ObjB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Seun", hobbies: ["sleeping", "eating"] },
  { age: 23 }
);

// const notGonnaMerge = merge({sth: "Baba"}, 3) //U extends object but we're passing a number argument as U which gives an error
const mergedObj2 = merge({ name: "Wale" }, { age: 23 });
console.log(mergedObj2.name);

//ANOTHER GENERIC FUNCTION
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  //T extends Lengthy == whatever T type is, it must have a length property
  //parameter element is assigned to type T therefore values passed as an argument must either be an object with a length property, a string, or an array (All are objects with length property available on them)
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}
// countAndDescribe({ age: 23 });
countAndDescribe({ name: "Olawale", length: 2 });
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Cooking", 23, true]));

//THE KEYOF CONSTRAINT
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
//extractAndConvert({ age: 23 }, "job");
extractAndConvert({ name: "Wale" }, "name");

//GENERIC CLASSES
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // this.data = this.data.filter(el => el !== item);
    if (this.data.indexOf(item) === -1) return;

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>(); //==dataStorage only stores string data
textStorage.addItem("Wale");
textStorage.addItem("Sixx");
textStorage.removeItem("Wale");
console.log(textStorage);

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const meObj = { name: "Wale" };
// objStorage.addItem(meObj);
// objStorage.addItem({ name: "Seun" });
// objStorage.removeItem(meObj);
// console.log(objStorage.getItems());

//GENERIC UTILITY TYPES --> ??? Partial, ReadOnly
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  return { title, description, completeUntil };
}
