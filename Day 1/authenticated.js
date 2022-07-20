let is_logged_from_email = true
let is_logged_from_google = false
let is_logged_from_facebook = false

// if (is_logged_from_email || is_logged_from_google || is_logged_from_facebook)
// {
//     console.log('Log Out')
// }
// else
// {
//     console.log('Log In')
// }

let autheticate = is_logged_from_email || is_logged_from_google || is_logged_from_facebook ? 'Log Out' : 'Log Out'

console.log(autheticate)

