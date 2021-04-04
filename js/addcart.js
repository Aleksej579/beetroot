function fun3() {
    let myElements = document.querySelectorAll('.product-box__item')
    let totalCount = document.getElementById('total_count').innerHTML
    let totalPrice = document.getElementById('total_price').innerHTML
    Array.from(myElements).forEach((item) => {
        let price = item.querySelector('.product-box__meta p').innerHTML
        let btnBy = item.querySelector('.product-box__meta button')
        let input = item.querySelector('.product-box__meta input');
        let cutAdd;
        input.oninput = function () {
            cutAdd = input.value;
        };
        btnBy.onclick = () => {
            totalCount = cutAdd;
            let totalCountNum = totalCount
            document.getElementById('total_count').innerHTML = totalCountNum

            totalPrice += `+${parseInt(price)}`
            let totalPriceNum = eval(totalPrice.replace(/XXX/g, ''))
            document.getElementById('total_price').innerHTML = totalPriceNum * totalCountNum

            cutAdd = ''
            totalPrice = ''
        }
    })
}
export { fun3 }
