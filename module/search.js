import { dataArray } from "./fetchData.js";
import { rowData } from "./rowentries.js";

let newArray = [];
let inputValue = document.querySelector('.form-control')

inputValue.addEventListener('keyup', () => {
    setTimeout(() => {
        let captureInputValue = inputValue.value.toUpperCase();
        newArray = dataArray[0].filter((value) => {
            if ((value.email.toUpperCase().includes(captureInputValue) || value.role.toUpperCase().includes(captureInputValue) || value.name.toUpperCase().includes(captureInputValue))) {
                let newObj1 = { name: value.name, email: value.email, role: value.role }
                return newObj1
            }
        })
        rowData(newArray, 0)
            let error = document.getElementById("error");
            if (newArray.length == 0) { error.innerHTML = "No Data Found" }
            else { error.innerHTML = "" }
        }, 500)
    })

    export { inputValue, newArray }
