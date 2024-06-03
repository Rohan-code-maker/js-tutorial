class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}345678`
    }

    set password(value){
        this._password = value
    }

}
const user1 = new User("Rohan","rtyu",1234)
console.log(user1.password)