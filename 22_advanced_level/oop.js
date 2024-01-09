class user {
    name;
    age;
    constructor(name,age) {
        this.name = name;
        this.age  = age;
    }

    hello = ()=>{
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

const sumukh  = new user("sumukha",22)

sumukh.hello()

