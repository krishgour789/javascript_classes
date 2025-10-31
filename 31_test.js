function fun1(){
    let a = document.querySelector("#name").value
    let b = document.querySelector("#age").value
    let c = document.querySelector("#contact").value
    let d = document.querySelector("#address").value
    let e = document.querySelector("#city").value

    if (a==''){
          // to show the alert mssg below the input box
        document.querySelector("#error").innerHTML='Please Fill the Name'
        document.querySelector("#name").focus()}
    else if(b=='' || b<18 || b>100){
        alert("Please fill first and age must be between 18")
        document.querySelector("#age").focus()
    }
    else if(isNaN(b)){
        alert("Bhai Number DAAL")
    }
    else if(c==''){
        alert("Please fill first")
        document.querySelector("#contact").focus()
    }
    else if(isNaN(c) || c<1000000000 || c>9999999999){
        alert("Please enter Valid Contact Number")
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
