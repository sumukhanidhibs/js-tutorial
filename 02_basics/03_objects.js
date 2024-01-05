// const User = {
//     email:"Sumukhanidhi@gmail.com",
//     name:{
//         username:"sumukanidhi",
//         fullname:"sumukha nidhi b s"
//     },
//     location:"Bengaluru"
// }
// console.log(User.name.username)

//combining two objects using spread..
const a1 = {1:"a",2:"b"}
const a2 = {3:"c",4:"d"}
const a3 = {...a1,...a2}
// console.log(a3);

//combining two objects using Object.asign..
// const a1 = {1:"a",2:"b"}
// const a2 = {3:"c",4:"d"}

// const a3 = Object.assign({},a1,a2)
// // console.log(a3);


//objects keys and values
console.log(Object.keys(a3));
console.log(Object.values(a3));