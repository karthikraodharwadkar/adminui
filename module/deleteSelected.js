import { dataArray } from "./fetchData.js";
import { checkboxAll } from "./color.js";

let deleteSelected = document.querySelector('.btn-danger')

deleteSelected.addEventListener('click', () => {
    let singleCheckbox = document.querySelectorAll('.singleCheckbox');
    singleCheckbox.forEach((item) => {
        if (item.checked == true) {
            for (let i = 0; i < dataArray[0].length; i++) {
                if (item.id === dataArray[0][i].id) {
                    dataArray[0].splice(i, 1)
                }
            }
            item.parentNode.parentNode.remove()
            checkboxAll.checked = false;
        }
    })

})

export { deleteSelected }