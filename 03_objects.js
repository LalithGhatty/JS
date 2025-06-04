//singleton
//Object.create

//object literal
const mySym = Symbol("Key1");
const JsUser = {
    name: "Lalith",
    [mySym]: "Key1",
    "fullname":"LalithGhatty",
    age: 20,
    email: "lalith@gmail.com",
    location: "Bangalore"
}
console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser.fullname);
console.log(JsUser[mySym]);
JsUser.name = "KrishnaLalithGhatty";
JsUser.email = "LalithGhatty@gmail.com"
console.log(JsUser.name);
console.log((JsUser.email));
Object.freeze(JsUser);
JsUser.name = "VenkataSaiKrishnaLalith";
console.log(JsUser.name);


JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user : ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




