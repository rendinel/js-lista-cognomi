var resultSurnameList = document.getElementById('surname-list');
var surname = prompt('Ciao che cognome hai?');
surname = surname.charAt(0).toUpperCase() + surname.slice(1);
var surnameList = ['Castle','Zane','Kasumi'];
surnameList.push(surname);
var orderSurnameList = surnameList.sort();
for (var i = 0; i < orderSurnameList.length; i++) {
 resultSurnameList.innerHTML += '<li>' + orderSurnameList[i] + '</li>';
}
var surnameOrder = surnameList.indexOf(surname) + 1

var surnameOrderResearch = document.getElementById('surname-order');
surnameOrderResearch.innerText = 'Il prezzo é ' + surnameOrder ;

if (surname = ) {

}
