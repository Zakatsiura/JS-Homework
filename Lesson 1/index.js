// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

const hello = 'hello';

console.log(hello);

const owu = 'owu';

console.log(owu);

const com = 'com';

console.log(com);

const ua = 'ua';

console.log(ua);

const one = 1;

console.log(one);

const ten = 10;

console.log(ten);

const num = -999;

console.log(num);

const num1 = 123;

console.log(num1);

const PI = 3.14;

console.log(PI);

const num2 = 2.7;

console.log(num2);

const num3 = 16;

console.log(num3);

const bool = true;

console.log(bool);

const bool1 = false;

console.log(bool1);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не
// об'єкт, просто за допомоги конкатенації)

const firstName = 'Ihor';
const middleName = 'Vasyliovych';
const lastName = 'Zakatsiura';

console.log(`${firstName} ${middleName} ${lastName}`);
console.log(firstName + ' ' + middleName + ' ' + lastName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;

console.log(typeof(a));

let b = '100';

console.log(typeof(b));

let c = true;

console.log(typeof(c));

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в
// консоль

let firName = prompt('Input your first name');

let midName = prompt('Input your middle name');

let age = prompt('Input your age');

console.log(`Your full name is  ${firName} ${midName} and your age is ${age}`);

alert(`Your full name is  ${firName} ${midName} and your age is ${age}`);

