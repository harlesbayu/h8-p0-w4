/*
Problem
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array 
atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, 
modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih 
dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam 
modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
    // you can only write your code here!
    var result = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 1; j < arr.length; j++){
            if(arr[i] === arr[i+j]){
                result.push(arr[i])
            }
        }
    }

    if(result.length > arr.length){
        return -1
    }
    else if(result.length > 0){
        return result[0]
    } else {
        return -1
    }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
<<<<<<< HEAD


/*
// The second ways (TRUE)
function cariModus(arr) {
  var obj={};
  for(var num of arr){
    if(!obj[num]){
      obj[num] = 0;
    }
    obj[num]++;
  }
  // console.log(obj);

  var winnerNum=1; //2
  var winnerName; //5
  for(var key in obj){
    if(obj[key]>winnerNum){
      winnerNum=obj[key];
      winnerName=key;
    }
    // console.log('winnernum ===> ' + winnerNum)
    // console.log('winnerName ===> ' + winnerName)
  }

  if(winnerName===undefined || (Object.keys(obj).length===1)){
    return -1;
  }
  return winnerName;
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
*/


/*
// The third ways (same with me)
function cariModus(arr) {
  var siapa = [];
  for (let i = 0; i < arr.length; i++) {

    var cek = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        cek = true;
      }
    }

    if (cek) {
      siapa.push(arr[i]);
    }
  }

  if (siapa.length === 0 || arr.length === siapa.length) return -1;

  return siapa[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 5, 5, 5, 5, 5, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
*/


/*
//The fourth ways (TRUE)
function cariModus (arr) {
  var modus = 0;
  var modusFreq = 1;
  var angkaModus = -1;

  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        modus = modus + 1;
        if (modusFreq < modus) {
          modusFreq = modus;
          angkaModus = arr[i];
        }
      }
    }
    modus = 0;
  }

  if (modusFreq === arr.length) {
    angkaModus = -1;
  }

  return angkaModus;
}


// TEST CASES
console.log(cariModus([10, 4, 4, 5, 5, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
*/
=======
>>>>>>> ee659f5fcf046051910594b2168cda5a0ef7fe99
