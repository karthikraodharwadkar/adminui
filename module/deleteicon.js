import { dataArray } from "./fetchData.js";
import { rowData,pageIndex } from "./rowentries.js";

function remove() {
    let deleteicon = document.querySelectorAll(".bi-trash3-fill");
    deleteicon.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.remove();
            for (let i = 0; i < dataArray[0].length; i++) {
                if (item.id === dataArray[0][i].id) {
                    dataArray[0].splice(i, 1)
                    rowData(dataArray[0], pageIndex)
                } 
            }
        })
    })
}

export { remove }