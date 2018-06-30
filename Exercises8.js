/*
Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan 
mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. 
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
   
    var save = [];
    for (let i = 0; i < str.length; i++) {
        save.push(str[i]);
    }

    for (let i = 0; i < save.length; i++) {
        for (let j = 0; j < save.length; j++) {
        if (save[j] > save[j + 1]) {
            var kc = save[j];
            save[j] = save[j + 1];
            save[j + 1] = kc;
        }
        }
    }

    return save.join('');
}

//TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

/*
// The second ways
function urutkanAbjad(str) {
    var arrStr = [];
    for (var i = 0; i < str.length; i++) {
        arrStr.push(str[i]);
    }
    return arrStr.sort().join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
*/
