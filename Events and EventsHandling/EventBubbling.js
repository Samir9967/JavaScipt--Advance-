
let ul = document.querySelector("ul");
ul.addEventListener("click",(dets)=>{
    let value = dets.target;
    value.style.textDecoration = "line-through";
})