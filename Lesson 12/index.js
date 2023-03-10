//    зробити файл users.html
//    з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//    вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//    при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
//    отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
const userList = document.getElementById("user-list");

fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userLink = document.createElement("a");
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.textContent = `${user.id} - ${user.name}`;

            const userItem = document.createElement("li");
            userItem.appendChild(userLink);

            userList.appendChild(userItem);
        });
    })
    .catch(error => console.error(error));