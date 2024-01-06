let intervalId;
let switchh = 0;
let sayDate = function (){
    let date = new Date
    document.querySelector('h3').innerHTML = `${date.getSeconds()}`
    // console.log(`${date.getSeconds()}`)
}

function ctime(){
    
    switchh = 1;
    if (switchh == 1){
    intervalId = setInterval(sayDate,1000);
    }
    switchh = 0;
}

function stopp(){
    clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click',ctime);

document.querySelector('#stop').addEventListener('click',stopp);
// clearInterval(ctime)