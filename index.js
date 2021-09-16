// function FizzBuzz (valor1, valor2) {
//     for(i =1; i <= 100; i++){
//         if(i % valor1 == 0 && i % valor2 == 0){
//             console.log(i +' FizzBuzz');
//         } else if( i % valor2 == 0){
//             console.log(i +' Buzz')
//         } else if( i % valor1 == 0){
//             console.log(i +' Fizz')
//         }else {
//             console.log(i);
//         }
//     }
// }
// FizzBuzz(3, 6);

// let FizzBuzz = (valor1, valor2) => {
//     for (i = 1; i <= 100; i++) {
//         if (i % valor1 == 0 && i % valor2 == 0) {
//             console.log(i + ' FizzBuzz');
//         } else if (i % valor2 == 0) {
//             console.log(i + ' Buzz')
//         } else if (i % valor1 == 0) {
//             console.log(i + ' Fizz')
//         } else {
//             console.log(i);
//         }
//     }
// }
// FizzBuzz(3, 6);

let FizzBuzz = (valor1, valor2, palavra1 = 'FIZZ', palavra2 = 'BUZZ') => {
    for (i = 1; i <= 100; i++) {
        if (i % valor1 == 0 && i % valor2 == 0) {
            console.log(i + ' : ' + palavra1 + palavra2);
        } else if (i % valor2 == 0) {
            console.log(i + ' : ' + palavra2)
        } else if (i % valor1 == 0) {
            console.log(i + ' : ' + palavra1)
        } else {
            console.log(i);
        }
    }
}

FizzBuzz(3, 6, 'Fizz', 'Buzz');