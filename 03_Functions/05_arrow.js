
//#01 method 
const add = function(num1,num2){
    return num1+num2
}
console.log(add(1,2))

//#02 method
const sub = (num1,num2)=>{
    return num1-num2
}
console.log(sub(4,2))

//#03 method
const mul = (num1,num2) => (num1*num2)
console.log(mul(4,2))

//object with arrow function
const user = {
    name:"sumukha",
    age:22
}
const userDetail = (obj) => obj
console.log(userDetail(user))

