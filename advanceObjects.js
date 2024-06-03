const user = {
    name: "Rohan",
    age: 18,
    message: function(){
        console.log(`Hello ${this.name}`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(user,"name")
// );

// for (let [key,value] of Object.entries(user)) {
//     if(typeof value !== 'function'){
//         console.log(`${key}:${value}`);
//     }
// }

Object.defineProperty(user,'name',{
    writable: false,
    enumerable: false,
    configurable: false,
    value: "Rohan Gupta"
})

console.log(user.name)

console.log(Object.getOwnPropertyDescriptor(user,"name")
);

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

user.name = "Rohan"
console.log(user.name);
