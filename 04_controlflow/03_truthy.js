// const email = "a@si.com" //true
//falsy values
// const email= "" //false
// const email= 0 //false
// const email= false //false
// const email= null //false
// const email= undefined //false
// const email= NaN //false


// if(email){
//     console.log("got the email");
// }
// else{
//     console.log("didn't get the email")
// }

//checking the object is empty or not
myObj= {name:"sumukha"}
if(Object.keys(myObj).length==0){
    console.log("Object is Empty");
}
else{
    console.log("Object is not empty");
}
