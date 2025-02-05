//  Operators 
// In JavaScript, operators are symbols that perform operations on values (operands). They allow you to 
// manipulate variables and values in different ways.

// 1️⃣ Arithmetic Operators
// Used for mathematical calculations.

let a = 10;
let b = 5;
// Operator	Description	Example
// +	Addition	
let add = a+b;
console.log(add); // ans is 15

// -	Subtraction	
let sub = a-b 
console.log(sub); // ans is  5

// *	Multiplication	
let multi = a * b 
console.log(multi); // ans is 50

// /	Division	
let divide = a/b
console.log(divide); // ans is 2

// %	Modulus (Remainder)	10 % 3 → 1
let modulus = a % b
console.log(modulus); // ans is 0

// **	Exponentiation 
let exp1 = a ** 2;
let exp2 = b **3
console.log(exp1); // ans is 100
console.log(exp2); // ans is 125


// ++	Increment (Adds 1)	
let inc1 = a++
let inc2 = b++
console.log(inc1); // ans is 5
console.log(inc2); // ans is 11

// --	Decrement (Subtracts 1)	let y = 5; y--
let dec1 = a--
let dec2 = b--
console.log(dec1); // ans is 9
console.log(dec2); // ans is 4


// 2️⃣ Assignment Operators
// Used to assign values to variables.

// =	x = 5	x = 5
let first_const = a
console.log(first_const); // ans is 10

// +=	x += 2	x = x + 2
let c = a +=10
let d = b +=5
console.log(c); // ans is 20
console.log(d); // ans is 10

// -=	x -= 3	x = x - 3
let g = a -=10
let h = b -=5
console.log(g); // ans is 5
console.log(h); // ans is 0

// *=	x *= 4	x = x * 4
let i = a *=10
let j = b *=5
console.log(i); // ans is 100
console.log(j); // ans is 25

// /=	x /= 2	x = x / 2
let k = a /=10 
let l = b /=5
console.log(k); // ans is 1
console.log(l); // ans is 0.5

// %=	x %= 3	x = x % 3
let m = a %=10
let n = b %=5
console.log(m); // ans is 0
console.log(n); // ans is 0


// 3️⃣ Comparison Operators
// Used to compare two values (returns true or false).

// ==	Equal to (compares value only)
a = "10" // true

// ===	Strict equal (compares value & type)	
b === "5"	// false

// !=	Not equal	
a != "5"	 // false

// !==	Strict not equal	
a !== "5"	// true

// >	Greater than	
10 > 5	// true

// <	Less than	
10 < 5	//false

// >=	Greater than or equal
	10 >= 10	//true

// <=	Less than or equal	
5 <= 10	//true


// 4️⃣ Logical Operators
// Used for combining multiple conditions.

// && (AND)	Returns true if both conditions are true	
(5 > 3 && 8 > 2)	// true

//  (OR)	Returns true if at least one condition is true
(5 > 3 || 8 < 2)	// true

// ! (NOT)	Inverts a boolean value	
!(5 > 3)	// false

// 5️⃣  Ternary Operator (Conditional Operator)
// A shorthand for if-else.
let age = 20;
let valid_check = ( age >=18 ) ? "Valid" : "Not valid";
console.log(valid);


//  Other Not comman  operators
// Type (typeof, instanceof)
//  for checking types.

// Bitwise (&, |, ^, <<, >>) 
// for binary operations.

// Nullish (??) 
// to handle null or undefined.

// Optional chaining (?.) 
// to avoid errors on missing properties.