//forof loop gives values directly

const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)
// }

const str = "Hello World"
// for (const i of str) {
//     if(i === " "){
//         continue
//     }else{
//         console.log(`Each character is ${i}`)
//     }
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }

const myObj = {
    game1: "NFS",
    game2: "GTA",
}

// for (const [key,value] of myObj) {
//     console.log(key,':-',value)
// }
// Objects are not iteatable through forof loop
// Objects are iteratable through forin loop

//forin loop gives key not values directly
// for (const key in myObj) {
//    console.log(myObj[key]) 
// }

const newArr = ["Python","java","CPP"]

// for (const key in newArr) {
//     console.log(newArr[key])
// }

// for (const key in map) {
//     console.log(key)
// }
// Maps are iteratable through forof but not through forin loop


// foreach loop

// newArr.forEach(function (item){
//     console.log(item)
// })

// newArr.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// newArr.forEach(printMe) //dont execute give only reference

const myCoding = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    },
]

myCoding.forEach( (item,index) =>{
    console.log(item.langName,index)
})