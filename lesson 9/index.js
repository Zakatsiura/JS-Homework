// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту


const block = document.createElement('div');
block.classList.add('wrap');

const h1 = document.createElement('h1');
h1.classList.add('collapse');
h1.innerText = 'Mega post';

const p = document.createElement('p');
p.classList.add('alpha');
p.innerText = 'This is the coolest post I have ever seen.'

const p2 = document.createElement('p');
p2.classList.add('beta');
p2.innerText = 'You are the best bro.';

const p3 = document.createElement('p');
p3.innerText = 'See you soon!';

block.append(h1, p, p2, p3);

// - додати цей блок в body.

document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

const blockClone = block.cloneNode(true);
document.body.appendChild(blockClone);


// =====================================================
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let firstArr = ['Main', 'Products', 'About us', 'Contacts'];

const arrEl = document.createElement('ul');
for (const elem of firstArr) {
    const el = document.createElement('li');
    el.innerText = elem;
    arrEl.appendChild(el);
}
document.body.appendChild(arrEl);


// ======================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const el of coursesAndDurationArray) {
    const info = document.createElement('div');
    const courseInfo = document.createElement('ul');
    const el1 = document.createElement('li');
    el1.innerText = el.title;
    courseInfo.appendChild(el1);
    const el2 = document.createElement('li');
    el2.innerText = el.monthDuration;
    courseInfo.appendChild(el2);
    info.appendChild(courseInfo);
    document.body.appendChild(info);
}


// =========================================================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const el of coursesAndDurationArray) {
    const info1 = document.createElement('div');
    info1.classList.add('item');
    const el1 = document.createElement('h1');
    el1.classList.add('heading');
    el1.innerText = el.title;
    info1.appendChild(el1);
    const el2 = document.createElement('p');
    el2.classList.add('description');
    el2.innerText = el.monthDuration;
    info1.appendChild(el2);
    document.body.appendChild(info1);
}


// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
//     на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)