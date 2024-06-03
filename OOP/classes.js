class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = 123
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalizeName(){
        return this.username.toUpperCase()
    }
}

const user1 = new User("Rohan","r@gmail.com",123)
console.log(user1.encryptPassword());
console.log(user1.capitalizeName());

// Behind the scene

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = 123
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc` 
// }

// User.prototype.capitalizeName = function(){
//     return this.username.toUpperCase()
// }

// const user1 = new User("Rohan","r@gmail.com",123)
// console.log(user1.encryptPassword());
// console.log(user1.capitalizeName());


