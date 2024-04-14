const getTodos = () => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(`State Number : ${request.readyState} 
            Response Text  : ${request.responseText}`);

            out = document.querySelector('p');
            out.innerText = request.responseText;
        }
        else if (request.readyState === 4) {
            console.log("Not Successful: " + request.readyState);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

// out = document.querySelector('p');
// console.log(out);

// out.innerText = request.responseText
// console.log('Operation completed!');

getTodos(() => {
    
});

