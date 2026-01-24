
// setTimeout(function(){

// },1000)       -> 1000 = 1 second 

// let count = 10;

// let tm = setInterval(()=>{
//     if(count > 1){
//         count--;
//         console.log(count);
//     }
//     else{
//         clearInterval(tm);
//     }
// },1000);

let count = 0;
let progressValue = document.querySelector("#progressValue");
let progress = document.querySelector(".progress-bar");
let h2 = document.querySelector("h2");
let time = setInterval(()=>{
    if(count < 100){
        count++;
        progress.style.width = `${count}%`;
        progressValue.textContent = `${count}%`;
    }
    else{
        h2.textContent = "Download Completed..."
        clearInterval(time);
    }
},30);