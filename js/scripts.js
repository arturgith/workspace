// scripts.js

/*
Stwórz zmienne potrzebne do wykonania działania (a * a) - (2 * a * b) - (b * b) ,
 a jego wynik przypisz do zmiennej value. 
Wyświetl wynik w konsoli, a następnie za pomocą instrukcji warunkowej sprawdź, 
czy wynik jest dodatni czy ujemny, 
a potem wyświetl informację wynik dodatni lub wynik ujemny w konsoli.
*/

var a = 2,
    b = 1,
    value = (a * a) - (2 * a * b) - (b * b);
console.log('Value of (a * a) - (2 * a * b) - (b * b) is equal to: ' + value);

var plusMinus = value >= 0 ? 'Wynik dodatni' : 'Wynik ujemny';
console.log(plusMinus);

/*
Dodaj instrukcję, która sprawdzi, czy wynik jest równy zero i wyświetli tę informację.
*/

switch(value) {
  case 0:
    console.log('Value równe zero');
    break;
  default:
    console.log('Value różne od zera');
}