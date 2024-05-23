//Immediately Invoked Function Expression

(function fun(){
    //named IIFE
    console.log("IIFE")
})(); //compulsory put ; after any IIFE

( (user) =>{
    console.log(`Hello ${user}`)
})("Rohan");