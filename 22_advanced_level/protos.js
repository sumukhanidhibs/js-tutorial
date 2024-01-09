// function mul5(n){
//     function hello(){
//         console.log("hello")
//     }
//     hello()
//     return 5*n;
// }

// mul5.power = 2

// console.log(mul5.prototype)
// console.log(mul5.power)
// console.log(mul5(5))

function add(num1,num2){
    this.num1 = num1
    this.num2 = num2
    

    return num1+num2
}

add.prototype.increment = function(){
    this.num2++
}

add.prototype.print = function(){
    console.log(`the number is ${this.num2}`)
}


// console.log(add(2,2));
// console.log(add.prototype)
const add1 = new add(2,5)
add1.increment()
add1.print()

/* what happens when the new keyword is entered:

A new object is created : the new keyword initiates the creation of a new javascript object.

prototypes are linked: The newly created object is linked to the prototype property of the constructor function.This means it has the access to the methods and properties defined in the constuctor method.

The constructor is called : The constructor argument is called with the specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor.JS assumes this,
the newly created object to be the intended return value.

the new object is returned : after the constructi=or function has been called ,if it didnt return a non-primitive value, the newly created object is returned. 
*/
