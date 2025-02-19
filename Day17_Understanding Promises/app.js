// Javascript Promises 
// A proise in js is an object that represents the eventual completion or failure of an asynchronous operation 
// it manges asynchronous code more efficntly 

// states of promises
// A promise can be in one these states 
//  1-Pending  : Intial state , operation not completed 
//  2-Fuliled  : Operation completed successfully.
//  3-Rejected : Operation failed.


//  Creating a promise 
// A Promise takes a function with two parameters: resolve (for success) and reject (for failure).
let myPromise = new Promise ( (resolve , reject) =>{
    let success = true
    setTimeout ( ()=>{
        if (success){
                resolve ("Operation Success")
        }    else {
            reject ("Operation failed")
        }
    }, 2000)
})


// Consuming a Promise
// Use .then(), .catch(), and .finally() to handle Promises.

myPromise
.then ( (result) =>{
console.log("Success" , result); // runs if success
})
.catch ( (error) =>{
console.log("Failed", error); // runs when failed
})
.finally  ( () =>{
console.log('Completed'); // Runs no matter what
})

// using asuc /await fro promies
async function fetchData() {
    try {
      let result = await myPromise;
      console.log("Success:", result);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      console.log("Done!");
    }
  }
  
  fetchData();


// Promise Methods
// Promise.all() → Resolves when all Promises are resolved, rejects if any fail.

// Promise.all([promise1, promise2]).then(console.log).catch(console.error);
// Promise.race() → Resolves or rejects as soon as one Promise settles.

// Promise.race([promise1, promise2]).then(console.log).catch(console.error);
// Promise.allSettled() → Waits for all Promises to settle (resolved or rejected).
// Promise.any() → Resolves when the first Promise is fulfilled.

// Why Use Promises?
// ✅ Avoids "callback hell"
// ✅ Improves code readability
// ✅ Easier error handling