//  Initialize variables a and b
var a = 15, b = 6;
//  Decrement a
--a;
// a is now 1

// Decrement a and b , then subtract b from a
var temp = --a - --b;
//  a is now 1, b is now 0, and temp is now 1

//  Increment b, then add it to the result
var result = temp + ++b + b--;
// temp is now 1, b is now 1, and result is now 3

// Display the values of a, b, and result
document.write(" <br>a: " + a);
document.write("<br><br/>");

//  Output: a: 1 
document.write("<br>b: " + b);
document.write("<br><br/>");

//  Output: b: 1 
document.write("<br>result: " + result);