/*
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan 
return password-nya dari function ini juga
*/

function changeVocals (str) {
    //code di sini
    let changeString = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a'){
        changeString += 'b'
        } else if(str[i] === 'i'){
        changeString += 'j'
        } else if(str[i] === 'u'){
        changeString += 'v'
        } else if(str[i] === 'e'){
        changeString += 'f'
        } else if(str[i] === 'o'){
        changeString += 'p'
        } else if(str[i] === 'A'){
        changeString += 'B'
        } else if(str[i] === 'I'){
        changeString += 'J'
        } else if(str[i] === 'U'){
        changeString += 'V'
        } else if(str[i] === 'E'){
        changeString += 'F'
        } else if(str[i] === 'O'){
        changeString += 'P'
        } else {
        changeString += str[i]
        }
    }
    return changeString
}


function reverseWord (str) {
    //code di sini
    let reverseString = ''
    for(let j = str.length-1; j >= 0; j--){
        reverseString += str[j]
    }
    return reverseString
}

function setLowerUpperCase (str) {
    //code di sini
    let lowerUpper = ''
    for(let k = 0; k < str.length; k++){
        if(str[k] === str[k].toUpperCase()){
        lowerUpper += str[k].toLowerCase()
        } else {
        lowerUpper += str[k].toUpperCase()
        }
    }
    return lowerUpper
}

function removeSpaces (str) {
    //code di sini
    let removeSpace = ''
    for(let l = 0; l < str.length; l++){
        if(str[l] === ' '){
        removeSpace += ''
        } else {
        removeSpace += str[l] 
        }
    }
    return removeSpace
}

function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    let param1 = changeVocals(name)
    let param2 = reverseWord(param1)
    let param3 = setLowerUpperCase(param2)
    let param4 = removeSpaces(param3)
    return param4
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'


/*
// The second ways
// solution 1 - After Refactoring
function changeVocals (str) {
    var result="";
    for(var letter of str){
      if("aiueo".includes(letter) || "AIUEO".includes(letter)){
        var num = letter.charCodeAt() + 1;
        result+=String.fromCharCode(num);
      } else {
        result+=letter;
      }
    }
    return result;
}
  
function reverseWord (str) {
    return str.split("").reverse().join("");
}
  
function setLowerUpperCase (str) {
    var result="";
    for(var letter of str){
      if(letter===letter.toUpperCase()){
        result+=letter.toLowerCase();
      } else {
        result+=letter.toUpperCase();
      }
    }
    return result;
}
  
function removeSpaces (str) {
    return str.trim().replace(/\s/g,''); 
}
  
function passwordGenerator (name) {
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var changedVocal=changeVocals(name);
    var reversed = reverseWord(changedVocal);
    var setStr= setLowerUpperCase(reversed);
    var result = removeSpaces(setStr);
    return result;
} 
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
*/


/* 
// Solution 2 -Before Refactoring
function changeVocals (str) {
    result="";
    for(var i=0; i<str.length; i++){
      if("aiueo".indexOf(str[i]) !== -1){ 
          result+=String.fromCharCode(str[i].charCodeAt()+1);  
      } else if("AIUEO".indexOf(str[i]) !== -1){
          result+=String.fromCharCode(str[i].charCodeAt()+1).toUpperCase();  
      } else {
        result+=str[i];
      }
    }
    return result;
}
  
function reverseWord (str) {
    var result="";
    for(var i=str.length-1;i>=0;i--){
      result+=str[i];
    }
    return result;
}
  
function setLowerUpperCase (str) {
    var result="";
    var lowerCased= str.toLowerCase();
    var upperCased=str.toUpperCase();
    for(var i=0;i<str.length;i++){
      if(str[i]===lowerCased[i]){
        result+= str[i].toUpperCase();
      } else if(str[i]===upperCased[i]){
         result+= str[i].toLowerCase();
      } else {
        result+= str[i];
      }
    }
    return result;
}
  
function removeSpaces (str) {
    var result="";
    for(var letter of str){
      if(letter!== " "){
        result+=letter;
      }
    }
    return result;
}
  
function passwordGenerator (name) {
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var changed = changeVocals(name);
    var rev = reverseWord(changed);
    var lowUp = setLowerUpperCase(rev);
    var password = removeSpaces(lowUp);
    return password;
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
*/
