//selecting elements
const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

submitBtn.addEventListener("click", submitHandler);

const submitHandler = () => {
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const curr = Number(currentPrice.value); 
    calculateProfitAndLoss(ip,qty,curr);
}

const calculateProfitAndLoss = (initial, quantity, current) => {
    if(initial=="" || quantity=="" || current==""){
        showOutput("PLease enter all the fields 😠")
    }
    else if(initial > current) {

        var loss = parseFloat((initial - current) * quantity).toFixed(2);  
        var lossPercentage = parseFloat(((initial-current) *100)/initial).toFixed(2);
      
        if(lossPercentage > 50){
             document.body.style.backgroundImage = "url('photo/photo3.jpg')";
        }else{
             document.body.style.backgroundImage = "url('photo/photo2.jpg')";
        }

        showOutput(`The loss is ${loss} and the absolute Loss percent is ${lossPercentage}% 😱📉`)
    }else if(current > initial){

        var profit = parseFloat((current - initial) * quantity).toFixed(2);  
        var profitPercentage = parseFloat(((current-initial) * 100)/initial).toFixed(2);
        
        document.body.style.backgroundImage = "url('photo/photo4.jpg')";
        showOutput(`Yay! You had absolute profit of ${profit} and the absolute Profit percent is ${profitPercentage}% 🤑📈`)
    }else if(initial == current){
        document.body.style.backgroundImage = "url('photo/photo1.jpg')";
        showOutput("No pain no gain and no gain no pain 🤷")
    }
    
}

const showOutput = (message) => output.innerText = message;