let mainDiv = document.querySelector(".form-container")
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
const select = document.getElementById("destination");

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card-container");

    let profile = document.createElement("div");
    profile.classList.add("card");

    let image = document.createElement("img");
    image.classList.add("img");
    image.setAttribute("src","https://images.unsplash.com/photo-1763598363324-cd072a67dc61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let p1 = document.createElement("p");
    p1.textContent = inputs[1].value;

    let p2 = document.createElement("p");
    const selectedText = select.options[select.selectedIndex].text;
    p2.textContent = selectedText;

    profile.appendChild(image);
    card.appendChild(profile);
    profile.appendChild(h3);
    profile.appendChild(p1);
    profile.appendChild(p2);

    mainDiv.appendChild(card);

    inputs.forEach((inp)=>{
        inp.value = "";
    });
    
});
// Samir