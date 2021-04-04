import { fun1 } from './category.js'
import { fun2 } from './sortprice.js'
import { fun3 } from './addcart.js'

document.getElementById('mySelectType').addEventListener('click', fun1, false);
document.getElementById('mySelectPrice').addEventListener('click', fun2, false);
fun3()

hide();
function hide() {
    let popup = document.getElementById("popup");
    popup.style.display = 'none';
}
function show() {
    popup.style.display = 'block';
}

let btnPopup = document.querySelector('.btn-check');
btnPopup.onclick = () => {
    show();
}


// valid
document.forms.myForm.onsubmit = function () {
    var login = this.login.value;
    var email = this.email.value;
    if ((login && email) == "" || (login && email) == " ") {
        alert("Поля Имя или Почта не заполнены !");
        return false;
    } else {
        console.log(`Login: ${login} Emeil: ${email}`)
        hide();
        alert("Благодарим за покупку !");
        document.myForm.reset();
        document.getElementById('total_count').innerHTML = "XXX"
        document.getElementById('total_price').innerHTML = "XXX"
    }
    return false;
};

