// closure and lexical scoping
// function abc(){
//     let a = 12;                  // this is lexical scoping 
//     return function(){
//         console.log(a);
//     }
// }

function xyz(){
    let count = 1;
    return function(){
        console.log(count);
    }
}
let ab = xyz();
ab();