
let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input",()=>{
    let leftCount = 14 - inp.value.length;
    if(leftCount < 0){
        span.textContent = leftCount;
        span.style.color = "red";
    }
    else{
        span.textContent = leftCount;
        span.style.color = "black";
    }
});