function both(){
    let a = document.querySelector('#wrap')
    let an =a.classList.toggle('wrapper')
    console.log(a)
    if(an==true){
        document.querySelector('#btw').textContent='LIGHT'
    }
    else{
        document.querySelector('#btw').textContent='DARK'
    }
}