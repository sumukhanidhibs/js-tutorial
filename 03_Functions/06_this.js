const User = {
    name:"Sumukha",
    welcomeMsg:function(){
        //console.log(this);//{ name: 'Sumukha', welcomeMsg: [Function: welcomeMsg] }
        console.log(`${this.name}, welcome to the website..`);
    }
}
//this refer to the current context.
User.welcomeMsg()
User.name = "Nidhi"
User.welcomeMsg()

