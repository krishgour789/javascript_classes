// to click on '+' button to increament the value
let count = 0;
function positive(){
    count++;
    document.getElementById("count").innerHTML=count;
}

function negative(){
    count--;
    if (count<0){
        count=0;
        alert("Count cannot be negative")
    }
    document.getElementById("count").innerHTML=count;
}

let a = document.getElementById("count")
a.style.backgroundColor='royalblue'
a.style.color='white'
a.style.padding='12px'
a.style.width='50px'
a.style.height='20px'
a.style.textAlign='center'

let b = document.getElementById("positive")
b.style.backgroundColor='green'
b.style.color='white'
b.style.padding='12px'



let c = document.getElementById("negative")
c.style.backgroundColor='green'
c.style.color='white'
c.style.padding='12px'
