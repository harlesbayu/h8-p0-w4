/*
Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata 
dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan 
me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan 
kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
    // you can only write your code here!
    /*
        Sudah sesuai output tapi masih perlu perbaikan
        karena masih membaca kata sebelumnya yang paling banyak mengandung angka yang sama
    */
    var arrKata = []
    var stringKata = ''
    for(var i = 0; i < kata.length; i++){
  
      if(kata[i] === " "){
        arrKata.push(stringKata)
        stringKata = ''
      } else {
        stringKata += kata[i]
      }
    }
  
    arrKata.push(stringKata)
  
    for(var j = 0; j < arrKata.length; j++){
      var count = 0
      var countMax = 0
      for(var k = 0; k < arrKata[j].length; k++) {
        count = arrKata[j].split(arrKata[j][k]).length - 1
        if(count > countMax){
          countMax = count
        }
        if(countMax > 1){
          return arrKata[j]
        }
      }
  
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau


  /*
  // The second ways
  // sudah benar, tapi harus dipelajari
  function hitungHuruf(kata) {
	kata = kata.split(" ");
	var winnerWord = [];

	for (var value of kata) {
		var manyLetterInWord = {};
		var score = 0;
		for (var letter of value) {
			if (manyLetterInWord[letter]) {
				manyLetterInWord[letter] += 1
			}
			else {
				manyLetterInWord[letter] = 1;
			}
		}
		// console.log(manyLetterInWord);

		for (var letter in manyLetterInWord) {
			// console.log (letter)
			if (manyLetterInWord[letter] > 1) {
				// console.log(manyLetterInWord[letter]);
				score++;
				// console.log(score);
			}
		}

		// console.log(score)

		if (score > 0) {
			if (winnerWord.length === 0) {
				// winnerWord.push(value);
				// winnerWord.push(score);
				winnerWord = [value, score];
			}
			else if (winnerWord[1] < score) {
				winnerWord = [value, score];
			}
		}

	}
	return winnerWord[0]
}

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
*/


/*
// Albert style
function hitungHuruf(kata) {

    // CONVERT KALIMAT KE BENTUK ARRAY & BUAT HURUF DALAM SETIAP KATA BERURUT //

    var arr= kata.toLowerCase().split(' ')   //[ 'today,', 'is', 'the', 'greatest', 'day', 'ever' ]
    // console.log (arr)
    var urut=[]
    for (i=0; i<arr.length; i++) {
      var x= arr[i].split('').sort().join('')
      urut.push(x)
    }
    //console.log (urut)  //[ ',adoty', 'is', 'eht', 'aeegrstt', 'ady', 'eerv' ]
    

    // HITUNG (COUNT) JUMLAH HURUF KEMBAR DALAM SETIAP KATA //

    var sumcount=[]
    for (i=0; i < urut.length; i++) {// refer to kata dalam kalimat 
      var counter= 0
        for (j=0; j < urut[i].length; j++) {// refer to kata
            if (urut[i][j-1]===urut[i][j] || urut[i][j]===urut[i][j+1]) {        // refer to huruf kembar
                counter++     
            }          
        }
        sumcount.push(counter)        
    }        
    // console.log (sumcount)


    // DETERMINE COUNTER TERBESAR & CARI COUNTER TSB ADALAH INDEX KEBERAPA (utk pairing dengan KATA-nya) //

    var sumcount2= sumcount.slice(0) // cloning
    var sumcount2= sumcount2.sort()
    //console.log (sumcount2)

    if (sumcount2[sumcount2.length-1] === 0) {
        var hasil= -1
    }
    else {
        var max= sumcount2[sumcount2.length-1]// ambil counter terbesar (paling kanan)
        //console.log(max)
        var index= sumcount.indexOf(max) //cari index dari counter terbesar  
        //console.log (index)   
        var hasil= arr[index] //index diketahui, bisa dipairing ke kata yg mana
    }  

  return hasil
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
*/
