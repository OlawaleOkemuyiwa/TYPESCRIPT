//UNION TYPES (variable: string | number) && LITERAL TYPES (e.g const varName: "as-sth" means varName is of type "as-sth" and the only value it can have is also "as-sth")
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //the only 2 values resultConversion arg can be are "as-number" or "as-text"
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "string") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

combine(10, 8, "as-number");
combine("hello ", "world", "as-text");

//TYPES ALIAS OR CUSTOM TYPE --> It is simply saving a specific type into a type variable and using it over time to avoid re-writing out the same type in different places
type Combinable = string | number;

type Person = {
  name: string;
  age: number;
  isMArried: boolean;
  siblingsName: string[];
};

type allowed = Combinable | Person;

const me: Person = {
  name: "Wale",
  age: 23,
  isMArried: false,
  siblingsName: ["Biodun", "Nike"],
};

const mom: Person = {
  name: "Adebisi",
  age: 54,
  isMArried: true,
  siblingsName: ["Ranti", "Remi", "Dupe", "Bukky", "Taiye", "Idowu"],
};

let test: allowed = "wale";
test = 23;
test = {
  name: "testing",
  age: 125,
  isMArried: true,
  siblingsName: [
    "this",
    "is",
    "a",
    "test",
    "to",
    "check",
    "the allowed types on the allowed type",
  ],
};
