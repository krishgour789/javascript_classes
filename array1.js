// let student = ['harry', 22, 'developer', 'mobile developer']
// console.log(student)
// console.log(student[0])
// console.log(student[1])
// console.log(student[2])
// console.log(student[10]) // undefined

// let a = prompt("Enter your name")
// let b = prompt("Enter your age")
// let c = prompt("Enter your Education")
// let d = prompt("Enter your City")
// let e = prompt("Enter your Country")
// let emp = []
// for( let a=0; a<5; a++){
//     emp[a] = prompt("Enter your data ")
// }
// console.log(emp)

// wap to take 10 inputs from user and store them in array and print sum of all

// let number = []
// let sum = 0
// for(let i=0; i<10; i++){
//     number[i] = parseInt(prompt("Enter Numbers"))
//     sum+=number[i]
// }
// console.log(sum)

// wap to take 10 input from the user and print only odd number


let number = []
for(let i=0; i<10; i++){
    number[i] = parseInt(prompt("Enter Numbers"))
    if (number[i]%2!=0){
        console.log(number[i])
    }
}

