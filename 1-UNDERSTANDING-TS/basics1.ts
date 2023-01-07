//TYPES == number, string, boolean, Object types, Array types, Tuple, Enum, any, unknown, never

//OBJECT TYPE && ARRAY TYPES
const person: {
  name: string;
  age: number;
  hobbies: {
    morning: string[];
    afternoon: any[];
  };
} = {
  name: "Wale",
  age: 23,
  hobbies: {
    morning: ["sleeping", "reading"],
    afternoon: [300, null, "eating"],
  },
};

//TUPLES --> An array of fixed length and type(e.g an array of 2 fixed length e.g [string, number]. The 1st type string and the 2nd type number)
const someArr: [string, number] = ["author", 43];
// someArr[0] = 1;
// someArr[2] = false;
// someArr[1] = "hii";
someArr.push("heyyoo"); //push still works to modify the length of the array even though the element pushed must conform to the element types set on the tuple

//ENUMS --> enums are custom types that are a great construct to create identifiers that are human readable and have some mapped value behind the scenes
enum Role {
  ADMIN = "ADMIN", //default value == 0
  READ_ONLY = 100, //default value == 1
  AUTHOR = "AUTHOR", //default value == 2
}

const user = {
  email: "user@gmail.com",
  role: Role.ADMIN,
};

if (user.role === Role.AUTHOR) {
  console.log("User is an author.");
} else if (user.role === Role.ADMIN) {
  console.log("user is and admin");
}
