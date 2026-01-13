let h1 = document.querySelector("h1");
window.addEventListener("keydown",(dets)=>{
    if(dets.key === " "){
        h1.textContent = "SPC";
    }
    else{
        h1.textContent = dets.key;
    }
});


let inp = document.querySelector("input");
let bttn = document.querySelector("#bttn");
bttn.addEventListener("click",()=>{
    inp.click();
});

inp.addEventListener("change",(dets)=>{
    bttn.textContent = dets.target.files[0].name;
})