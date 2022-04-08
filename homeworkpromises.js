// let p = new Promise((resolve,reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//      resolve('Success')   
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     conseol.log('This is in the catch '+ message)
// })






/**
 * 
 * ;;;;;;;;;;PROMISES;;;;;;;;;;;;;;;
 * An object tht represents the eventual compleion of an 
 * asynchronus operation and its results
 */

//const myFirstPromise = new Promise(function(resolve, reject) {
//     // GO DO SOME ASYNC WORK .....
//     let gettingMarried = 'yes';

//     age = age * 3;

//     setTimeout(function() {
//         if (gettingMarried === 'yes') {
//             //IF IT SUCCEEDS
//             resolve('------DONE------');
//         } else {
//             // IF IT FAILS
//             reject('------ERROR--------');
//         }
//     }, 2500)


// });

// // PROMISE STATES: Pending, Fulfilled (REsults), Rejected (Error)

// console.log(myFirstPromise)// Before

// myFirstPromise.then(function(result) {
//     console.log(result);
//     console.log(myFirstPromise);
// }, function(error){
//     console.log(error);
//     console.log(myFirstPromise);
// });


/**
 * ;;;;;;;;FETCHING ATA FROM AN API;;;;;;;;;
 */

// fetch("https://anapioficeandfire.com/api/characters/583").then(function(response){
//     return response.json();
// })

fetch("https://anapioficeandfire.com/api/characters/go").then(function(response){
    return response.json();
}).then(function(data) {
    console.log(data);
}).catch((error) => {
    console.log('Thats Wrong Information!')
});

