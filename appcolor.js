function what(){
    let a = document.getElementById('h1')
    a.style.backgroundColor='green'
    a.style.color='white'
    let p = document.getElementById('p1')
    p.style.backgroundColor='green'
    p.style.color='black'

    

}

function insta(){
    let b = document.getElementById('h2')
    b.style.backgroundColor='lightpink'
    b.style.color='black'

}

function face(){
    let c = document.getElementById('h3')
    c.style.backgroundColor='royalblue'
    c.style.color='white'

}

function snap(){
    let d = document.getElementById('h4')
    d.style.backgroundColor='yellow'
    d.style.color='black'

}

function twit(){
    let e = document.getElementById('h5')
    e.style.backgroundColor='blue'
    e.style.color='white'

}
document.getElementById('btn').addEventListener("click",function(){
    document.getElementById("message").innerText("")
})