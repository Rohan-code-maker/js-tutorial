class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Welcome ${this.username}`)
    }

    static Unique(){
        return `${this.username}abc`
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}

// const user1 = new Teacher("chai","chai@gmail.com",123)
const user1 = new User("chai")
user1.Unique()