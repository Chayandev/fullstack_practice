//document is the global varible usign which we will manipulate the DOM



const finalSumFiled = document.getElementById("finalSum")
const buttonSum = document.getElementsByName("calculate")[0]
const firstNumberFiled = document.getElementById("firstNumber")
const secondNumberFiled = document.getElementById("secondNumber")

const finalInterestField = document.getElementById("finalResult")
// const buttonInterest = document.getElementsByName("calculate")[1]
const primaryAmountField = document.getElementById("primaryAmount")
const rateField = document.getElementById("rate")
const timeField = document.getElementById("time")



async function populateDivSum() {
    const a = parseInt(firstNumberFiled.value);
    const b = parseInt(secondNumberFiled.value);

    // const res = calculate(a, b);

    //add backend to this fonrend

    //fetch-async call
    /*
    const res = fetch("http://localhost:3000/sum?a=" + a + "&b=" + b);
    res.then((response) => {  //not the response our format
        console.log(response)

        response.text()    //as our data is coming in plain text format
            .then((ans) => {
                console.log(ans);
                finalSumFiled.innerHTML = `Sum is ${ans}`
            })
    })
    */

    //using aysnc
    const response = await fetch("http://localhost:3000/sum?a=" + a + "&b=" + b);
    const ans = await response.text();
    finalSumFiled.innerHTML = `Sum is ${ans}`

    //finalSumFiled.innerHTML = `Sum is ${res}`
}

function calculate(a, b) {
    return a + b;
}

buttonSum.addEventListener('click', function () {
    //alert("Button was clicked!");
    populateDivSum()
});

let timeout;
function debouncePopulateDivInterest() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        populateDivIntereset()
    }, 1000)

    // when tehre is a another clock created in the timeframe clear the oldone
    // and create a new clock , this is hte logic of debouncing

    //clearTimeout(nameofTheTimer)

}

primaryAmountField.addEventListener('input', debouncePopulateDivInterest);
rateField.addEventListener('input', debouncePopulateDivInterest);
timeField.addEventListener('input', debouncePopulateDivInterest);

async function populateDivIntereset() {
    const p = parseFloat(primaryAmountField.value);
    const r = parseFloat(rateField.value);
    const t = parseInt(timeField.value);


    const response = await fetch("http://localhost:3000/simpleinterest?p=" + p + "&r=" + r + "&t=" + t);
    const ans = await response.json()
    console.log(ans);

    finalInterestField.innerHTML = `Totla amount = ${ans.total} & interest is ${ans.interest}`
}

// buttonInterest.addEventListener('click', function () {
//     alert("Button is clicked")
//     populateDivIntereset()
// })