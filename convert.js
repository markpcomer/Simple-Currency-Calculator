const from = document.querySelector('from');
const to = document.querySelector('to');
const calculate = document.querySelector('calculate');
const amount = document.querySelector('amount');
const result = document.querySelector('result');






calculate.addEventListener("click", function getExchangeRate(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;

    fetch(`https://v6.exchangerate-api.com/v6/e180883e3cd79ac9321b020c/latest/${fromCurrency}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let rate = data.rates[toCurrency];
        let total = rate * amt;
        result.innerHTML = `${amt} ${fromCurrency} = ${total} ${toCurrency}`;
    });

});


