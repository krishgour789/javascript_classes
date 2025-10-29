function fun1(){
    let a = document.querySelector("#name").value
    let b = document.querySelector("#city").value
    let c = document.querySelector("#education").value
    let d = document.querySelector("#mobile").value
    let e = document.querySelector("#Country").value
    /// with the help of these
    document.querySelector("#h1").innerHTML = a
    document.querySelector("#h2").innerHTML = b
    document.querySelector("#h3").innerHTML = c
    document.querySelector("#h4").innerHTML = d
    document.querySelector("#h5").innerHTML = e

    return false
}