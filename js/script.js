var resultSurnameList = document.getElementById('surname-list');
var surname = prompt('Ciao che cognome hai?');
var surnameList = ['Castle','Zane','Kasumi'];
for (var i = 0; i < resultSurnameList.length; i++) {
  var contentPrevious = resultSurnameList.innerHTML;
  resultSurnameList.innerHTML = contentPrevious + '<li>' + surnameList[i]
}
