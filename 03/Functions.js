
display = (data) => {
    document.getElementById('header').innerText = data
}

sayHello = (name) => {
    // display(`Hello! ${name}`)
    return 'Hello in India'
}

display(sayHello('Biswajit'))
