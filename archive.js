const tableBody = document.querySelector("#dataTable tbody");

function getGroupLabel(key) {
  function findGroupLabel(groupList, targetKey) {
    for (const group of groupList) {
      if (group.index === targetKey) {
        return group.content;
      } else if (group.subitems && group.subitems.length > 0) {
        const subGroupLabel = findGroupLabel(group.subitems, targetKey);
        if (subGroupLabel) {
          return `${group.content} > ${subGroupLabel}`;
        }
      }
    }
    return "";
  }

  return findGroupLabel(groups, key);
}

function populateTable(data) {
  tableBody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    const contentCell = document.createElement("td");
    const durationCell = document.createElement("td");

    const breakline = document.createElement("br");

    const breadcrumb = document.createElement("span");
    breadcrumb.classList.add("text-sm", "text-gray-400");
    breadcrumb.innerHTML = `&mdash; ${getGroupLabel(item.group)}`;

    contentCell.textContent = item.content;
    contentCell.classList.add("p-4");

    contentCell.appendChild(breakline);
    contentCell.appendChild(breadcrumb);

    durationCell.textContent = item.duration;
    durationCell.classList.add("p-4", "text-center");

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

        subContentCell.classList.add("p-4");
        subDurationCell.classList.add("w-40", "p-4", "text-center");

        subContentCell.textContent = `■ ${subItem.content}`;
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
