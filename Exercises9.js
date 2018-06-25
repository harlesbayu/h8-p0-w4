/*
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string
tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
// you can only write your code here!
    var wordChange = ""
    for(var i = 0; i < kalimat.length; i++){
        if(kalimat[i] === kalimat[i].toUpperCase()){
        wordChange += kalimat[i].toLowerCase();
        } else {
        wordChange += kalimat[i].toUpperCase()
        }
    }
    return wordChange
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

  
/*
// The second ways
function tukarBesarKecil(kalimat) {
// you can only write your code here!
    var wordChange = ""
    for(var i = 0; i < kalimat.length; i++){
        if(kalimat[i].charCodeAt() >= 97 && kalimat[i].charCodeAt() <= 122){
        wordChange += kalimat[i].toUpperCase();
        } else {
        wordChange += kalimat[i].toLowerCase()
        }
    }
    return wordChange
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
*/


/*
// The third ways
function tukarBesarKecil(kalimat) {
// you can only write your code here!
    var abjad = "abcdefghijklmnopqrstuvwxyz"
    var wordChange = ""
    for(var i = 0; i < kalimat.length; i++){
        if(abjad.indexOf(kalimat[i]) === -1){
        wordChange += kalimat[i].toLowerCase();
        } else {
        wordChange += kalimat[i].toUpperCase()
        }
    }
    return wordChange
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
*/


/*
// Pelajari cara berikut ini
function tukarBesarKecil(kalimat) {
    return kalimat.replace(/([a-zA-Z])/g, function(a) {
             return String.fromCharCode(a.charCodeAt() ^ 32);
           });
   }
   
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
*/
