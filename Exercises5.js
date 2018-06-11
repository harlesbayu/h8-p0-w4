function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var panjangHuruf = huruf.length;
  
    var nextHuruf = "";
    for (var i = 0; i < kata.length; i++) {
      for(var j = 0; j < panjangHuruf; j++){
        if(kata[i] == huruf[j]){
          nextHuruf += huruf[j+1];
        }
      }
    }
    return nextHuruf
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu