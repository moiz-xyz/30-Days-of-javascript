// Control flow in JavaScript refers to the order in which the code is executed. Normally, 
// JavaScript runs from top to bottom, line by line. However, you can change the flow using 
// conditional statements and loops.


// 1️⃣ Conditional Statements (Decision Making)
// These statements help JavaScript make decisions based on conditions.

// if Statement
// Executes a block of code only if a condition is true.
let a = 18 ;
if (a >= 18){
    console.log("Eligible for vote");   
} // output is Eligible for vote
// if true then a wll be executed else nothing will be added

// if...else Statement
// Executes one block of code if the condition is true, and another if it’s false.
if (a >= 18){
    console.log("Eligible for vote");   
} else{
   console.log("Not Eligible for vote");  
}

// if...else if...else Statement
// Checks multiple conditions.if one is false other block willl be executed 
let score = 78;
if ( score >= 90){
    console.log("Your Grade is A1");
}else if ( score >= 80){
console.log("Your Grade is A");
}else if (score >=70){
    console.log("Your Grade is B");
} else if (score >=60){
    console.log("Your Grade is C")
} else {
console.log("You are fail");
} // Grade is B here your can dynamically change the  value 


// switch Statement (Alternative to if...else)
// Best for checking multiple values.
let day = "Monday";
switch (day){
    case "Monday":
        console.log('Today is Monday');
        break ;
        case "Tuesday":
            console.log('Today is Tuesday');
            break ;
              case "Wednesday":
                console.log('Today is Wednesday');
                break ;
                case "Thursday":
                    console.log('Today is Thursday');
                    break ;
                    case "Friday":
                        console.log('Today is Friday');
                        break ;
                        case "Sunday":
                            console.log('Today is Saturday');
                            break ;
                            case "Sunday":
                                console.log('Today is Sunday');
                                break ;
} // will check for case if one false other will be executed we can also add default

// 2️⃣ Loops (Repeating Code)
// Loops help execute a block of code multiple times.

// 🔹for Loop (Use When You Know the Exact Number of Iterations)
// Best when you know how many times the loop should run.
// Has three parts: initialization, condition, and increment/decrement.
for (let i = 0 ; i <=100; i++){
    console.log("Iam soory ");
} 
// now if some one asks you to write sorry or anything 100 times or even 1000 times you can do 
// it by loops..............


// 🔹while Loop (Use When You Don’t Know the Exact Iterations)
// Runs as long as the condition is true.
// You must manually update the variable inside the loop, or it may run forever.
let count = 1;
while (count <= 3) {
  console.log("Count: " + count);
  count++;
}

// do...while Loop (Use When You Want to Run At Least Once)
// Similar to while, but it runs at least once, even if the condition is false.
let num = 1;
do {
  console.log("Number: " + num);
  num++;
} while (num <= 3);

// 📌 When to Use Which Loop?

// Loop Type	 Use Case
// for	         When you know how many times to run (e.g., iterating an array).
// while	     When you don’t know how many times to run (e.g., waiting for user input).
// do...while    When you must run at least once, even if the condition is false.


// 3️⃣ Break & Continue
// break stops a loop completely.
// continue skips the current iteration and moves to the next.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Stops the loop when i is 3
    }
    console.log(i);
  }
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skips 3 and moves to the next iteration
    }
    console.log(i);
  }

  
//   🎯 Summary:
// ✔ if...else - Makes decisions.
// ✔ switch - Checks multiple values.
// ✔ for - Loops a set number of times.
// ✔ while - Loops while a condition is true.
// ✔ do...while - Runs at least once.
// ✔ break / continue - Controls loop execution.