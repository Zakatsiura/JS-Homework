const userDetails = document.getElementById("user-details");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

if (userId) {
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => {
            const userTable = document.createElement("table");

            const createTableRow = (key, value) => {
                const row = document.createElement("tr");
                const keyCell = document.createElement("td");
                keyCell.textContent = key;
                row.appendChild(keyCell);
                const valueCell = document.createElement("td");
                if (typeof value === "object" && value !== null) {
                    valueCell.appendChild(createTableFromObject(value));
                } else {
                    valueCell.textContent = value;
                }
                row.appendChild(valueCell);
                return row;
            };

            const createTableFromObject = (object) => {
                const table = document.createElement("table");
                Object.entries(object).forEach(([key, value]) => {
                    table.appendChild(createTableRow(key, value));
                });
                return table;
            };

            Object.entries(user).forEach(([key, value]) => {
                const row = createTableRow(key, value);
                userTable.appendChild(row);
            });

            userDetails.appendChild(userTable);
        })
        .catch((error) => console.error(error));
}
