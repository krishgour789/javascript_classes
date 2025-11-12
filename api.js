
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way, avoiding "callback hell."

// Key States of a Promise:
// Pending: The initial state; the operation is still ongoing.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure (an error).
// Example:
// {.then is used to fullfil promise Syntax . then(c)}
// Here's a simple example of how a Promise works:
// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Simulate success or failure

//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });

// // Using the Promise
// myPromise
//     .then(result => {
//         console.log(result); // Runs if fulfilled
//     })
//     .catch(error => {
//         console.error(error); // Runs if rejected
//     });

// Explanation:
// Creating a Promise: You create a promise using the Promise constructor, which takes a function with two parameters: resolve and reject.
// Resolving or Rejecting: Inside the function, you determine whether to call resolve (for success) or reject (for failure).
// Handling Results: You can use .then() to handle fulfilled promises and .catch() to handle rejected ones.
// This structure helps manage asynchronous operations more clearly and effectively.


// sync :  it execute code within time . in a code if one line take 10 seconds then first it do that linecode
// async : it not time dependent its execute less time taking line . 

// async,await : both are same without await async cant use . both are used to stop the api and load successfully

// async function access(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await data.json()
//     console.log(res);
// }
// access()
// template literals = ''

async function access(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let res = await data.json()
    let result = res.map((e)=>`
    <tr>
    <td> ${e.userId} </td>
    <td> ${e.id} </td>
    <td> ${e.title} </td>
</tr>`
).join("")
document.querySelector('#showdata').innerHTML=result
}
access()

