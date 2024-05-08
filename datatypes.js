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
console.log(sentence.split(" "))

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
