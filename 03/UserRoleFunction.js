display = (data) => {
    document.getElementById('header').innerText = data
}

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access.`

        case "subadmin":
            return `${name} is sub-admin with access to add or delete courses.`

        case "testprep":
            return `${name} is testing engineer with access to test cases.`

        case "user":
            return `${name} is user with access to courses.`

        default:
            return `${name} is user with a trial period.`

    }
}

display(getUserRole("Biswajit"))
display(getUserRole("John", "user"))
