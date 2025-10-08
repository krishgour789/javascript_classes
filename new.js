document.getElementById("h1").textContent= 'Yes this is me'
document.getElementById("h2").textContent= 'Yes this is me'
document.getElementById("h3").textContent= 'Yes this is me'
document.getElementById("h4").textContent= 'Yes this is me'
document.getElementById("h5").textContent= 'Yes this is me'
document.getElementById("h6").textContent= 'Yes this is me'
let a = document.getElementById("k1")
a.textContent=("No , You are wrong")

let b = document.getElementById("lily")
b.innerHTML = "<i> lilly bhai </i>"
b.setAttribute('Align','center')

let c = document.getElementById("u1")
c.innerHTML = "<u> This is you </u>"

// with the  help of this we use attributes in jss
document.body.setAttribute('bgcolor','yellow')

/*
Attributes are additional properties set on HTML elements to control their behavior or appearance.
For example, 'id', 'class', 'src', 'href', and 'style' are common attributes.
You can get or set attributes in JavaScript using getAttribute and setAttribute methods.
*/

// Question 2 . How to remoce the attributes?
document.getElementById("h1").removeAttribute('style')
document.getElementById("h1").removeAttribute('class')
document.getElementById("h2").removeAttribute('id')

/*
JavaScript is a high-level, interpreted programming language primarily used to create interactive and dynamic content on web pages. It allows developers to manipulate HTML and CSS, handle events, validate forms, and communicate with servers, making web applications more engaging and functional.
*/

/// to set img src with the help of js?
document.getElementById("img1").setAttribute('src','happy.jpg')

/// how to apply single css properties in html with the help of javascript ?

// we can apply the style attributes to apply the css .
document.getElementById("head").style.backgroundColor='Red'


/// how to apply Multiple css properties in  javascript ?
// we can apply multiple css properties in javascrepit while taking a variable and store the html in it 

let z = document.getElementById("head1")
z.style.backgroundColor='royalblue'
z.style.textAlign='center'

