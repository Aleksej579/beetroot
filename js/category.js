function fun1() {
    let myElements = document.querySelectorAll('.product-box__item')
    let sel = document.getElementById('mySelectType').selectedIndex;
    let options = document.getElementById('mySelectType').options;
    let targetItemSel = options[sel].value;

    switch (targetItemSel) {
        case "0":
            Array.from(myElements).forEach((item) => {
                item.classList.remove('hide');
            })
            break;
        case "1":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                if (item.matches('.breakfast') === true) {
                    item.classList.remove('hide')
                }
            })
            break;
        case "2":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                if (item.matches('.first-meal') === true) {
                    item.classList.remove('hide')
                }
            })
            break
        case "3":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                if (item.matches('.garnish') === true) {
                    item.classList.remove('hide')
                }
            })
            break
    }
}

export { fun1 }
