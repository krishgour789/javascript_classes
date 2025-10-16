//

let h = document.getElementsByTagName('h1')
console.log(h[0])
h[0].style.color='red'
//   getelementsbytagname node list ko retrun krta hai (array ki form mai ) aur agr nodelist ki form mai
// return krta hai aur hum saare css properties

let y = document.getElementsByTagName('h2')
console.log(y[0])
y[0].style.backgroundColor='yellow'
y[1].style.backgroundColor='red'
y[2].style.backgroundColor='blue'
y[3].style.backgroundColor='green'
y[4].style.backgroundColor='pink'
y[5].style.backgroundColor='orange'


// class name or tagname dono ek jaise behave krte hai getelementsbyclassname array ki form mai return krta hai 
// variable ko

let z = document.getElementsByClassName('head')
console.log(z[0])
z[0].style.backgroundColor='yellow'
z[1].style.backgroundColor='royalblue'
z[2].style.backgroundColor='pink'
