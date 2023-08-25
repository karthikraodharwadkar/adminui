import { dataArray } from "./fetchData.js";
import { editData } from "./edit.js";
import { remove } from "./deleteicon.js";
import { deleteSelected } from "./deleteSelected.js";
import { color, checkboxAll } from "./color.js";
import { inputValue, newArray } from "./search.js";

let rowElements = document.querySelector("tbody");
let pageIndex = 0;
let itemsPerPage = 10;

function rowData(currArr, pageIndex) {
    rowElements.innerHTML = "";
    for (let i = pageIndex * itemsPerPage; i < (pageIndex * itemsPerPage) + itemsPerPage; i++) {
        if (!currArr[i]) { break }
        let row = document.createElement("tr")
        row.innerHTML = `<tr class="${currArr[i].id}">
            <td id="${currArr[i].id}"><input type="checkbox" class="singleCheckbox" id="${currArr[i].id}"/></td>
            <td>${currArr[i].name}</td>
            <td>${currArr[i].email}</td>
            <td>${currArr[i].role}</td>
            <td><i class="bi bi-pencil-square" id="${currArr[i].id}"></i>
            <i class="bi bi-trash3-fill" id="${currArr[i].id}"></i></td>
            </tr>
          `
        rowElements.append(row);
    }
    { newArray.length ? pagination(newArray) : inputValue.value.length ? pagination(newArray) : pagination(currArr) }

    editData();
    remove();
    color();
}

rowData(dataArray[0], 0);

function pagination(currArr) {
    nav.innerHTML = "";
    for (let i = 0; i < (currArr.length) / itemsPerPage; i++) {
        let span = document.createElement("span");
        span.innerHTML = i + 1;
        span.addEventListener("click", (e) => {
            pageIndex = e.target.innerHTML - 1;
            rowData(currArr, pageIndex);
            checkboxAll.checked = false;
        })
        inputValue.addEventListener('keyup', () => {
            pageIndex = 0;
        })
        deleteSelected.addEventListener('click', () => {
            if (dataArray[0].length / 10 <= pageIndex) {
                pageIndex = 0
            }
            rowData(dataArray[0], pageIndex)
        })

        if (i == pageIndex) { span.style.backgroundColor = "pink" }
        nav.append(span);
    }
}

let firstPage = document.querySelector("#firstPage")
firstPage.addEventListener('click', () => {
    pageIndex = 0
    rowData(dataArray[0], pageIndex)
})

let lastPage = document.querySelector("#lastPage")
lastPage.addEventListener('click', () => {
    pageIndex = Math.ceil(dataArray[0].length / itemsPerPage) - 1;
    rowData(dataArray[0], pageIndex)
})

let prevSlide = document.querySelector("#prevSlide")
prevSlide.addEventListener('click', () => {
    pageIndex--;
    { pageIndex < 0 ? pageIndex = 0 : pageIndex = pageIndex }
    rowData(dataArray[0], pageIndex)
})

let nextSlide = document.querySelector("#nextSlide")
nextSlide.addEventListener('click', () => {
    let calc = Math.ceil(dataArray[0].length / itemsPerPage) - 1
    pageIndex++;
    { pageIndex > calc ? pageIndex = calc : pageIndex = pageIndex }
    rowData(dataArray[0], pageIndex)
})

export { rowElements, rowData, itemsPerPage, pageIndex }