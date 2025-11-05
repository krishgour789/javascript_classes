// object is a data type in which multiple types  data can be store
// the advantage of object is that it is key value form it is easy to fetch the data

// let emp = {
//     name:"shivam",
//     age:20,
//     city:'Sehore'
// }
// console.log(emp.name)
// console.log(emp.age)
// console.log(emp.city)

// emp.email = '@gmail.com' // with the help of these we can add/update key value pair
// console.log(emp)

let emp1 = {
    student : 'Krish',
    age : 21,
    email : '@gmail.com',
    rollno : 21,
    contact :2626223,
    city : 'sehore',
    country : 'india',
    region : 'local',
    gender : 'male',
    world : 'earth' ,
    account : {
        acc_name : "krish",      // we can  also store multiple data and make obejcts inside object 
        acc_num : 12443355,
        ifsc_co : "UNI0866"

    }



}
console.log(emp1.account.acc_name)
console.log(emp1.account.acc_num)
