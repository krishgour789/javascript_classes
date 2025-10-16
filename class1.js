// With the help of these we can remove or add to an image with class list
function fun(){
    let wrap = document.querySelector('#container')
    wrap.classList.add('wrapper')
}
function rem(){
    let rem = document.querySelector('#container')
    rem.classList.remove('wrapper')
}

function both(){
    let c = document.querySelector('#container')
    c.classList.toggle('wrapper')
}