//promise creation
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
    if(!error){
        resolve({username:"Javascript",password:123})
    }else{
        reject("Error: Something went wrong")
    }
    }, 1000)
})

//syntax 1 for consuming promise
promise.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(() => console.log("Finally done"))


//syntax 2 for consuming promise
async function consumePromise(){
    try {
        const response = await promise
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then( (data) => console.log(data))
.catch((error) => console.log(error))
