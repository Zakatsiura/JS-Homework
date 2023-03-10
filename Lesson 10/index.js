// TASK 1
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
// ==========================

function submitForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;

    const result = document.getElementById("result");
    result.innerHTML = `Name - ${name}, Surname - ${surname}, Age - ${age}`;
}



// TASK 2
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
// ==========================

let count = localStorage.getItem('count') || 0;
const initialValue = totalCount = parseInt(document.getElementById('counter').innerText)
totalCount = parseInt(document.getElementById('counter').innerText) + (+count);
document.getElementById('counter').innerText = totalCount
count++;
localStorage.setItem('count', count);

document.querySelector('.reload').onclick = function () {
    location.reload();
}

document.querySelector('.clear').onclick = function () {
    localStorage.clear();
    document.getElementById('counter').innerText = initialValue.toString()
}



// TASK 3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль,а побудувати дом структуру під кожну сессію
// =========================


// <-------цей код повинен бути на сторінці index.html:------>
let visit = Date();

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(visit);

localStorage.setItem('sessions', JSON.stringify(sessions));

// <--------Цей код повинен бути на сторінці session.html:-------->
let list = document.getElementById('info');

for (let session of sessions) {
    let visitInfo = document.createElement('li');
    visitInfo.textContent = session;
    list.appendChild(visitInfo)
}
// <--------Додатково на сторінку session.html (замість index.html, як у мене) потрібно додати весь html-блок TASK 3
//  для відображення інформації------->


// TASK 4
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(` obj № ${i} `);
}
let startIndex = 0;
const step = 10;

function showItems() {
    let endIndex = startIndex + step;
    let itemsToShow = arr.slice(startIndex, endIndex);
    const result = document.getElementById('array');
    result.innerHTML = `${itemsToShow}`
}

let prevButton = document.querySelector(".back");
prevButton.addEventListener("click", function () {
    startIndex = Math.max(startIndex - step, 0);
    showItems();
});

let nextButton = document.querySelector(".forward");
nextButton.addEventListener("click", function () {
    startIndex = Math.min(startIndex + step, arr.length - step);
    showItems();
});
showItems();




// TASK 5
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)


function table() {
    const rows = document.getElementById("row").value;
    const cols = document.getElementById("cell").value;
    const content = document.getElementById("content").value;

    let row = "<tr>";
    for (let i = 0; i < cols; i++) {
        row += "<td class='td'>" + content + "</td>";
    }
    row += "</tr>";

    let table = "<table>";
    for (let i = 0; i < rows; i++) {
        table += row;
    }
    table += "</table>";

    document.getElementById("confirm").innerHTML = table;
}