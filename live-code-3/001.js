 /**
  Hapus Simbol

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.

  RULES:
  - WAJIB MENGGUNAKAN algoritma / pseudocode
  - DILARANG menambahkan parameter baru
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

/*
FUCNTION hapusSimbol
parameter : param (type : string)
START
STORE 'pembanding' with '%$!@#+-*='
STORE 'i' with 0
STORE 'str.length' with integer value
STORE 'changeString' with string value
FOR i LESS THAN str.length
  IF str[i] EQUALS TO pembanding[0]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[1]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[2]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[3]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[4]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[5]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[6]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[7]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO pembanding[8]
    changeString = changeString + ''
  ELSE IF str[i] EQUALS TO ' '
    changeString = changeString + ''
  ELSE 
    changeString = changeString + str[i]
  i++
END FOR
RETURN changeString
END FUNCTION
*/

function hapusSimbol(str) {
  // your code here
  let pembanding = 'abcdefghijklmnopqrstuvwxyz1234567890'
  // console.log(pembanding[0])
  let changeString = ''
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < pembanding.length; j++){
      if(str[i] === pembanding[j]){
        changeString += str[i]
      }
    }
  }
  return changeString
}


console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
