//Immediately Invoked Function Expression

(function fun(){
    //named IIFE
    console.log("IIFE")
})(); //compulsory put ; after any IIFE

( (user) =>{
    console.log(`Hello ${user}`)
})("Rohan");

//falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null, undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

// console.log(val1)

// Ternary operator
// (consdition) ? true : false

const price = 100
price <=80 ? console.log("less than 80") : console.log("more than 80")