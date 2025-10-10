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


function change(){
    document.getElementById('text').textContent='Get Lost'
    document.getElementById('text').style.backgroundColor='red'

}


function change1(){
    document.getElementById('text').textContent='Tap here'
    document.getElementById('text').style.backgroundColor='green'

}


function laptop(){
    document.getElementById('img').setAttribute('src','laptop.jpg')
}
function mobile(){
    document.getElementById('img').setAttribute('src','mobile.webp')
}


function tablet(){
    document.getElementById('img').setAttribute('src','tablet.webp')
}