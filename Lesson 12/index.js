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
            userLink.textContent = `${user.id} - ${user.name}`;
            userLink.href = `user-details.html?id=${user.id}`;

            const userItem = document.createElement("li");
            userItem.appendChild(userLink);

            userList.appendChild(userItem);
        });
    })
    .catch(error => console.error(error));


const userDetails = document.getElementById("user-details");
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

if (userId) {
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => {
            const userTable = document.createElement("table");

            const tableRow = (key, value) => {
                const row = document.createElement("tr");
                const keyCell = document.createElement("td");
                keyCell.textContent = `${key} : `;
                row.appendChild(keyCell);
                const valueCell = document.createElement("td");
                if (typeof value === "object" && value !== null) {
                    valueCell.appendChild(table(value));
                } else {
                    valueCell.textContent = value;
                }
                row.appendChild(valueCell);
                return row;
            };

            const table = (object) => {
                const table = document.createElement("table");
                Object.entries(object).forEach(([key, value]) => {
                    table.appendChild(tableRow(key, value));
                });
                return table;
            };

            Object.entries(user).forEach(([key, value]) => {
                const row = tableRow(key, value);
                userTable.appendChild(row);
            });

            userDetails.appendChild(userTable);
        })
        .catch((error) => console.error(error));
}


//   замість файлу users.html в мене index.html
