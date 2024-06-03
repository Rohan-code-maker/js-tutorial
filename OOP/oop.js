function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Hello ${this.username}`)
    }

    // return this //it is implicitly given code no need to write
}

//prototype injection
User.prototype.increment = function(){
    this.loginCount++
    console.log(this.loginCount)
}

User.prototype.print = function(){
    console.log(`Welcome ${this.username}`)
}

const user1 = new User("Rohan",1,true)
const user2 = new User("Hitesh",2,false)
console.log(user1)
console.log(user2)
