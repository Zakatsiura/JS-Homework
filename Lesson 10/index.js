// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

function submitForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;

    const result = document.getElementById("result");
    result.innerHTML = `Name - ${name}, Surname - ${surname}, Age - ${age}`;
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
// ==========================

let count = localStorage.getItem('count');
const al = totalCount = parseInt(document.getElementById('counter').innerText)
    count++;
    totalCount = parseInt(document.getElementById('counter').innerText) + count;
    document.getElementById('counter').innerText = totalCount
    console.log(count)
    localStorage.setItem('count', count);

document.querySelector('.reload').onclick = function () {
    location.reload();
}

document.querySelector('.clear').onclick = function () {
    localStorage.clear();
    document.getElementById('counter').innerText = al.toString()
}



// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію
// =========================





//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів