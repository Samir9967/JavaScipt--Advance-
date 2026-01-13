
let p = document.querySelector("#abcd");
// p.addEventListener("mouseover",()=>{
//     p.style.color = "red";
//     p.style.backgroundColor = "green";
// });

// p.addEventListener("mouseleave",()=>{
//     p.style.color = "black"
//     p.style.backgroundColor = "white";
// })

window.addEventListener("mousemove",(dets)=>{
    p.style.top = dets.clientY + "px";
    p.style.left = dets.clientX + "px";
})