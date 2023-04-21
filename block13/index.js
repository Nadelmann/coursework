//Block13 work shop
// If/else 
// Is truthy - using if/else statements create js code that prints responses based on the following input values to test.
// Input value to test: "I am a string", false, null, undefined, 0, "".
let inputValue = undefined;
if (inputValue === "I am a string") {
    console.log("true");
} if (inputValue === false) {
    console.log("The boolean value is false");
} if (inputValue === null) {
    console.log("The null value is falsy");
} if  (inputValue === undefined) {
    console.log("undefined is falsy");
} if (inputValue === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} if (inputValue === "") {
    console.log("The empty string is falsy (the only falsy string)");
} 
// Number line - using if/else if/else statements code a script tag 
// that takes the sum of two numbers and prints the expected result.
//Values to test: (50,51),(99,-2),(0,101),(500,-500),(-1000,0),(-5,0)
let num1 = -5;
let num2 = 0;
var sumNum = num1 + num2;

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("Number outside range");
};

//Greater Than Or Equal to 5
// Using if/else statements code a script tag that prints 
//true if both parameters are greater or equal to 5. 
// Values to test: (5,6), (10,11), (0,0), (1000, -1000), (6,4), (5,5)
let num3 = 6;
let num4 = 4;
if ((num3 >=5) && (num4 >=5)){
console.log("Both numbers are greater or equal to 5: True" );
} else {
console.log("Both numbers are greater or equal to 5: False" );
};
// Pair and Compare
// Using if/else statements and strict equality operators, code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy. 
// Values to test: [["cat", "cat"],[ 6, "6"]], [["five", 5 ], ["dog", "dawg"]], [[ 0, false], ["horse", "horse"]], [["eight", "eight"], ["ate", "ate"]], [[ 11, "eleven"], ["four", "for"]], [["cake", "cake"], ["pie", "pie"]]
let set1a = "cat";
let set1b = "cat";
let set2a = 6;
let set2b = "6";
if (set1a === set1b || set2a === set2b) {
    console.log("Both sets of values equal each other? true");
} else {
    console.log("Both sets of values equal each other? false");
};

