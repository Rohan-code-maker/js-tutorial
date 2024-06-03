let heros = ["Spiderman","Thor"]

let power = {
    spiderman:"sling",
    thor:"hammer"
}

Object.prototype.printMe = function(){
    console.log(this)
}

Array.prototype.printArray = function(){
    console.log(this)
}

// As in js everything is a Object so any changes in object will lead to change in everything

heros.printMe()
power.printMe()

heros.printArray()
// power.printArray() //This will give error cause it is injected only for arrays not for objects

//Inheritence in JS
const user = {
    username: "Rohan",
}
const Teacher = {
    isAvailable : true
}

//modern sytax fot inheriting property of other object
Object.setPrototypeOf(user,Teacher)