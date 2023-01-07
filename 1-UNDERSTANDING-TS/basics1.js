//OBJECT TYPE && ARRAY TYPES
var person = {
  name: "Wale",
  age: 23,
  hobbies: {
    morning: ["sleeping", "reading"],
    afternoon: [300, null, "eating"],
  },
};
//TUPLES --> An array of fixed length and type(e.g an array of 2 fixed length. The 1st type string and the 2nd type number)
var someArr = ["author", 43];
//someArr[0] = 1;
// someArr[2] = false;
// someArr[1] = "hii";
someArr.push("heyyoo"); //push still works to modify the length of the array in though the element pushed must conform to the element types set on the tuple
//ENUMS --> enums are custom types that are a great construct to create identifiers that are human readable and have some mapped value behind the scenes
var Role;
(function (Role) {
  Role["ADMIN"] = "ADMIN";
  Role[(Role["READ_ONLY"] = 100)] = "READ_ONLY";
  Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var user = {
  email: "user@gmail.com",
  role: Role.ADMIN,
};
if (user.role === Role.AUTHOR) {
  console.log("User is an author.");
} else if (user.role === Role.ADMIN) {
  console.log("user is and admin");
}
