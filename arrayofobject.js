// let student = [
//     {
//      name : "Krish",
//      age : 19,
//      contact  : 6464  
//     },
//     {
//     name : "Rohit",
//     age : 19,
//     contact  : 6464 
//     },
//     {
//     name : "kanha",
//     age : 19,
//     contact  : 6464 
//     },
//     {name : "Mohit",
//     age : 17,
//     contact  : 64554 
//     },
//     {name : "Sobit",
//     age : 17,
//     contact  : 64554 
//     }
// ]
// console.log(student)


// map is high order function which help to access elements and traansfer all elements
// into the new elements.  

let ar = [{name:"krish",age:17},{name:"mohit",age:23}]
// ar.map(()={              syntax
//     return
// })
// let res = ar.map((ar)=>{
//     return ar.age>=18  // it help to fetch the name of objects in arrray.
// })
// console.log(res)


// let res = ar.map((ar)=>{
//     return ar.age+ar.name  // it help to fetch the names of objects in arrray.
// })
// console.log(res)


// filter is function that help to filter out the data According. to the condition 
// it is also a callback function

// let res = ar.filter((ar)=>{
//     return ar.age>=18   // it help to fetch the name of objects in arrray.
// })
// console.log(res)

//------------------------------------
// D . Structuring of Array
// let [name,age,city]=["Krish",21,"sehore"]     // we dont need indexing in d.structuring
// console.log(name)
// console.log(age)

let{name,age}={name:"krish",age:34}
console.log(name)

//----------------
// spread operator is denoted by ...
// it is used to merge not for adding a=[1,2,3,] b=[4,5,6] => [4,5,6,1,2,3]

// a = [1,2,3]
// b=[4,5,6,...a]
// console.log(b)  // [4, 5, 6, 1, 2, 3]
