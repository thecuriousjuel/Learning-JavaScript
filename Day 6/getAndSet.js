let person = {
    firstName: "Biswajit",
    lastName: "Basak",
    get fullName(){
        return `The fullname is ${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
console.log(person.fullName);
try{
    person.fullName = false;
}catch(e){
    console.log(e);
}
console.log(person.fullName);

let e = Error('I am empty Error');

