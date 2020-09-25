const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip-input')
const tipTotal = document.querySelector('#tip')
const splitTip = document.querySelector('#people')
const totalBill = document.querySelector('#total')

billInput.value =  10
splitTip.value = 2

function calculateTip(){
    const billValue = parseInt(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const peopleValue = parseInt(splitTip.value)

    const tipAmount = billValue * tipValue / 100
    const eachTip = tipAmount/ peopleValue
    const totalAmount = billValue + tipAmount

    display.innerHTML = tipAmount.toFixed(2)
    tipTotal.innerHTML = eachTip.toFixed(2)
    totalBill.innerHTML = totalAmount.toFixed(2)
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
splitTip.addEventListener('input',calculateTip)
totalBill.addEventListener('listen', calculateTip)
