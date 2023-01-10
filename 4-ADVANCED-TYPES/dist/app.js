"use strict";
const e1 = {
    name: "Olawale",
    privileges: ["Add, Remove, Update"],
    startDate: new Date(),
};
const sth = "String is the intersection of those two combined types, so sth is of type string";
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(4, 5);
console.log(result);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp)
        console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp)
        console.log("StartDate: " + emp.startDate);
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "Bala", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
console.log(v1, v2);
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1200);
}
useVehicle(v1);
useVehicle(v2);
function movingAnimal(animal) {
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
const $input = document.getElementById("user-output");
$input.value = "Hey there";
const $reactInput = document.getElementById("user-output");
$reactInput.value = "Hey from react";
const errorBag = {
    id: "6ca535d899u340u",
    email: "Not a valid email!",
    userName: "Must start with an uppercase",
    vibes: "Must be of type string!",
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result2 = add2("Olawale", " Okemuyiwa");
result2.split(" ");
console.log(result2);
const fetchedUserData = {
    id: "u1",
    name: "max",
};
const userInput = "";
const nullValue = null;
const undefinedValue = undefined;
const storedData1 = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT FALLBACK 1";
const storedData2 = nullValue !== null && nullValue !== void 0 ? nullValue : "DEFAULT FALLBACK 2";
const storedData3 = undefinedValue !== null && undefinedValue !== void 0 ? undefinedValue : "DEFAULT FALLBACK 3";
console.log(storedData1, storedData2, storedData3);
