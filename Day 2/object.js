let user = {
    firstname : "Biswajit",
    lastname : 'Basak',
    role : 'Admin',
    loginCount : 32,
    isSignedIn : false,
    courseList : [],

    buyCourse : function(courseName)
    {
        this.courseList.push(courseName)
    },
    getCourseCount : function()
    {
        return `${this.firstname} is enrolled in ${this.courseList.length} courses.`
    }
}

console.log(user.firstname)

// Don't like
console.log(user['firstname'])

user.loginCount = 44
console.log(user)

console.table(user)


console.log(user.getCourseCount())
user.buyCourse('React JS Course')
console.log(user)
console.log(user.getCourseCount())


