
const exchangeRates = {
    "USD": {
      "USD": 1,
      "EUR": 0.85,
      "GBP": 0.76,
      "JPY": 110.53,
      "INR": 83.27 
    },
    "EUR": {
      "USD": 1.18,
      "EUR": 1,
      "GBP": 0.89,
      "JPY": 130.14,
      "INR": 98.14  
    },
    "GBP": {
      "USD": 1.32,
      "EUR": 1.13,
      "GBP": 1,
      "JPY": 146.57,
      "INR": 110.23 
    },
    "JPY": {
      "USD": 0.009,
      "EUR": 0.0077,
      "GBP": 0.0068,
      "JPY": 1,
      "INR": 0.75  
    },
    "INR": {  
      "USD": 0.012,
      "EUR": 0.0102,
      "GBP": 0.0091,
      "JPY": 1.33,
      "INR": 1  
    }
  };
  
  
  function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  

    if (amount === '' || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
  
    
    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
  
 
    const convertedAmount = (amount * exchangeRate).toFixed(2);
   
   
    document.getElementById('conversion-result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
  

  
  document.getElementById('convertButton').addEventListener('click', convertCurrency);
  // dark mode
  document.getElementById('darkmode').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.result').classList.toggle('dark-mode');
    document.getElementById('darkmode').classList.toggle('dark-btn-a');
    
  });