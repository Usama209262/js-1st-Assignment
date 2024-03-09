// Js Assigment to Chapter # 1

//  Q # : 1  the alert() function will display a dialog box with the message "Hello, Usama!".

// the alert function is a method of the window object, so you can also use window.alert() to achieve the same result.


var ummsi = prompt("What is your name?");
alert("Hello, " + ummsi + "!");





// Q # 2 : To add a variable to a string, you can use string concatenation or string interpolation ?

var name = " Usama";
var question = "Hello" + name + " How are you" + " ? ";
var answer = "Thanks i am fine "
console.log(question + answer);

var string = " This is ";
var name = " IMAAD ";
var channel = " Ummsidev ";
var massage = 'Imaad is a good boy';
var temp =
    console.log(string + name + channel + massage);


// Q # 3 : if num1 is 3 and num2 is 9 How can use some variable , number , arithmetic operators ,increments and decrement in action ?

var num1 = 45;
var num2 = 67;
var num3 = 3;

console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 * num2 is " + (num1 * num2));
console.log("The value of num1 / num2 is " + (num1 / num2));
console.log("The value of num1++  is " + (num1++));
console.log("The value of ++num1 is " + (++num1));
console.log("The value of num1-- is " + (num1--));
console.log("The value of --num1 is " + (--num1));



// Q # : 4  which JavaScript, variable names must follow certain rules ?

// Variable Names Legal 


var number = 3;
var _count = 6;
var $price = 9;
var firstName = "Usama";
var num4 = 2;
console.log(number * num4 + $price / _count + firstName - num4)

// Variable Names Illegal

// var 1number; 
// var first-name; 
// var for;   
// var @price;


// Q # : 4  How to using variables with conditional statements in JavaScript:

var number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}