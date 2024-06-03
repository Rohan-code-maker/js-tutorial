class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Welcome ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username} added a course`)
    }
}

const user1 = new Teacher("chai","chai@gmail.com",123)
user1.addCourse()
user1.logme()

console.log(user1 instanceof User);
console.log(user1 instanceof Teacher);