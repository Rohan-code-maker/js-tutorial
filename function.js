function login(username){
    if(!username){
        console.log("Please enter a username")
    }else{
        return `${username} just logged in`
    }
}

// console.log(login("Rohan"))

function cartPrice(val1,val2,...num1){
    return num1
}

// console.log(cartPrice(200,300,400,500))

const myObj = {
    username: "Rohan",
    age: 20
}

function forObject(anyObject){
    return `Username is ${anyObject.username} and age is ${anyObject.age}`
}
// console.log(forObject(myObj))

// console.log(forObject({
//     username: "Rohit",
//     age:22
// }))

const array = [1,2,3,4,5]
function forArray(AnyArray){
    return AnyArray[1]
}
// console.log(forArray(array))
// console.log(forArray([2,3,4,5]))
