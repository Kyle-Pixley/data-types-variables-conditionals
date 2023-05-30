/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved
        * starts with let, var, or const
        * cannot start with a number or characters other than $ or _
    * initialization
        * assignment of data value
        * if no value is assigned, it's undefined by default
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable Declaration
let firstName;
console.log(firstName);

// Variable Initialization (and reassignment)

firstName = "Kyle";
console.log(firstName);

// Variable Declaration and Initialization 
let lastName = "Pixley";

// (a)  (b) (c)     (d)
let address = "123 Main St, Salem, MA"
    // (e)     (f)

// (a) - keyword 
// (b) - variable identifier 
// (c) - assignment operator 
// (d) - value or initializer 
// (e) - variable declaration
// (f) - variable initialization or value assignment

var age = 26;
console.log(age);
// var is hoisted whereas let or const are not
// ! do not use var

// ? Const variable CANNOT have a reassigned primitive value
const ssn = "123-45-6789";
console.log(ssn);
// TypeError: assignment to constant variable
// ssn = "333-33-3333";
// console.log(ssn);

const arr = ["chicken","ice cream","cereal"];
arr[3] = "potato";

console.log(arr);

/*
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * SCREAMING_CASE
*/

/* 
    Challenge

    Set a few variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code

    Once done, concatenate or interpolate them together into new variable to create your address stamp

    stamp = "Paul 12"

    Create a new variable that utilizes all of those variable values

    Console log it

    !SPICEY MODE - assign the value of state to be lowercase but when you console log your address stamp, utilize a method to make sure it's capitalized.

*/
let fName = "kyle";
let lName = "pixley";
let houseNumber = 6;
let street = "main st";
let city = "vergennes";
let state = "vermont";
let postCode = "05491";

let stamp = `${fName} ${lName}\n${houseNumber} ${street}\n${city}, ${state} , ${postCode}`;
console.log(stamp.toUpperCase());

