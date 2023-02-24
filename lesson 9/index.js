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


// =========================================================
//     є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//     Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


for (const el of simpsons) {
    const member = document.createElement('div');
    member.classList.add('member');

    const name = document.createElement('h3');
    name.innerText = `${el.name}  ${el.surname}`;
    member.appendChild(name);

    const age = document.createElement('p');
    age.innerText = `Age is ${el.age} years old`;
    member.appendChild(age);

    const info = document.createElement('p');
    info.innerText = el.info;
    member.appendChild(info);

    const photo = document.createElement('img');
    photo.src = el.photo;
    member.appendChild(photo);


    document.body.appendChild(member);
}


// ============================================================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------


// ============================================================
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
//     на кнопку зникав елемент з id="text".


const text = document.createElement('p');
text.setAttribute('id', 'text');
text.innerText = 'Це текст, який буде зникати';
document.body.appendChild(text);

const btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.innerText = 'Натисни, щоб текст зникнув';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    text.style.display = 'none';
});

const space = document.createElement('div');
document.body.appendChild(space)

// ===========================================================
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


const ageInput = document.createElement('input');
ageInput.placeholder = 'Enter your age, please'
document.body.appendChild(ageInput);

const confirmButton = document.createElement('button');
confirmButton.innerText = 'Confirm'
document.body.appendChild(confirmButton);
confirmButton.addEventListener('click', function () {
    const age = ageInput.value;
    if (ageInput.value !== 'number') {
        alert ('INPUT ERROR')
    } else
    (age > 18) ? alert ('You are over 18') : alert ('You are under 18');
    ageInput.value =''
    // console.log('Вік:', age);
});
// ===========================================================
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)