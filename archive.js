const tableBody = document.querySelector("#dataTable tbody");

function populateTable(data) {
  tableBody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    const contentCell = document.createElement("td");
    const durationCell = document.createElement("td");

    contentCell.textContent = item.content;
    contentCell.classList.add("p-4", "text-gray-500");

    durationCell.textContent = item.duration;
    durationCell.classList.add("p-4", "text-gray-500", "text-center");

    row.classList.add("divide-x");
    row.appendChild(contentCell);

    tableBody.classList.add("divide-y");
    tableBody.appendChild(row);

    if (item.items && item.items.length > 0) {
      contentCell.setAttribute("colspan", "3");

      item.items.forEach((subItem) => {
        const subRow = document.createElement("tr");

        const subDividerCell = document.createElement("td");
        const subContentCell = document.createElement("td");
        const subDurationCell = document.createElement("td");

        subRow.classList.add("divide-x");

        subDividerCell.classList.add("bg-gray-50", "w-2");

        subContentCell.classList.add("p-4", "text-gray-500");
        subDurationCell.classList.add("p-4", "text-gray-500", "text-center");

        subContentCell.textContent = `${subItem.content}`;
        subDurationCell.textContent = subItem.duration;

        subRow.appendChild(subDividerCell);
        subRow.appendChild(subContentCell);
        subRow.appendChild(subDurationCell);
        tableBody.appendChild(subRow);
      });
    } else {
      contentCell.setAttribute("colspan", "2");
      row.appendChild(durationCell);
    }
  });
}

function filterTable() {
  const searchInput = document.getElementById("searchInput");
  const filterValue = searchInput.value.toLowerCase();
  const filteredData = items.filter((item) => item.content.toLowerCase().includes(filterValue));
  populateTable(filteredData);
}

// Initial population of the table
populateTable(items);
