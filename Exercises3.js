/*
Problem
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return median dari deret 
angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5] adalah 
3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. Median dari deret yang berjumlah genap adalah 
rata-rata dari dua nilai tengah. Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
*/

function cariMedian(arr) {
    // you can only write your code here!
    var panjangNilai = arr.length
    var pembulatan = Math.ceil(panjangNilai / 2)

    if(panjangNilai % 2 == 0){
        for(var i = 0; i < panjangNilai; i ++){
          if(i == pembulatan){
              return (arr[i]+arr[i-1]) / 2
          }
        }
    }
    else {
        for(var i = 0; i < panjangNilai; i ++){
        if(i == pembulatan){
            return arr[i-1]
        }
        }
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5


/* The second ways
function cariMedian(arr) {
  var cek = Math.floor(arr.length / 2);
  if(arr.length % 2 !== 0) {
    return arr[cek];
  } else {
    return (arr[cek-1] + arr[cek]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
*/


/* The third ways
function cariMedian(arr) {
  // you can only write your code here!
  var panjangNilai = arr.length
  
  if(panjangNilai % 2 != 0){
    var median = Math.floor(panjangNilai / 2)
    return arr[median]
  }
  else {
    var angka1 = panjangNilai / 2
    var angka2 = (panjangNilai / 2) - 1
    var median = (arr[angka1] + arr[angka2]) / 2
    return median
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
*/
