function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this, username) // VVI concept
    this.email = email
    this.password = password
}

const user1 = new createUser("Rohan","rohan.com","123")
console.log(user1)