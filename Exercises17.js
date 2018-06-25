/*
Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return 
nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. 
Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
    // you can only write your code here!
    let str = String(angka)
    if(str.length === 1){
        return Number(str[0])
    } else {
        return Number(str[0]) + totalDigitRekursif(str.slice(1))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5


/*
// The second ways, without rekursif 
function totalDigitRekursif(angka) {
    // you can only write your code here!
    let str = String(angka)
    let array = []
    for(let i = 0; i < str.length; i++){
        array.push(Number(str[i]))
    }

    var result = 0;
    for(let j = 0; j < array.length; j++){
        result += array[j]
    }
    return result
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
*/
