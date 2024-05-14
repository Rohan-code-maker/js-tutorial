// const arr = [1,2,3,4,5]
const arr = new Array(1,2,3,4,5)
// console.log(arr)

// arr.push(7)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(9) //adding element in 0 index
// console.log(arr)
// arr.shift() //deleting element of 0 index
// console.log(arr)

// console.log(arr.includes(3))
// console.log(arr.indexOf(3))

const newArr = arr.join('.')
// console.log(newArr)
// console.log(typeof newArr)

//difference between slice and splice 

const arr1 = arr.slice(1,3)
// console.log(arr1)
// console.log(arr)

const arr2 = arr.splice(1,3)
// console.log(arr2)
// console.log(arr)


const name1 = ["Rohit","Rohan","Amrit"]
// name1.push(["aman","Sahab"])
// console.log(name1)

const name2 = ["aman","Sahab"]
// console.log(name1.concat(name2))

const allName = [...name1,...name2]
// console.log(allName)

const bigArray = [1,2,3,[4,5,6],7,[4,5,[6,7,8]]]
// console.log(bigArray.flat(Infinity))


// console.log(Array.isArray("Rohan"))
// console.log(Array.from("Rohan"))
// console.log(Array.from({name:"Rohan"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))