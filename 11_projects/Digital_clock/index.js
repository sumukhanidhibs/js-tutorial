
let di = document.querySelector('.container')

function clkk(){
let gettime = new Date();
hr = gettime.getHours()
min = gettime.getMinutes()
sec = gettime.getSeconds()
if(sec<10){
di.innerHTML = `${hr}:${min}:0${sec}`;
}
else{
  di.innerHTML = `${hr}:${min}:${sec}`
}
}
setInterval(clkk,1000)




