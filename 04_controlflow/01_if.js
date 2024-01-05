let login = true
let debitCard = false

if(login && debitCard){
    console.log("Customer allowed");
}else if(login){
    if(!debitCard){
        console.log("Enter your card details");
    }
}else{
    console.log("You are not logged in");
}