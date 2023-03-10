const userDetails = document.getElementById("user-details");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

if (userId) {
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userTable = document.createElement("table");

            Object.entries(user).forEach(([key, value]) => {
                const row = document.createElement("tr");
                const keyCell = document.createElement("td");
                keyCell.textContent = key;
                row.appendChild(keyCell);
                const valueCell = document.createElement("td");
                valueCell.textContent = value;
                row.appendChild(valueCell);

                userTable.appendChild(row);
            });

            userDetails.appendChild(userTable);
        })
        .catch(error => console.error(error));
}
