//Immediately Invoked Function Expression
//To avoid global space pollution..
(function db(){
    console.log("DB connected");
})();// ";" is important here..


((name) =>{
    console.log(`name : ${name} `);
})('sumukha');

