"use strict";
const names = ["Wale", "Seun", "Lanre"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(names);
    }, 2000);
});
promise.then(data => {
    data.splice(1, 1);
});
function merge(ObjA, ObjB) {
    return Object.assign(ObjA, ObjB);
}
const mergedObj = merge({ name: "Wale" }, { age: 23 });
console.log(mergedObj.name);
const mergedObj2 = merge({ name: "Seun", hobbies: ["sleeping", "eating"] }, { age: 23 });
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Cooking", 23, true]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Wale" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Wale");
textStorage.addItem("Sixx");
textStorage.removeItem("Wale");
console.log(textStorage);
const numberStorage = new DataStorage();
function createCourseGoal(title, description, completeUntil) {
    return { title, description, completeUntil };
}
