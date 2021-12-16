var myName = prompt('Введите свое имя');
var myAge = +prompt('Введите свой возрасть');

console.log('Я ' + myName + ' мне ' + myAge + ' лет!');

var slojeniya = +prompt('Решите пример 9 + 3 = ?');
var vichitaniya = +prompt('Решите пример 100 - 40 = ?');
var umnojeniya = +prompt('Решите пример 5 * 9 = ?');
var deleniya = +prompt('Решите пример 24 / 8 = ?');
var deleniyaOstatkom = +prompt('Решите пример 8 % 3 = ?');

console.log('Пример 1: 9 + 3 = 12;' + ' Ваш ответ: ' + slojeniya);
console.log('Пример 2: 100 - 40 = 60;' + ' Ваш ответ: ' + vichitaniya);
console.log('Пример 3: 5 * 9 = 45;' + ' Ваш ответ: ' + umnojeniya);
console.log('Пример 4: 24 / 8 = 3;' + ' Ваш ответ: ' + deleniya);
console.log('Пример 5: 8 % 3 = 2;' + ' Ваш ответ: ' + deleniyaOstatkom);
alert('Откройте консоль для просмотра');