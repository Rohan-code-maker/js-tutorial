//Object Literals
const mySym = Symbol("key1")

const myObj = {
    name: "Rohan",
    age: 18,
    [mySym]: "MYKEY1",
    courses: ["CE","IT"]
}

// console.log(myObj["name"])
// console.log(myObj[mySym])
// console.log(typeof myObj[mySym])

// myObj.name = "Rohit"
// Object.freeze(myObj)
// myObj.name = "Rohan"
// console.log(myObj)

myObj.greeting = function(){
    console.log("Hello")
}
// console.log(myObj.greeting())

myObj.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}
// console.log(myObj.greeting2())



//***************Singleton Object*********

const user = new Object()
user.id = 1
user.name = "Rohan"
user.isLoggedIn = true

// console.log(user)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj = {obj1,obj2,obj3}
// const obj = Object.assign({},obj1,obj2,obj3)
const obj = {...obj1,...obj2,...obj3}
// console.log(obj)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))