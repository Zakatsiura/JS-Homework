// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strLength = (str) => {
    console.log(str.length);
    return str.length;
}

strLength('hello world');
strLength('lorem ipsum');
strLength('javascript is cool');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const toUpperCase = (str) => {
    console.log(str.toUpperCase());
    return str.toUpperCase();
}

toUpperCase('hello world');
toUpperCase('lorem ipsum');
toUpperCase('javascript is cool');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const toLowerCase = (str) => {
    console.log(str.toLowerCase());
    return str.toLowerCase();
}

toLowerCase('HELLO WORLD');
toLowerCase('LOREM IPSUM');
toLowerCase('JAVASCRIPT IS COOL');




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const trim = (str) => {
    console.log(str.trim());
    return str.trim();
}

trim(' dirty string   ')



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let arr = function stringToarray(str) {
    console.log(str.split(' '));
    return str.split(' ');
}
arr(str);




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr1 = [10,8,-7,55,987,-1011,0,1050,0];

const arrToString = (arr1) => {
    console.log(arr1.map((el) => el.toString()));
    return arr1.map((el) => el.toString());
}

arrToString(arr1)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        console.log(nums.sort((a, b) => a - b));
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        console.log(nums.sort((a, b) => b - a));
        return nums.sort((a, b) => b - a);
    }
}

sortNums(nums,'ascending');
sortNums(nums,'descending');


// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let sortOfDuration = (arr) => {
        return arr.sort((a, b) => b.monthDuration - a.monthDuration);
    }

console.log(sortOfDuration(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterOfDuration = (arr) => {
        return arr.filter(el => el.monthDuration > 5);
    }

console.log(filterOfDuration(coursesAndDurationArray));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let addID = (arr) => {
    return arr.map((el, index) => ({ID: index + 1, ...el}));
    }

console.log(addID(coursesAndDurationArray));


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cards = [
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black',
    },
]

// - знайти піковий туз

// let aces = cards.filter(el => el.value === 'ace');
// console.log(aces.filter(el => el.cardSuit ==='spade'));

// console.log(cards.map())


// - всі шістки

let arrSix = cards.filter(el => el.value === '6');

console.log(arrSix);

// - всі червоні карти

let arrRed = cards.filter(el => el.color === 'red');

console.log(arrRed);

// - всі буби

let arrDiamonds = cards.filter(el => el.cardSuit === 'diamond');

console.log(arrDiamonds);

// - всі трефи від 9 та більше

let clubsAll = cards.filter(el => el.cardSuit ==='clubs');
console.log(clubsAll.splice(3 ));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let newArr = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
            acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
            acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
            acc.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
            acc.clubs.push(card)
    }
        return acc},
    {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(newArr)


// =========================
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sasModules = coursesArray.filter(el => el.modules.includes('sass'));

console.log(sasModules);


let dockerModules = coursesArray.filter(el => el.modules.includes('docker'));

console.log(sasModules, dockerModules);


// Додаткові завдання
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString(str, n)  {
    return str.split('');
}
console.log(cutString('наслаждение', 3))
document.writeln(cutString('наслаждение',3))



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
//