import { dataArray } from "./fetchData.js";

function editData() {
    let edit = document.querySelectorAll('.bi-pencil-square');
    edit.forEach((item) => {
        item.addEventListener('click', () => {
            let row = item.parentNode.parentNode;
            let nameCell = row.cells[1];
            let emailCell = row.cells[2];
            let roleCell = row.cells[3];

            let nameEdit = prompt("Edit Name: ", nameCell.textContent);
            let emailEdit = prompt("Edit Email: ", emailCell.textContent);
            let roleEdit = prompt("Edit Role: ", roleCell.textContent);

            nameCell.textContent = nameEdit
            emailCell.textContent = emailEdit
            roleCell.textContent = roleEdit

            for (let i = 0; i < dataArray[0].length; i++) {
                if (item.id === dataArray[0][i].id) {
                    dataArray[0][i].name = nameEdit;
                    dataArray[0][i].email = emailEdit;
                    dataArray[0][i].role = roleEdit;
                }
            }
        })
    })
}

export { editData }