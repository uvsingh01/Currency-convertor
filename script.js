const currencyOne= document.getElementById('currency-first');
const currencyTwo= document.getElementById('currency-second');
const amountOne = document.getElementById('amount-first');
const amountTwo = document.getElementById('amount-second');
const currencyOneValue = currencyOne.value;
const currencyTwoValue = currencyTwo.value;
const swap = document.getElementById('button');
const url = "https://v6.exchangerate-api.com/v6/85d74a9472487e7551d8fbc8/latest/";

function calculate(data1,data2,amount1,amount2){
    fetch(`${url}${data1}`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[data2];
        amount2.value = (amount1.value*rate).toFixed(2);
    });
}

function firstInput(){
    calculate(currencyOneValue,currencyTwoValue,amountOne,amountTwo);
}

function secondInput(){
    
    calculate(currencyTwoValue,currencyOneValue,amountTwo,amountOne);
}

currencyOne.addEventListener('change', firstInput);
amountOne.addEventListener('input', firstInput);
currencyTwo.addEventListener('change', secondInput);
amountTwo.addEventListener('input', secondInput);

swap.addEventListener('click', ()=> {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    firstInput();
})