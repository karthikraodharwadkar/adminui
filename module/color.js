let checkboxAll = document.querySelector('#chkboxall');

function color() {
    let single = document.querySelectorAll(".singleCheckbox");
    single.forEach((item) => {
        item.addEventListener('click', () => {
            if(item.checked==true){
                item.parentElement.parentElement.setAttribute("class", "table-secondary")
            }else{
                item.parentElement.parentElement.setAttribute("class", "table-default")
            } 
        })
        
    })

    checkboxAll.addEventListener('click', () => {
            single.forEach((item) => {
                if (checkboxAll.checked == true) {
                    item.checked = true;
                    item.parentElement.parentElement.setAttribute("class", "table-secondary")
                } else {
                    item.checked = false;
                    item.parentElement.parentElement.setAttribute("class", "table-default")
                }
            })
        })
}

export { color,checkboxAll }