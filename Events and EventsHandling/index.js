// let body = document.querySelector("body");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");

let button = document.querySelector("#bttn-click");
button.addEventListener("click",()=>{
    // body.style.backgroundColor = "black";
    h1.style.color = "green";
    p.style.color = "green";
});

let inp = document.querySelector("input");
inp.addEventListener("input",(dets)=>{
  if(dets.data !== null){
    console.log(dets.data);
  }
});

