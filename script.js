let users;
let tableBody = document.getElementById("tableBody");
let currentPage = 0;
let usersPerPage = 10;

fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((value) => value.json())
  .then((value) => {
    users = value;
    console.log(users);
    for (let i = 0; i < usersPerPage; i++) {
      getNewRow(users[i]);
    }
  });

function getNewRow(data) {
  let row = tableBody.insertRow();
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  cell0.innerHTML = data.id;
  cell1.innerHTML = data.name;
  cell2.innerHTML = data.email;
}

function pageChange(go) {
  if (go == "firstPage") {
    currentPage = 0;
    endResult();
  } else if (go == "previousPage" && currentPage > 0) {
    currentPage--;
    endResult();
  } else if (go) {
    currentPage = go;
    endResult();
  }
}

function endResult() {
  tableBody.innerHTML = "";
  for (
    let i = currentPage * usersPerPage;
    i < currentPage * usersPerPage + usersPerPage;
    i++
  ) {
    getNewRow(users[i]);
  }
}
