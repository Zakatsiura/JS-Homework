// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, true, 3, 4, 5, 6, 67, 8, 'string', 564];

// for(let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Elementary Mathematics',
    pageCount: 467,
    genre: 'science',
}

let book2 = {
    title: 'Higher Mathematics',
    pageCount: 544,
    genre: 'science',
}

let book3 = {
    title: 'The Expance',
    pageCount: 741,
    genre: 'sci-fy',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'Elementary Mathematics',
    pageCount: 467,
    genre: 'science',
    authors4: [['Author1', 'age1'], ['Author2', 'age2']],
}

let book5 = {
    title: 'Higher Mathematics',
    pageCount: 544,
    genre: 'science',
    authors5: [['Author1', 'age1'], ['Author1', 'age2']],

}

let book6 = {
    title: 'The Expance',
    pageCount: 741,
    genre: 'sci-fy',
    authors6: [['Author1', 'age1'], ['Author1', 'age2']],

}
console.log(book6.authors6[0][0])
console.log(book5.authors5[1][0])

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr1 = [
    {
        name: 'user1Name',
        username: 'user1Username',
        password: 1111,
    },
    {
        name: 'user2Name',
        username: 'user2Username',
        password: 2222,
    },
    {
        name: 'user3Name',
        username: 'user3Username',
        password: 3333,
    },
    {
        name: 'user4Name',
        username: 'user4Username',
        password: 4444,
    },
    {
        name: 'user5Name',
        username: 'user5Username',
        password: 5555,
    },
    {
        name: 'user6Name',
        username: 'user6Username',
        password: 6666,
    },
    {
        name: 'user7Name',
        username: 'user7Username',
        password: 7777,
    },
    {
        name: 'user8Name',
        username: 'user8Username',
        password: 8888,
    },
    {
        name: 'user9Name',
        username: 'user9Username',
        password: 9999,
    },
    {
        name: 'user10Name',
        username: 'user10Username',
        password: 1010,
    },
];

// for(let j=0; j < 10; j++) {
//     console.log(arr1[j].password)
// };




// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a;

a = 1;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};

a = 0;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};

a = -3;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 8;

switch (true) {
    case (time >= 0 && time < 15 ):
        console.log('First quarter');
        break;
    case (time >= 15 && time < 30):
        console.log('Second quarter');
        break;
    case (time >= 30 && time < 45):
        console.log('Third quarter');
        break;
    case (time >= 45 && time < 60):
        console.log('Fourth quarter');
        break;
    default:
        console.log('Incorrect input')
};

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 28;

switch (true) {
    case (day > 0 && day < 11):
        console.log('First part');
        break;
    case (day >= 11 && day < 21):
        console.log('Second part');
        break;
    case (day >= 21 && day < 32):
        console.log('Third part');
        break;
    default:
        console.log('Incorrect input');
};


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekDay = +prompt ('Input day of week by number');

switch (true) {
    case (weekDay === 1):
        alert ('Monday');
        break;
    case (weekDay === 2):
        alert ('Tuesday');
        break;
    case (weekDay === 3):
        alert ('Wednesday');
        break;
    case (weekDay === 4):
        alert ('Thurthday');
        break;
    case (weekDay === 5):
        alert ('Friday');
        break;
    case (weekDay === 6):
        alert ('Saturday');
        break;
    case (weekDay === 7):
        alert ('Sunday');
        break;
    default:
        alert ('Incorrect input');
};




// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Input first number');

let number2 = +prompt('Input second number');

if (typeof(number1) != 'number' || typeof(number2) !== 'number') {
    alert('Incorrect input');
} else {
    (number1 > number2) ?
        alert(`Max is ${number1}`) : (number1 < number2) ?
            alert(`Max is ${number2}`) : alert(`Thay are equal`);
};


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let y = 0;

// для виключення любого хибноподібного значення:

// let x = y || 'Default';

// для виключення лише null та undefined:

// let x = y ?? 'Defoult';
//
// console.log(x);



//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// for (k = 0; k < coursesAndDurationArray.length; k++) {
//     if (coursesAndDurationArray[k].monthDuration > 5) {
//         console.log('Super');
//     };
// }
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
};
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
};
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
};
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
};
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
};