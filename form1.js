// with the help of these we can handle any form we can add subtract or anything .
function fun1(){
    let a = parseInt(document.querySelector("#num1").value)
    let b = parseInt(document.querySelector("#num2").value)

    document.querySelector("#h1").innerHTML= a+b

    // with the help of these return we can stop to re-load the page
    return false
}

// write a program to take 5 input values from the user and print below the form 