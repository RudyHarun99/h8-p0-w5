/*
Logic Challenge - Password Generator
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces,
dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk
membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf
vokal yang diganti akan menjadi huruf setelah huruf vokal itu
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi
kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam
string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
  var vokal = 'aiueoAIUEO';
  var ubah = 'bjvfpBJVFP';
  var hasil = '';

  for (var i = 0; i < str.length; i++) {
    var cek = false;
    for (var j = 0; j < vokal.length; j++) {
      if (str[i] == vokal[j]) {
        hasil += ubah[j];
        cek = true;
      }
    }

    if (cek == false) {
      hasil += str[i];
    }
  }

  return hasil;
}

function reverseWord (str) {
  var hasil = '';

  for (var i = str.length - 1; i >= 0; i--) {
    hasil += str[i]
  }

  return hasil;
}

function setLowerUpperCase (str) {
  var low = 'abcdefghijklmnopqrstuvwxyz';
  var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hasil = '';

  for (var i = 0; i < str.length; i++) {
    var cek = false;
    for (var j = 0; j < low.length; j++) {
      if (str[i] == low[j]) {
        hasil += up[j];
        cek = true;
      } else if (str[i] == up[j]) {
        hasil += low[j];
        cek = true;
      }
    }

    if (cek == false) {
      hasil += str[i]
    }
  }

  return hasil;
}

function removeSpaces (str) {
  var hasil = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      hasil += str[i];
    }
  }

  return hasil;
}

function passwordGenerator (name) {
  var ubahVokal = changeVocals(name);
  var balikKata = reverseWord(ubahVokal);
  var besarKecil = setLowerUpperCase(balikKata);
  var hapusSpasi = removeSpaces(besarKecil);
  var hasil = '';

  if (name.length < 5) {
    hasil = 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    hasil = hapusSpasi;
  }

  return hasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'