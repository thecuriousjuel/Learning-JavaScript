console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
}, 5000);

// const http = require('http');

// function getData(callback) {
//   http.get('http://example.com/data', res => {
//     let data = '';

//     res.on('data', chunk => {
//       data += chunk;
//     });

//     res.on('end', () => {
//       callback(data);
//     });
//   });
// }

// getData(data => {
//   console.log(data);
// });


// const printAddr = (string, callback) => {
//     setTimeout(() => {
//         console.log(string);
//         callback();
//     }, 2000);
// }

// const getAddress = () => {
//     printAddr('Bengaluru', ()=> {
//         printAddr('KA',  () => {
//             printAddr('India', () => {})
//         })
//     })
// }

// getAddress();




// const getAsyncResponse = callback => {
//     setTimeout(() => {
//         callback('This is the response from Asynchronous function.')
//     }, 2000);
// }

// // getAsyncResponse(response => {
// //     console.log(response);
// // });

// function logging(response){
//     console.log(response);
// }

// getAsyncResponse(logging);

