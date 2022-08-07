const currencyOne= document.getElementById('currency-first');
const currencyTwo= document.getElementById('currency-second');
const amountOne = document.getElementById('amount-first');
const amountTwo = document.getElementById('amount-second');

const url = "https://v6.exchangerate-api.com/v6/85d74a9472487e7551d8fbc8/latest/"
function calculateOne(){
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;
    fetch(`${url}${currencyOneValue}`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencyTwoValue];
        amountTwo.value = (amountOne.value*rate).toFixed(2);
    });
}

function calculateTwo(){
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;
    fetch(`${url}${currencyTwoValue}`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencyOneValue];
        amountOne.value = (amountTwo.value*rate).toFixed(2);
    });
}


currencyOne.addEventListener('change', calculateOne);
amountOne.addEventListener('input', calculateOne);
currencyTwo.addEventListener('change', calculateTwo);
amountTwo.addEventListener('input', calculateTwo);

swap.addEventListener('click', ()=> {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculateOne();
  })
// calculateOne();