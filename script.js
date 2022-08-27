var initialPrc=document.getElementById('initial-price');
var currentPrc=document.getElementById('current-price');
var stocksQty=document.getElementById('stocks-quantity');
var outputText=document.querySelector('.output-text');
var submitButton=document.querySelector('.submit-button');
var Container=document.querySelector('.container');


function calculateProfitAndLoss(initialPrice,currentPrice,stocksQuantity){
    if(initialPrice>currentPrice){
        let loss=(initialPrice-currentPrice)*stocksQuantity;
        let lossPercentage=(loss/initialPrice)*100;
        Container.classList.add('loss');
        Container.classList.remove('profit');
        outputText.innerText=`The loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(4)}`
    }
    else  if(initialPrice<currentPrice){
        let profit=(currentPrice-initialPrice)*stocksQuantity;
        let profitPercentage=(profit/initialPrice)*100;
        Container.classList.add('profit');
        Container.classList.remove('loss');
        outputText.innerText=`The profit is ${profit} and profit Percentage is ${profitPercentage.toFixed(4)}`
    }
    else{
        Container.classList.remove('profit');
        Container.classList.remove('loss');
        outputText.textContent='no Pain no gain';
    }
}
function submitClickHandler(e){

    var initialPrice=Number(initialPrc.value);
    var currentPrice=Number(currentPrc.value);
    var stocksQuantity=Number(stocksQty.value);
    if(initialPrice>0 && currentPrice>0 && stocksQuantity>0){
        calculateProfitAndLoss(initialPrice,currentPrice,stocksQuantity);
    }
    else{
        outputText.innerHTML='Please Fill All Values';
    }
}


submitButton.addEventListener('click',submitClickHandler)
