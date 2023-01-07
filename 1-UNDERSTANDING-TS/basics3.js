//FUNCTION RETURN TYPES & VOID
function add(n1, n2) {
    //add func returns a number so the implicit return type when this func is called is number through inferance, if i explicitly set the return type here to e.g string. Then ts won't allow return of sum n1 and n2 whose value is of type number
    return n1 + n2;
}
function doSth(text) {
    //whenever we set the return type on a function to undefined. We must then always explicitly return undefined from the function, even tho if no return value is provided that is already. This is undesirable and so its generally better to use return type void for such case
    console.log(text);
    return undefined;
}
function printResult(num) {
    //not returning anything so the return type is implicitly void, tho i am still explicitly stating the return type of the func here
    console.log("Results " + num);
}
printResult(add(2, 3));
//FUNCTION AS TYPES
var combineValues; //specifies that combineValues variable holds a function. This is quite vaque and not so helpful
var combineValues2; //combineValues2 should accept any function which has 2 paramters: the first a string and the 2nd a number, which returns a boolean.
combineValues2 = function (a, b) {
    console.log("now this function is without no error");
    return true;
};
//FUNCTION TYPES & CALLBACKS
function addAndHandle(n1, n2, cb
//by setting void on the type to be returned from the cb argument, we are telling ts to ignore whatever type is returned from the cb func as we're not expecting a returned value from the cb which could be used in this function block. If we change the return type from void to string, number etc then the type returned from such cb must be that type set
) {
    var result = n1 + n2;
    var someValue = cb(result, true);
}
addAndHandle(5, 9, function (someNum, isNeeded) {
    console.log(someNum, isNeeded);
    return someNum;
});
