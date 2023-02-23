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

for(let i = 1; i < 11; i++) {
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
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [];
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
let client4 = new Client(104, "name04", "surname04", 'email04', 44444444, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client4);
let client5 = new Client(105, "name05", "surname05", 'email05', 55555555, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client5);
let client6 = new Client(106, "name06", "surname06", 'email06', 66666666, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client6);
let client7 = new Client(107, "name07", "surname07", 'email07', 77777777, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client7);
let client8 = new Client(108, "name08", "surname08", 'email08', 88888888, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client8);
let client9 = new Client(109, "name09", "surname09", 'email09', 99999999, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client9);
let client10 = new Client(110, "name10", "surname10", 'email10', 10101010, [{item01: 10}, {item02: 15}, {item03: 33}]);
arrClient.push(client10);



console.log(arrClient)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку








//Додаткові завдання
//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
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
// -option
// -select
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