let a = document.querySelector('.head')
a.style.color='red'

// Query selector is used to target single elemnet while queryselectorarray allow to target multiple elements
//  if we use queryselectorarray then we we also use indexing

let b = document.querySelectorAll('#demo')
b[0].style.color='red'
b[1].style.color='green'
b[2].style.color='royalblue'

function mobile(){
    let d = document.querySelector('#image')
    d.setAttribute('src','mobile.webp')
    let k = document.querySelector('#photo')
    k.textContent='mobile'
    k.style.color='green'
  
}

function laptop(){
    let e = document.querySelector('#image')
    e.setAttribute('src','laptop.jpg')
     let j = document.querySelector('#photo')
    j.textContent='tablet'
    j.style.color='yellow'
  
}
