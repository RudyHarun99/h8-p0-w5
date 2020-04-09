/*
Logic Challenge - Most Frequent Largest Numbers
Problem
Implementasikan function sortingdan getTotaluntuk mendapatkan angka yang paling besar
dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sortingdan getTotal).
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/

function sorting(arrNumber) {
  // urutkan arrNumber dari yang terbesar
  for (var i = arrNumber.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arrNumber[j] < arrNumber[j+1]) {
        var tampung = arrNumber[j+1];
        arrNumber[j+1] = arrNumber[j];
        arrNumber[j] = tampung;
      }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  // mengambil nilai terbesar dari arrNumber sbg max
  var max = arrNumber[0];

  // menghitung jumlah kemunculan dari nilai max
  var freq = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (max == arrNumber[i]) {
      freq++;
    }
  }

  // menampilkan hasil
  if (arrNumber.length == 0) {
    var hasil = '';
  } else {
    var hasil = `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${freq} kali`;
  }
  
  return hasil;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''