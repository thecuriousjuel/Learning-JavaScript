
let input = "user1"

switch (input)
{
    case "admin":
        console.log("Gets full access")
        break

    case "subadmin":
        console.log("Create and delete courses")
        break

    case "testuser":
        console.log("Create and delete test cases")
        break

    case "user":
        console.log("Can view courses")
        break

    default:
        console.log("Trial User")
}

