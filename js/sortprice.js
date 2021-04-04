function fun2() {
    let myElements = document.querySelectorAll('.product-box__item')
    let sel = document.getElementById('mySelectPrice').selectedIndex;
    let options = document.getElementById('mySelectPrice').options;
    let targetItemSel = options[sel].value;

    switch (targetItemSel) {
        case "0":
            Array.from(myElements).forEach((item) => {
                item.classList.remove('hide');
            })
            break;
        case "30":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                let test = item.querySelector('.product-box__meta p').innerHTML
                if (parseInt(test) <= 30) {
                    item.classList.remove('hide')
                }
            })
            break;
        case "50":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                let test = item.querySelector('.product-box__meta p').innerHTML
                if (parseInt(test) <= 50) {
                    item.classList.remove('hide')
                }
            })
            break
        case "100":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                let test = item.querySelector('.product-box__meta p').innerHTML
                if (parseInt(test) <= 100) {
                    item.classList.remove('hide')
                }
            })
            break
        case "150":
            Array.from(myElements).forEach((item) => {
                item.classList.add('hide');
                let test = item.querySelector('.product-box__meta p').innerHTML
                if (parseInt(test) <= 150) {
                    item.classList.remove('hide')
                }
            })
            break
    }
}

export { fun2 }
