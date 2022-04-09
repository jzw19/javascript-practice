// my solution
const tbody = document.body.querySelector('tbody');
const rows = Array.from(tbody.children);

rows.sort((rowA, rowB) => {
  return rowA.querySelector('td').textContent.toLowerCase().localeCompare(rowB.querySelector('td').textContent.toLowerCase());
});

tbody.innerHTML = '';
for(let i = 0; i < rows.length; i++) {
	tbody.insertAdjacentHTML('beforeend', rows[i].outerHTML);
}

// tutorial's solution
/*
const table = document.querySelector('table');
let sortedRows = Array.from(table.tBodies[0].rows) // 1
  .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

table.tBodies[0].append(...sortedRows); // (3)
*/