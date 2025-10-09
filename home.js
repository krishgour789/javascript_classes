for(let a = 1;a<=10;a++){
    let li = document.createElement('li')
    li.textContent=a
    document.getElementById('list').append(li)
    if(a%2==0){
        li.style.backgroundColor='green'
        li.style.color='white'
        li.style.padding='12px'
       
    }
    else{
        li.style.backgroundColor='blue'
        li.style.color='black'
        li.style.padding='12px'
    }
}
let b = document.getElementById('h1')
b.style.backgroundColor='royalblue'
b.style.textAlign='center'
 