const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
     const bankName = document.getElementById('add-bank').value;

     const accountNum = document.getElementById('add-acc-num').value;
     const addAmount = parseInt(document.getElementById('add-amount').value);
     const pin = parseInt(document.getElementById('pin-num').value);
     ;
    //  console.log(bankName, accountNum, addAmount, pin);
 if(accountNum.length !== 11){
    alert("Please provide a valid account number");
    return;
 }
if(pin != validPin){
    alert('Please provide a valid pin number');
    return;
}
    const amount = parseInt(document.getElementById('amount').innerText);
    const totalAmount = amount + addAmount;
    document.getElementById('amount').innerText = totalAmount;
})
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashPin = parseInt(document.getElementById('cash-out-pin').value);
    if(agentNumber.length !== 11){
        alert('Please provide valid Account number');
        return;
    }
    if(cashPin != validPin){
    alert('Please provide a valid pin number');
    return;
}
    const withdrawAmount = parseInt(document.getElementById('cash-out-amount').value);
     const availableAmount = parseInt(document.getElementById('amount').innerText);
     document.getElementById('amount').innerText = availableAmount - withdrawAmount

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