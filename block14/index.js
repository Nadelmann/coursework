//Only odds
//Create a Javascript code that accepts an array of numbers and returns a new array with only the 
// odd numbers from the original array
const numbers1 = [2, 4, 6, 8, 11, 20, 15, 22];
console.log('Original Array: '+ numbers1);
const odd1 = numbers1.filter(num => num % 2 === 1);
console.log('Result: '+ odd1);
//expected result [ 11, 15]
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd2 = numbers2.filter(num => num %2 ===1);
console.log('Original Array: '+ numbers2);
console.log('Result: '+ odd2);
//expected result [1, 3, 5, 7, 9]
const numbers3 = [70, 42, 55, 81, 21, 91, 34];
const odd3 = numbers3.filter(num => num %2 ===1);
console.log('Original Array: '+ numbers3);
console.log('Result: '+ odd3);
//expected result [55, 81, 21, 91]
const numbers4 = [2, 4, 6, 8, 10, 11, 12];
const odd4 = numbers4.filter(num => num %2 ===1);
console.log('Original Array: '+ numbers4);
console.log('Result: '+ odd4);
//expected result [11]

//Vowel vs. Consonant
//Create a Javascript code that accepts a string of lowercase letters. 
//Print the word followed by how many consonants and vowels it has. 
const vowels = ['a', 'e', 'i', 'o', 'u'];
const res = { vowels: 0, consonants: 0 }
//Input Array "hello"
//expected result "hello has 3 consonants and 2 vowels"
const myString1 = ['hello'];
console.log(myString1);
for(let char of myString1){
    if (vowels.includes(letter)){
        res['vowels'] = res['vowels'] + 1
    }
    else {
        res["consonants"] = res["consonants"] + 1
    }
    return res
    };
//Input Array "ukelele"
//expected result "ukelele has 3 consonants and 4 vowels"
const myString2 = ['ukelele'];
console.log(myString2);
for(let i=0; i < myString2.length; i++){
    console.log(myString2[i]);
 };
//Input Array "awesome"
//expected result "awesome has 3 consonants and 4 vowels"
const myString3 = ['awesome'];
console.log(myString3);
for(let i=0; i < myString3.length; i++){
    console.log(myString3[i]);
 };
//Input Array "onomatopoeia"
//expected result "onomonopia has 4 consonants and 6 vowels"
const myString4 = ['onomatopoeia'];
console.log(myString4);
for(let i=0; i< myString4.length; i++){
    console.log(myString4[i]);
 };
//Input Array "textbook"
//expected result "textbook has 5 consonants and 3 vowels"
 const myString5 = ['textbook'];
 console.log(myString5);
 for(let i=0; i< myString5.length; i++){
    console.log(myString5[i]);
 };

//Reverse Array
//Create a javascript code using a for loop, that creates a new array in reverse order

//Input array [1, 2, 3]
//Expected result [3, 2, 1]

//Input array [1, 3, 5, 7, 9, 11]
//Expected result [11, 9, 7, 5, 3, 1]

//Input array [20, 50, 30, 60, 200]
//Expected result [200, 60, 30, 50, 20]

//Input array [1, -1, 2, -3, 5, -8, 13]
//Expected result [13, -8, 5, -3, 2, -1, 1]

//Fizzbuzz
// Create a javascript code that prints each number from 1 to 100 on a new line
// For each munltiple of 3, print "fizz" instead of a number
// For each multiple of 5, print "Buzz" instead of a number
// For numbers that are multiples of both 3 and 5 print "FizzBuzz" instead of the number
const FizzBuzz = (num) => {
    if (num >=1 && num <= 100);
}
for (let i=1; i<=num; i++){
    if (i % 3 === 0 && i %5 === 0)
    console.log('fizzbuzz');

    else if (i % 5 === 0){
    console.log('buzz');
    }
    else if (i % 3 === 0){
    console.log('fizz');
    }
}