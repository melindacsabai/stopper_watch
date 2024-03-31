console.log("Stopperóra");

let seconds = document.querySelector("#seconds");
let minute = document.querySelector('#minute');
let ora = document.querySelector('#ora');
let mertIdo = document.querySelector('#mert_ido');
let display = document.querySelector("#display");

let timerId = null;

let s = 1;
let m = 1;
let o = 1;

const sTime = () =>{
  s < 10 ? seconds.innerText = '0' + s++ : seconds.innerText = s++;
  
if(s == 60){
  m < 10 ? minute.innerText = '0' + m++ : minute.innerText =  m++;
  s = 0;
}
if(m == 60){
  ora.innerText = o++;
  m = 0;
}
// seconds.innerText = s++;
}


document.querySelector('#start').addEventListener('click', () => {
  sTime();
  if(timerId == null)
    timerId = setInterval(sTime,1000 );
});


document.querySelector('#stop').addEventListener('click', () => {
   clearInterval(timerId)
   timerId = null;
})
  
document.querySelector('#reset').addEventListener('click', () => {
  s = 0;
  seconds.innerText = '0' + s++;  
  m = 0;
  minute.innerText = '0' + m++;
  o = 0;
  ora.innerText = o++;

  clearInterval(timerId)
  timerId = null;
});


let ido = document.createElement('ul');
  display.appendChild(ido)

document.querySelector('#resz_ido').addEventListener('click', () => {
  let  mertIdoEgyseg = document.createElement('li');
    ido.appendChild(mertIdoEgyseg);
  mertIdoEgyseg.innerText = `${o-1} óra ${m-1} perc és ${s-1} másodperc`
})

