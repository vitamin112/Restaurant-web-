var result = document.querySelector(".result");
// console.log()
var buttons = document.querySelectorAll(".buttons .btn");
var check = false;

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {
        if (check) {
            check = false;
            reset();
        }
        result.innerText += button.getAttribute("data");
    });
});

function handle() {

    let s = result.textContent;
    var testS = /(^[-+]{0,1}\d{1,}$)|(\d{1,}[-+\/*]\d{1,}$)/.test(s)
    if (testS) {
        result.innerText = eval(s);
    }
    else {
        result.innerText = 'Error';
    }
    check = true;
}
function reset() {
    result.innerText = '';
}
