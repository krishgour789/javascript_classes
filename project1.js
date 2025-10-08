let a = document.getElementById('h1')
a.style.backgroundColor='royalblue'

let b = document.getElementById('p1')
b.style.backgroundColor='red'

let c = document.getElementById('button')
c.style.backgroundColor='yellow'
c.style.borderRadius='10px'

// how can be apply one time css in javascript ?

let d=document.getElementById('demo')
d.style.cssText="background-color:yellow ;padding:10px "

// how to add element/tag in html  with the help of javascript ?

let tag = document.createElement('h2')
tag.textContent='new element by js'
console.log(tag)
document.getElementById('parent').append(tag)

let e = document.createElement("p")
e.textContent='this is from javascript'
console.log(e)
document.getElementById('parent').append(e)