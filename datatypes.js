// Primitive datatypes :- Number,BigInt,String,null,undefined,Symbol

let pass1 = Symbol('123')
let pass2 = Symbol('123')

// console.log(pass1 === pass2)

const name = new String("Rohan")
// console.log(name[0])
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('h'))

// console.log(name.substring(0,4))
// console.log(name.slice(-5,2))

const newString = "   Rohan    "
// console.log(newString)
// console.log(newString.trim())

const url = "https://hitesh.com/hitesh%20gupta"
// console.log(url.replace("%20","-"))
// console.log(url.includes("gupta"))

const sentence = "my name is Rohan Kumar Gupta"
// console.log(sentence.split(" "))

//Non-Primitive(Reference) Types :- Arrays,Objects,Function

let arr = [1,2,3]

let obj = {
    name: 'Rohan',
    age: 20
}

let myFunc = function(){
    console.log("Hello world")
}

// Memory Allocation techniques
// Stack (Primitive), Heap (Non Primitive)

let myName = "Rohan"

let anotherName = myName
anotherName = "Rohit"

// console.log(myName)
// console.log(anotherName)

let obj2 = obj
obj2.name = "Rohit"

// console.log(obj.name)
// console.log(obj2.name)

// **************** Number **************
const score = 200
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const num = 1123.8947
// console.log(num.toPrecision(3))

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))


//+++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math.PI)
// console.log(Math.abs(-4))
// console.log(Math.round(3.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))

// console.log(Math.random())
// console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
