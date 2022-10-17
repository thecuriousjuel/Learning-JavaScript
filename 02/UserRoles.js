display = (data) => {
    document.getElementById("header").innerText = data
}

var user = "admin"

switch (user) {
    case "admin":
        display('You have full access.')
        break;

    case "subadmin":
        display('You can create/delete courses.')
        break;

    case "testprep":
        display('You can create/delete tests.')
        break;

    case "user":
        display('You view the courses.')
        break;

    default:
        display(user)
        break;
}
