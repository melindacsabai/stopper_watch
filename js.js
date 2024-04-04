let time = new Date(0-0-0)
let uj = document.querySelector("#uj")

console.log(time);

time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);

let timer = null
function setTime (){
   
    time.setSeconds(time.getSeconds()+1);

    uj.innerHTML = time.toLocaleTimeString("hu-HU", {hour: '2-digit', minute:'2-digit', second: '2-digit'});
}
console.log(setTime())


document.querySelector('#start').addEventListener('click', () => {
    setTime();
    if(timer == null)
      timer = setInterval(setTime,1000 );
  });
  
  
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(timer)
    timer = null;
})

document.querySelector('#reset').addEventListener('click', () => {
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);

    uj.innerHTML = time.toLocaleTimeString("hu-HU", {hour: '2-digit', minute:'2-digit', second: '2-digit'});
    clearInterval(timer)
    timer = null;
  });
  

document.querySelector('#resz_ido').addEventListener('click', () => {
    let  mertIdoEgyseg = document.createElement('li');
      ido.appendChild(mertIdoEgyseg);
    mertIdoEgyseg.innerText = `${o-1} óra ${m-1} perc és ${s-1} másodperc`
})
