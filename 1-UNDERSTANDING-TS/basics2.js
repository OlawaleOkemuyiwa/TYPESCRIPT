//UNION TYPES (variable: string | number) && LITERAL TYPES (variable: "as-sth")
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "string") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
combine(10, 8, "as-number");
combine("hello ", "world", "as-text");
var me = {
    name: "Wale",
    age: 23,
    isMArried: false,
    siblingsName: ["Biodun", "Nike"]
};
var mom = {
    name: "Adebisi",
    age: 54,
    isMArried: true,
    siblingsName: ["Ranti", "Remi", "Dupe", "Bukky", "Taiye", "Idowu"]
};
