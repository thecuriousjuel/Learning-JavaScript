let getUserRole = function (name, role)
{
    switch (role)
    {
        case "admin":
            return `${name} is admin with all access.`

        case "subadmin":
            return `${name} is subadmin with access to add or delete courses.`

        case "testprep":
            return `${name} is tester with access test courses.`

        case "user":
            return `${name} is user with access to watch courses.`

        default:
            return `${name} is a trial user.`
    }
}

out = getUserRole('Biswajit', 'user')
console.log(out)

