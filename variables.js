const accountId = 1234
let accountName = "Rohan"
var accountCity = "Rajkot"
accountPassword = "12345"
let accountStatus;

console.log(accountName)
accountName = "Rohit"
accountCity = "Taulihawa"

// var is not used furthur because of the variable and functional scope problem

console.table([accountId,accountName,accountCity,accountPassword,accountStatus])

console.log(typeof undefined) //undefined
console.log(typeof null) //object