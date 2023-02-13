// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const sqRect = (a, b) => a * b;

sqRect(5, 3)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const sqCircle = (r) => 3.14 * r * r;

sqCircle(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const sqCyl = (r, h) => ((2 * 3.14 * r * r) + (2 * 3.14 * r * h));

sqCyl(2, 5)

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [15, 25, 36, 47, 'Okten']

 const elements = () => {
    for(el of arr) {
        console.log(el);
    }
}

elements (arr);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph = (arg) => {
    document.write(`<p>${arg}</p>`);
}

paragraph('Hello Okten')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const text = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

text('The same text')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const text2 = (text, num) => {
let i = 0
    document.write(`<ul>`);
    while(i < num) {
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write(`</ul>`);
}

text2('The same text', 5)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1, 2, 'yes', true]
const list = () => {
    document.write(`<ol>`);
    for(elem of array) {
        document.write(`<li>${elem}</li>`);
    }
    document.write(`</ol>`);
}

list(array)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr2 = [
    {id: 1, name: 'Ivan', age: 20},
    {id: 5, name: 'Ihor', age: 22},
    {id: 8, name: 'Illia', age: 24},
]

const list2 = () => {
    document.write(`<ul>USER'S DATA:<p></p>`)
    for(let j = 0; j < 3; j++) {
        document.write(`<div>User number is ${j+1}`);
        document.write(`<li>ID is ${arr2[j].id}</li>`);
        document.write(`<li>NAME is ${arr2[j].name}</li>`);
        document.write(`<li>AGE is ${arr2[j].age}</li>`);
        document.write(`<p></p>`)
        document.write(`</div>`);
    }
    document.write(`</ul>`);
}

list2(arr2)



// - створити функцію яка повертає найменьше число з масиву

let arr3 = [3, 6875, 234, 1, 5342, -3412, 12, 43, -345];

const min = (array) => {
    if (array.length === 0) {
        console.log('Array is empty')
    } else {
        let minNumber = array[0];
        for (let i = 0; i < array.length; i++) {
            if (minNumber > array[i]) {
                minNumber = array[i];
            }
        }
        console.log(minNumber);
        return minNumber;
    }
}

min(arr3)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}

sum(arr3)




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr,index1,index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
    return arr;
}

swap([11,22,33,44],0,1);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)


let arr4 = [{currency:'USD',value:40},{currency:'EUR',value:42}] //виніс масив для зручності
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let amount = 0;
    if(exchangeCurrency === 'USD') {
        amount = sumUAH / arr4[0].value;
    } else if(exchangeCurrency === 'EUR') {
        amount = sumUAH / arr4[1].value;
    } else {
        console.log('ERROR');
    }
    console.log(amount);
    return amount;
}

exchange(10000, arr4,'EUR')



// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250