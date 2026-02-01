// apply 

let obj = {
    names : "Samir",
    age : 27,
}

function abc(a,b,c){
    console.log(this);
    console.log(this,a,b,c);
}
abc.apply(obj,[1,2,3]);