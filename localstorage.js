// what is local Storage
// Local Storage is a web storage feature that allows web applications to store data in a
//  user's browser.Data type is String. It provides a way to store key-value pairs in a web browser with no
//  expiration time, meaning the data persists even after the browser is closed and reopened.
// Key Features of Local Storage:
// 1. **Storage Capacity**: Typically, Local Storage can hold around 5-10 MB of 
// data, depending on the browser.
// 2. **Synchronous API**: Local Storage operations are synchronous, meaning they block the 
// main thread while reading or writing data.
// 3. **Same-Origin Policy**: Data stored in Local Storage is accessible only to the
//  same origin (protocol, host, and port) that created it.
// 4. **Data Types**: Local Storage only stores strings. If you want to store objects, you need
//  to serialize them using `JSON.stringify()` and deserialize them using `JSON.parse()`.

// Common Use Cases:
// - Storing user preferences (like themes or language settings).
// - Caching data for offline access.
// - Maintaining user sessions without server-side storage.

// ### Example Usage:
// Here's a simple example of how to use Local Storage in JavaScript:

// javascript
// // Store data
// localStorage.setItem('username', 'JohnDoe');

// // Retrieve data
// const username = localStorage.getItem('username');
// console.log(username); // Outputs: JohnDoe

// // get data
// // getitem()   >>> access

// // Remove data
// localStorage.removeItem('username');   at time one element

// // Clear all data
// localStorage.clear();  delete

// localStorage.setItem("username","Krish")
// localStorage.setItem("age",50)
// localStorage.setItem("city","sehore")

// getItem()
// let name = localStorage.getItem("username")   // it is use to fetch the elements
// console.log(name)

// removeitem()
// localStorage.removeItem("age")

//clear()

// localStorage.clear()


// let data = {
//     name:"Krish",age:23,city:"Sehore"
// }
// localStorage.setItem("username",JSON.stringify(data))  // JSON.Stringify helps to convert objects into string .


// let a = JSON.parse(localStorage.getItem("username")) // jSON.Parse use to convert the String into Objects
// console.log(a.name)
// console.log(a.age)

