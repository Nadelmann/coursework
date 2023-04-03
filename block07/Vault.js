//Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10 40 39 
let vaultString = "Secret vault passcode combination: ";

//Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator 
// Calc for 10
let num1 = 50 / 5;

// Calc for 40
let num2 = 38 + 2;

// Calc for 39
let num3 = 13 * 3;

//The combination for the lock is 10-40-39
const str = num1 + "" + num2 + "" + num3 + "";
alert(`${vaultString} ${num1} - ${num2} - ${num3}`);

// alert for the vaultString including the num1 num2 and num3 passcode combination