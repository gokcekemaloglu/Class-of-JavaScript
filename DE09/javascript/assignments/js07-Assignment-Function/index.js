// Functions-2: 
// JS assignment: 
// 1. Write a JavaScript function that generates a string id (specified length) of random characters. char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
// Example - 1: input=4 => output="A8Sf" 
// Example - 2: input=8=> output="29SaBfgu' 


// function randonmID(IDlength) {

//     const charList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//     let ID="";

//     for (let i = 1; i <= IDlength; i++) {
        
//         const randomChar = Math.floor(Math.random() * charList.length);
//         ID += charList[randomChar]
//     }
    
//     return ID;
// }

// const IDlength = parseInt(+prompt("Please set the length of the ID"));

// if (!isNaN(IDlength) && IDlength>0) {
//     const ID = randonmID(IDlength);
//     console.log(`Your generated ID: ${ID}`);
// } else {
//     console.log("Please enter a valid number greater than 0");
// }



// JS assignment: 
// 2. Write a function to find the area and perimeter of a Circle Perimeter is 2*pi*rad and Area is pi*rad^2 
// Example - 1: input= 10 => output="Perimeter: 62.83, Area: 314.15" 
// Example - 2: input= 15 => output="Perimeter: 94.94, Area: 706.84" 


function circle(r) {
    return (`Perimeter: ${(2*Math.PI*r).toFixed(2)}, Area: ${(Math.PI*(r**2)).toFixed(2)},`)
}

console.log(circle(10));
console.log(circle(15)); 






// JS assignment: 
// 3. Write a function to find the count of a specific letter in a string 
// Example: input=("Connect",c) => output=2 
// Example: input=("first person",c) => output=2

function countLetters(string, letter) {
    const lowerStr = string.toLowerCase()
    const lowerLetter = letter.toLowerCase()
    let count = 0
    for (let i = 0; i < lowerStr.length-1; i++) {
        if (lowerStr[i] === lowerLetter) {
            count++
            }
            }
            return count
}

// console.log(countLetters("Connect","c")); 
// console.log(countLetters("first person","c")); 

const string1 = "Connect";
const letter1 = "c";
const count1 = countLetters(string1, letter1);
console.log(`The letter "${letter1}" appears ${count1} times in the string "${string1}".`);

const string2 = "first person";
const letter2 = "c";
const count2 = countLetters(string2, letter2);
console.log(`The letter "${letter2}" appears ${count2} times in the string "${string2}".`);



// JS assignment: 
// 3. Write a JavaScript function to extract a specified number of characters from a string. 
// Example: input=func("Clarusway",6) => output="Clarus" 

const specified = function (string,num) {
    let output=""
    for (let i = 1; i <= num ; i++) {
        output += string[i];
        
    }
}

console.log("?????????????????????????????");



// JS assignment: 
// 4. Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number. The user should have 5 chance to guess the number. If the number entered by the user: is greater than the random number then warn user to decrease, is less than the random number then warn user to increase, is equal to the random number then congratulate the user and tell in how many guesses were used to find the number If user can't find the number in 5 guess then game is lost and display the random number. 
// Hint: you can use this code to generate random number 0-100 const winingNumber = Math.round(Math.random() * 100); 



