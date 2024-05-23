const user = {
    username: "Rohan",
    price: 122,
    message: function(){
        // console.log(`Hello ${this.username}`)
        console.log(this)
    }
}
// user.message()
// user.username = "Rohit"
// user.message()

// console.log(this) // this will return empty object
 
// function any(){
//     let username = "Rohan"
//     console.log(this.username)
// }

// const any = function(){
//     let username = "Rohan"
//     console.log(this.username)
// }

// const any = ()=>{
//     let username = "Rohan"
//     console.log(this.username)
// }

// any() 

// const any = (num1,num2) => {
//     return num1+num2
// }

// const any = (num1,num2) => (num1+num2) //implicit fucntion definition

// console.log(any(2,3))

const obj = () => ({username:"Rohan",price:123})

console.log(obj())