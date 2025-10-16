let count = 0
function fun(){
    setInterval(()=>{
        count++
        if (count>0){
            let a = document.querySelector('#time')
            alert('time up' + count)
        }
        

    

    


    },3000)
}