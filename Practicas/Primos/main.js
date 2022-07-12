import './src/assets/css/tailwind.css'

function $(select,Isdiv=true){
  return !Isdiv 
    ? document.querySelector(select) 
    : document.getElementById(select);
}
const app = $("app");

const isprime = (n) => {
  if(n===0 || n==1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n % i === 0){
      return
    }
  }
  return true;
}



let index = 2;
let count = 1;
const limit = 100;
while(count < limit){
  if (isprime(index)){
    const span = document.createElement("span")
    span.textContent = `${index}`
    if(count %2 ===0){
      span.setAttribute("class", "bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-3 rounded-md font-bold text-center hover:scale-110 transition-transform cursor-pointer");
    }
    else{
      span.setAttribute("class", "bg-gradient-to-br from-amber-300 to-orange-400 text-white p-3 rounded-md font-bold text-center hover:scale-110 transition-transform cursor-pointer");
    } 
    app.appendChild(span);
    count++;
  }
  index++;
}