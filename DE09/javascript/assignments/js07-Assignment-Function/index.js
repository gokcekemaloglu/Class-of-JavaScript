// Functions-2: 
// JS assignment: 
// 1. Write a JavaScript function that generates a string id (specified length) of random characters. char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
// Example - 1: input=4 => output="A8Sf" 
// Example - 2: input=8=> output="29SaBfgu' 

// function ID(IDlength) {
//     let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = '';
//     for (let i = 0; i < IDlength; i++) {
//         result += char_list.charAt(Math.floor(Math.random() * char_list.length));
//         }
//         return result;
//         }
//         console.log(ID(4)); // Output: "A8Sf"
    



// function ID(IDlength) {

//     const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//     let result = ""

//     for (let i = 0; i < IDlength; i++) {

//         result += char_list.charAt(Math.floor(Math.random() * char_list.length))
        
//     }
//     return result;
// }

// console.log(ID(4)) // output: "A8Sf"


console.log("******************");



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


function Circle(radius) {
    let area=Math.PI*radius**2
    let cicumference=2*Math.PI*radius
    return `Perimeter: ${cicumference.toFixed(2)}, Area: ${area.toFixed(2)}`
}

console.log(Circle(6));

console.log("******************");



// function circle(r) {
//     return (`Perimeter: ${(2*Math.PI*r).toFixed(2)}, Area: ${(Math.PI*(r**2)).toFixed(2)},`)
// }

// console.log(circle(10));
// console.log(circle(15)); 






// JS assignment: 
// 3. Write a function to find the count of a specific letter in a string 
// Example: input=("Connect",c) => output=2 
// Example: input=("first person",c) => output=2

function CountLetters(str,letter) {
    let count = 0;
    const lowerStr=str.toLowerCase()
    const lowerLetter=letter.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (lowerStr[i]===lowerLetter) {
            count ++
        }
        
    }
    return count
    
}

console.log(CountLetters("Connect","c"));
console.log(CountLetters("first person","c"));


console.log("*******************");


// function countLetters(string, letter) {
//     const lowerStr = string.toLowerCase()
//     const lowerLetter = letter.toLowerCase()
//     let count = 0
//     for (let i = 0; i < lowerStr.length-1; i++) {
//         if (lowerStr[i] === lowerLetter) {
//             count++
//             }
//         }
//             return count
// }

// console.log(countLetters("Connect","c")); 
// console.log(countLetters("first person","c")); 

// const string1 = "Connect";
// const letter1 = "c";
// const count1 = countLetters(string1, letter1);
// console.log(`The letter "${letter1}" appears ${count1} times in the string "${string1}".`);

// const string2 = "first person";
// const letter2 = "c";
// const count2 = countLetters(string2, letter2);
// console.log(`The letter "${letter2}" appears ${count2} times in the string "${string2}".`);

console.log("*******************");


// JS assignment: 
// 3. Write a JavaScript function to extract a specified number of characters from a string. 
// Example: input=func("Clarusway",6) => output="Clarus" 


function charNum(string,num) {
    let output=""
    for (let i = 0; i < num; i++) {
        output += string[i]
        
    }
    return output
}

console.log(charNum("Clarusway",6));




console.log("*******************");


// const specified = function (string,num) {
//     let output=""
//     for (let i = 0; i <= num-1 ; i++) {
//         output += string[i];
        
//     }
//     return output
// }

// console.log(specified("Clarusway",6));

console.log("*******************");


// JS assignment: 
// 4. Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number. The user should have 5 chance to guess the number. If the number entered by the user: is greater than the random number then warn user to decrease, is less than the random number then warn user to increase, is equal to the random number then congratulate the user and tell in how many guesses were used to find the number If user can't find the number in 5 guess then game is lost and display the random number. 
// Hint: you can use this code to generate random number 0-100 const winingNumber = Math.round(Math.random() * 100); 


// const guessWhat = function () {
    
//     let count = 0; 
//     const winningNumber = Math.round(Math.random() * 100);

//     while (count < 5) {
//         guess = parseInt(prompt("Guess a number between 0-100"));
//         count++;

//         if (guess > winningNumber) {

//             alert("Your guess is too high! Try a lower number.");

//         } else if (guess < winningNumber) {

//             alert("Your guess is too low! Try a higher number.");

//         } else if (guess === winningNumber) {

//         alert(`Congratulations! You guessed the number in ${count} guesses.`);
//         break;

//         }

//     } if (count === 5) {
//             alert(`Game over! The winning number was ${winningNumber}. Better luck next time!`);
//         }
// }
// guessWhat();

console.log("*******************");



