let User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Firstname is ${this.firstName}`);
};


var biswajit = new User('biswajit', 5);
console.log(biswajit);
biswajit.getCourseCount();

if (biswajit.hasOwnProperty('firstName')){
    biswajit.getFirstName();
}


let sam = new User('Sam', '1');
console.log(sam);

let l = [biswajit, sam];
console.log(l);
sam.getCourseCount();