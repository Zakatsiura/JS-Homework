// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//   створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArr = [];

for (let i = 1; i < 11; i++) {
    userArr.push(new User(+`${i}`, `name ${i}`, `surname ${i}`, `email@${i}`, +`${i}${i}${i}${i}${i}${i}`))
}
console.log(userArr)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const userArr1 = userArr.filter(el => (el.id % 2 === 0));

console.log(userArr1);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const userArr2 = userArr.sort((a, b) => (b.id - a.id));
// Я зробив по спаданню, оскільки масив і так був відсортований по зростанню id. Інакше змінив би умову в sort на (a.id - b.id)

console.log(userArr2);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = [];

let client1 = new Client(101, "name01", "surname01", 'email01', 11111111, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client1);
let client2 = new Client(102, "name02", "surname02", 'email02', 22222222, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client2);
let client3 = new Client(103, "name03", "surname03", 'email03', 33333333, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client3);
let client4 = new Client(104, "name04", "surname04", 'email04', 44444444, [{item01: 10}, {item02: 15}]);
arrClient.push(client4);
let client5 = new Client(105, "name05", "surname05", 'email05', 55555555, [{item01: 10}, {item02: 15}, {item03: 33}, {item004: 55}, {item05: 15}, {item06: 33}]);
arrClient.push(client5);
let client6 = new Client(106, "name06", "surname06", 'email06', 66666666, [{item01: 10}, {item02: 15}, {item03: 33}, {item04: 44}]);
arrClient.push(client6);
let client7 = new Client(107, "name07", "surname07", 'email07', 77777777, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client7);
let client8 = new Client(108, "name08", "surname08", 'email08', 88888888, [{item01: 10}]);
arrClient.push(client8);
let client9 = new Client(109, "name09", "surname09", 'email09', 99999999, [{item01: 10}, {item02: 15}]);
arrClient.push(client9);
let client10 = new Client(110, "name10", "surname10", 'email10', 10101010, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client10);


console.log(arrClient)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

const orderedClient = arrClient.sort((a, b) => a.order.length - b.order.length);
// Я не певен, що правильно зрозумів завдання - вивів по кількості найменувань товарів. Якщо потрібно вивести по кількості товарів в найменуваннях, то буде інакше
console.log(orderedClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна.

function Car(model, manufacturer, year, maxSpeed, engValue) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engValue = engValue;
}

let car1 = new Car('Civic', 'Honda', 2022, 220, 1.8);
console.log(car1)

//   додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

car1.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

car1.info = function () {
    console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік - ${this.year}, макимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engValue}`);
}
car1.info()


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

car1.increaseMaxSpeed = function (newSpeed) {
    console.log(`нова швидкість - ${this.maxSpeed + newSpeed}`);
}
car1.increaseMaxSpeed(45)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

car1.changeYear = function (newValue) {
    console.log(`встановимо новий рік випуску - ${this.year = newValue} недорого!`)
}
car1.changeYear(2000)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

car1.addDriver = function(driver) {
    this.driver = driver;
}
car1.addDriver({age: 51, gender: 'male', height: 155});

console.log(car1);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engValue) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engValue = engValue;
    }
}

let car2 = new Car2('Civic', 'Honda', 2021, 170, 1.8);
console.log(car2);



// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

car2.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
car2.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

car2.info = function () {
    console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік - ${this.year}, макимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engValue}`);
}
car2.info()



// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

car2.increaseMaxSpeed = function (newSpeed) {
    console.log(`нова швидкість - ${this.maxSpeed + newSpeed}`);
}
car2.increaseMaxSpeed(65)



// -- changeYear (newValue) - змінює рік випуску на значення newValue

car2.changeYear = function (newValue) {
    console.log(`встановимо новий рік випуску - ${this.year = newValue} недорого!`)
}
car2.changeYear(1980)


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

car2.addDriver = function(driver) {
    this.driver = driver;
}
car2.addDriver({age: 60, gender: 'male', height: 185});

console.log(car2);





// -Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let arrCind = [];

for (let i = 1; i < 11; i++) {
    arrCind.push(new Cinderella(`name ${i}`, +`${15 + i}`, +`${20 + i}`))
}
console.log(arrCind)


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
    }
}

let prince = new Prince("Carl", 30,22);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for(Cinderella of arrCind) {
    if(Cinderella.size === prince.size) {
        console.log(`Cinderella has ${Cinderella.name}`)
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


const target = arrCind.find(Cinderella => Cinderella.size === prince.size);
console.log(`Cinderella has ${target.name}`)








//Додаткові завдання



// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//        street: 'Kulas Light',
//        suite: 'Apt. 556',
//        city: 'Gwenborough',
//        zipcode: '92998-3874',
//        geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//             }
//             },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//              }
// }

class User333 {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}

const user33 = new User333 (1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log(user33);




// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


class Tag {
    constructor(name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
}

const a = new Tag(
    'a',
    'Створює посилання на іншу сторінку або на елемент на поточній сторінці.',
    [
        {name: 'href', description: 'Задає адресу документа, на який слід перейти.'},
        {name: 'target', description: 'Вказує де буде відкрито сторінку, що містить посилання. Може приймати значення _blank, _self, _parent, _top.'}
    ]
);

console.log(a)


const div = new Tag(
    'div',
    'Визначає блок документа.',
    [
        {name: 'align', description: 'Вирівнювання вмісту відносно області, яку займає тег.'},
        {name: 'title', description: 'Добавляє властивість title до блоку, яка містить інформацію про елемент.'}
    ]
);

console.log(div);

const h1 = new Tag(
    'h1',
    'Заголовок першого рівня.',
    [
        {name: 'align', description: 'Вирівнювання заголовку.'},
        {name: 'class', description: 'Задає ім\'я класу, яке дозволяє зв\'язати тег зі стилевим оформленням.'}
    ]
);

console.log(h1)

const span = new Tag(
    'span',
    'Визначає невеликий фрагмент документа.',
    [
        {name: 'class', description: 'Задає ім\'я класу, яке дозволяє зв\'язати тег зі стилевим оформленням.'},
        {name: 'title', description: 'Добавляє властивість title до елементу, яка містить інформацію про елемент.'}
    ]
);

console.log(span)

const input = new Tag(
    'input',
    'Створює однорядковий рядок для введення даних або елемент управління в формі.',
    [
        {name: 'type', description: 'Задає тип елемента форми.'},
        {name: 'name', description: 'Ім\'я поля, призначене для того, щоб обробник форми міг його ідентифікувати.'}
    ]
);

console.log(input);


const form = new Tag(
    'form',
    'Визначає форму на веб-сторінці.',
    [
        {
            name: 'accept-charset',
            description: 'Вказує кодування даних які відправляються на сервер.'
        },
        {
            name: 'action',
            description: 'Вказує URL адресу обробника форми.'
        },
        {
            name: 'method',
            description: 'Встановлює метод, який буде використовуватись для відправлення даних форми. За замовчуванням використовується метод GET.'
        }
    ]
);

console.log(form);