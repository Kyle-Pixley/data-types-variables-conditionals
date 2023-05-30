/*
    ? JavaScript

    Founded in 1996 by Brandon Eich 
    * client-side language (tins in the browser)
    * interpreted language, not compiled 
    * first-class-function - functions are treated like any other variables
    * functional language 
    * object-oriented language 
    * prototype-based 
    * imperative 
    * ECMAScript - organization setting language standards
    */

    /*
        ? Comments
        * blocks of code that are not being interpreted
        * denoted by // for single 
        * denoted by /* for multi line 
        * comments are read but not executed 
        * helps students wih note taking 
        * helps devs to document their code
    */

    /*
        ? Console object 
        * gives access to the browser or node's debugging console 
        * allows developers to view output from their progress
    */

    2 + 2;
    console.log(2 + 2);


/*
Primitive
    ? Data Types 
    * string 
    * number 
    * boolean 
    * null 
    * undefined 
    * Not a number (NaN)
reference
    * array
    * object
    * set 
*/

/* 
    ? Numbers
    * any integer or decimal
*/

console.log(25)


/* 
    ? Strings 
    * primitive data type representing characters (text)
    * enclosed by '',"",``.
    * strings are immutable (unable to be modified)
*/

console.log("This is a string")


// We can add (concatenate) strings

console.log("Hi I am kyle" + " and i'm 33 years old");

// String index

console.log("Germany"[0]);
// Values start at zero, not one.


/*
    ? String Interpolation
    * process of including so=pace fot an expression 

    Syntax:
    `string ${ expression } string`
*/

console.log(`My name is Kyle and I am ${30 + 3} years old`);

/*
    ? String Properties & Methods
    * .length
        *gives us the length
    * .slice
        * returns the section of a string 
        * takes optional start and stop parameters
    * .toUpperCase()
        * returns new string with all chars uppercase
    * .toLowerCase()
        * returns new string with all chars lowercase
*/

console.log("Kraftfahrzeug-hafpflichversicherung".length);

console.log("Kyle Pixley".slice(4));
console.log("Kyle Pixley".slice(0, 4));

console.log("memorialday2023".toUpperCase());

/*
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * examples of falsey values:
        * false
        * 0 
        * undefined 
        * null 
        * NaN
        * "" (empty string)
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolean() object returns whether value is truthy or falsey
console.log(Boolean(1));
console.log(Boolean(""));

/*
    ? Null & Undefined 
    * falsey values
    * null - means nothing
    * undefined - default value
*/

/*
    ? Operators 
    * addition (+)
    * subtraction (-)
    * multiplication (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * module (%)
    * assignment (=) (single)
    * comparison (==) (double)
    * strict comparison (===) (triple)
*/

// Assignment

let teacher = "Paul";

// Comparison (==)

console.log("paul" == "Paul")

// strict comparison (===)

console.log(2 =="2");
console.log(2 === "2");

/*
    ? Type Coercion
    * JS is a weakly-typed programming language 
    * doesn't require data type definition 
    * comparison operator (==) performs type coercion before resolving expression
    * we can use strict equality (===) to avoid type coercion
*/

console.log(2 + "2"); 
// returns 22 
// changes num 2 to "2"
/*
    1. in order to satisfy the following expression 
    2. js coerces number data type into string data type
    3. two strings are concatenated
*/
console.log(typeof(2 + "2"));
// returns string 
// ! know wht type coercion is but DON'T USE IT!

/*
    ? Modulo (%)
    * check for the remainder of long division
*/

console.log(12 % 3);
console.log(12 % 5);

/*
    ? Expressions 
    * unprocessed values grouped using the ()
    * evaluated to be truthy or falsy 
    * expressions evaluate
*/

console.log(Boolean(2 == 2));
console.log(Boolean("Paul" == "paul"));

/*
    ? Statements 
    * keyword 
    * expression 
    * code block
    * statements evaluate and execute block when invoked

    Ex: conditional statement

    if (true) {
        run this code
    }
*/
