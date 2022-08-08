const currencyOne= document.getElementById('currency-first');
const currencyTwo= document.getElementById('currency-second');
const amountOne = document.getElementById('amount-first');
const amountTwo = document.getElementById('amount-second');
const swap = document.getElementById('button');
const url = "https://v6.exchangerate-api.com/v6/eb85eca93976682d07c0bd3d/latest/";

function calculate(data1,data2,amount1,amount2){
    fetch(`${url}${data1}`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[data2];
        amount2.value = (amount1.value*rate).toFixed(2);
    });
}

function firstInput(){
    let currencyOneValue = currencyOne.value;
    let currencyTwoValue = currencyTwo.value;
    calculate(currencyOneValue,currencyTwoValue,amountOne,amountTwo);
}

function secondInput(){
    let currencyOneValue = currencyOne.value;
    let currencyTwoValue = currencyTwo.value;
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