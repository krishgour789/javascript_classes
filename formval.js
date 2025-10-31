function fun1(){
    let a = document.querySelector("#name").value
    let b = document.querySelector("#age").value
    let c = document.querySelector("#contact").value
    let d = document.querySelector("#address").value
    let e = document.querySelector("#city").value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value
    let cpass = document.querySelector('#cpass').value


/// with the help of these we can apply requried to multiple input




// after the alert msg cursor automatically come one the input box 
    if (a==''){
          // to show the alert mssg below the input box
        document.querySelector("#error").innerHTML='Please Fill the Name'
        document.querySelector("#name").focus()
    return false}
    else if(b==''){
        alert("Please fill first")
        document.querySelector("#age").focus()
        return false
    }
    else if(isNaN(b)){
        alert("Bhai Number DAAL")
    }
    else if(c==''){
        alert("Please fill first")
        document.querySelector("#contact").focus()
        return false
    }
     else if(isNaN(c) || c.length<10 || c.length>10){
        alert("Please fill first")
        document.querySelector("#contact").focus()
        return false
    }

    else if(d==''){
        alert("Please fill first")
        document.querySelector("#address").focus()
        return false
    }

    else if(e==''){
        alert("Please fill first")
        document.querySelector("#name").focus()
        return false
    }
    else if(! (email.includes('@gmail.com'))){
        alert("Please enter valid e,mail")
        document.querySelector("#email").focus()
        return false
    }
    
    else if(pass==''){
        alert("Please fill first")
        document.querySelector("#pass").focus()
        return false
    }
   else if(!(pass.match(/[~!@#$%^&*()_]/))){
    alert("Password must contain one special character")
    document.querySelector("#pass").focus()
    return false
   }
   else if(cpass==''){
        alert("Please fill first")
        document.querySelector("#cpass").focus()
        return false
    }
   else if(!(cpass.match(/[~!@#$%^&*()_]/))){
    alert("Password must contain one special character")
    document.querySelector("#cpass").focus()
    return false
   }
}

  
// homework 
// age = 3
// contact = <10>
//  31 october homework
//password must contain greater than 8 character and 15 character special character
// password must be capital letter small letter number special character
// confirm password must be same as password


