function fun1(){
    let a = document.querySelector("#name").value
    let b = document.querySelector("#age").value
    let c = document.querySelector("#contact").value
    let d = document.querySelector("#address").value
    let e = document.querySelector("#city").value


/// with the help of these we can apply requried to multiple input




// after the alert msg cursor automatically come one the input box 
    if (a==''){
          // to show the alert mssg below the input box
        document.querySelector("#error").innerHTML='Please Fill the Name'
        document.querySelector("#name").focus()}
    else if(b==''){
        alert("Please fill first")
        document.querySelector("#age").focus()
    }
    else if(isNaN(b)){
        alert("Bhai Number DAAL")
    }
    else if(c==''){
        alert("Please fill first")
        document.querySelector("#contact").focus()
    }

    else if(d==''){
        alert("Please fill first")
        document.querySelector("#address").focus()
    }

    else if(e==''){
        alert("Please fill first")
        document.querySelector("#name").focus()
    }
        return false
    }

  
// homework 
// age = 3
// contact = <10>
