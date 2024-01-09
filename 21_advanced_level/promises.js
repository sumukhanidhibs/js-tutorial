// const promise1 = new Promise(function (resolve, reject) {
//   //Doing an async task
//   //DB tasks, cryptography , network connection
//   setTimeout(() => {
//     console.log("task completed");
//     return resolve();
//   }, 3000);
// });

// promise1.then(() => {
//   console.log("Promise is consumed");
// });

// const promise2 = new Promise(function (resolve, reject) {
//   //Doing an async task
//   //DB tasks, cryptography , network connection
//   setTimeout(() => {
//     console.log("task completed");
//     return resolve("Sumukha");
//   }, 3000);
// });

// promise2.then((name) => {
//   console.log("Promise is consumed, ", name);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   let d = true
//   if(d){
//     resolve({name:"sumukha",location:"bengaluru"})
//   }
//   else{
//     reject("ERROR:Some errror occurred")
//   }
// });

// promise4.then((user) => {
//   console.log(`${user.name} is from ${user.location}`);
//   return user.name
// }).then((name)=>{
//     console.log(`${name} is the name of this person.`)
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("promise is executed")
// })

const promise5 = new Promise(function (resolve, reject) {
  let fun = function () {
    let d = true;
    if (!d) {
      resolve({ name: "sumukha", location: "bengaluru" });
    } else {
      reject("ERROR:Some errror occurred");
    }
  };
  setTimeout(fun,1000)
});

async function consumepromise5(){
    try {
        const response = await promise5;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
consumepromise5()

// promise4
//   .then((user) => {
//     console.log(`${user.name} is from ${user.location}`);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(`${name} is the name of this person.`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("promise is executed");
//   });
