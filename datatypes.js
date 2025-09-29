// data types = 1> primitive 2>non-primitive
// >>primitive
// 1.Number
// 2.bool
// 3.string
// 4.null
// 5.undefined

// >> Non primitive_
// 1.Array
// 2.Object
// 3.function


// function = function is block of code and set of instruction 
// function is use for code reuseblity 

// function identifire( ){
//     //code
// }

// three thing which help to create function
// 1> function declaration
// // function identifire()

// 2. function defination
// // block of code

// 3.calling
// // identifire()


// function sum(){
//     n1=3
//     n2=5
//     console.log(n1+n2)

// }
// sum()
// sum()
// sum()
// sum()


// Q1, wap to check area of rectangle using function all input taken from user

// function rectangle(){
//     let l = parseInt(prompt("Enter length"))
//     let b = parseInt(prompt("Enter breadth"))
//     console.log(l*b)
// }
// rectangle()

//q3. 
// function game(){
//     let num = parseInt(prompt("Enter a number from 1 to 20"))
//     if(num>=11 || num<=20){
//         for(let i=20;i>=1;i--){
//             console.log(i)
//         }
//     }
//     else if(num>=1 || num<=10){
//         for(let a=10;a>=num;a--)
//             console.log(a)
//     }
// }
// game()


// There are two types of functions
// 1 >> In - Built Function / Pre Defined Function
// 2 >> USer Defined Function

// There are four types of user defined function
// 1> no argu & no return 
// 2> with argu & no return
// 3> with arg & return
// 4> no arg & return 

// fucntion demo(a #Parameter / Formal)
//{
    // syntax
//}
//demo(8 #Parameter / Actual)

// 2 > with argu & no return 
// function demo(a){
//     console.log(a+a)
// }
// demo(10)


// wap to take input from user and check the number is odd and even using fucntio type2
// let num = parseInt(prompt("Enter a Number : "))
// function demo(num){
//     if ( num%2==0){
//         console.log("Even Number")

//     }
//     else{
//         console.log("Odd Number")
//     }
// }
// demo(num)


// wap to print a reverse table of any number  using function type 2
let n = parseInt(prompt("Enter a number "))
function table(m){
    for(let i=10;i>=1;i--){
        console.log(n,"*",i,"=",n*i)
    }
}
table(n)



