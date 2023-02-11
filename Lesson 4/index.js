// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rect(length, width) {
    let sqrR = length * width;
    console.log(`Площа прямокутника = ${sqrR}`);
}
rect(10, 20);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(radius) {
    let sqrC = (3.14 * radius * radius);
    console.log(`Площа кола = ${sqrC}`);
}
circle(5);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


function cylinder (h, r) {
    let cylS = (2 * 3.14 * r * r) + (2 * 3.14 * r * h);
    console.log(`Площа поверхні циліндру = ${cylS}`)
}
cylinder(10, 35);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4]

function elements () {
    for(element of arr) {
        console.log(element);
    }
}
elements (arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (arg) {
    document.write(`<p>${arg}</p>`);
}
paragraph('Hello Okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


function text (text) {
document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
document.write(`</ul>`);
}
text('The same text')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let i = 0
function text2 (text, num) {
    document.write(`<ul>`);
    while(i < num) {
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write(`</ul>`);
}
text2('The same text', 5)




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250