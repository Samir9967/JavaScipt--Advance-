let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");
// li.forEach((value)=>{
//     console.log(value);
// });

// Create a new li and add at last.
let newLi = document.createElement("li");
newLi.textContent = "Adu";
ul.appendChild(newLi);

// Create a new element img with placeholder src
let img = document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1766849008917-51df97cc8f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D");
img.classList.add("placeholder");
ul.after(img);

let li = document.querySelectorAll("li");
li[1].remove();