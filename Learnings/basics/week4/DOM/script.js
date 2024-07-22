//document is the global varible usign which we will manipulate the DOM

const finalSumFiled = document.getElementById("finalSum")
const button = document.getElementsByName("calculate")[0]
const firstNumberFiled = document.getElementById("firstNumber")
const secondNumberFiled = document.getElementById("secondNumber")

function populateDiv() {
    const a = parseInt(firstNumberFiled.value);
    const b = parseInt(secondNumberFiled.value);

    const res = calculate(a, b);

    finalSumFiled.innerHTML = `Sum is ${res}`
}

function calculate(a, b) {
    return a + b;
}

button.addEventListener('click', function () {
    //alert("Button was clicked!");
    populateDiv()
});
