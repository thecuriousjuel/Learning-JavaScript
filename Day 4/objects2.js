let User = {
    name: "",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    }
}

let biswajit = Object.create(User);
console.log(biswajit);

biswajit.name='biswajit';
biswajit.getUserName();

let sam = Object.create(User, {
    name: {value: 'sammy'},
    courseCount: {value: 3}
});

sam.getUserName()

