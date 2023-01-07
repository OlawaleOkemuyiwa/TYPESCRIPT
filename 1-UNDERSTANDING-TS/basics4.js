//TYPE UNKNOWN
var userInput;
userInput = "can get any value type with no error as the type is unknown";
userInput = true;
userInput = 3;
var userName = "Olawale";
//userName = userInput; //here we get an error cause ts cant allow us assign the type unknown of userInput variable to the type string of the userName variable. if userInput type was any, we wouldnt get any error. Type unknown is a more restrict form of type any
if (typeof userInput === "string") {
    userName = userInput; //now ts agrees with this re-assignment as it is sure the userInput type to be stored in userName of type string is also a string
}
//NEVER TYPE
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
    //this code returns nothing, it doesn't ever return undefined as we're basically just throwing an error object from it. So the return type is never
    //the function never produces a value. The func always just crashes the script
}
try {
    generateError("An error occurred!", 500);
}
catch (error) {
    console.log(error);
}
