const validPin = 1234;
// reusable function
function getInputValueNumber(id){
    const value = parseInt(document.getElementById(id).value);
    return value;
}
function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
}

function getInnerText(id){
    const value =  parseInt(document.getElementById(id).innerText);
    return value;
}
function setInnerText(value){
   document.getElementById('amount').innerText = value;
}


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
     const bankName = getInputValue('add-bank');

     const accountNum = getInputValue('add-acc-num')

     const addAmount = getInputValueNumber('add-amount')

     const pin = getInputValueNumber('pin-num');
    
 if(accountNum.length !== 11){
    alert("Please provide a valid account number");
    return;
 }
if(pin != validPin){
    alert('Please provide a valid pin number');
    return;
}
    const amount = getInnerText('amount');
    const totalAmount = amount + addAmount;
    setInnerText(totalAmount);
})
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const cashPin = getInputValueNumber('cash-out-pin');
    if(agentNumber.length !== 11){
        alert('Please provide valid Account number');
        return;
    }
    if(cashPin != validPin){
    alert('Please provide a valid pin number');
    return;
}
    const withdrawAmount = getInputValueNumber('cash-out-amount')
     const availableAmount = getInnerText('amount');
     setInnerText(availableAmount - withdrawAmount);

})

// Trogling features
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('Add-money-parent').style.display = 'block';
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('Add-money-parent').style.display = 'none';
     document.getElementById('cash-out-parent').style.display = 'block';
})