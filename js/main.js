const validPin = 1234;
const transactionData = [];
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
function toggleFeature(id){
    const forms = document.getElementsByClassName('form');
    // console.log(forms);
    for(const f of forms)
    {
        f.style.display = 'none';
    }
    return document.getElementById(id).style.display = 'block';
}
function toogleButton(id){
    const formBtns = document.getElementsByClassName('form-btn');
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]","text-[#0874f2]")
          btn.classList.add("border-gray-300");
     }
     document.getElementById(id).classList.remove("border-gray-300","text-[#08080890]");
     document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]","text-[#0874f2]");
}

document.getElementById("Logout-btn").addEventListener("click", function(){
    window.location.href = 'index.html'
})

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
     const bankName = getInputValue('add-bank');

     const accountNum = getInputValue('add-acc-num')

     const addAmount = getInputValueNumber('add-amount')
     if(addAmount<=0){
        alert("Invalid Amount");
        return;
     }

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

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
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
    if(withdrawAmount<=0 || withdrawAmount>availableAmount){
        alert("Invalid Amount");
        return;
    }
     const availableAmount = getInnerText('amount');
     setInnerText(availableAmount - withdrawAmount);

      const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);

})

document.getElementById("transaction").addEventListener('click', function(){
   const transactionContainer = document.getElementById('transaction-container');
   transactionContainer.innerHTML = "";
   for(const data of transactionData){
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white rounded-[12px] p-2 my-3">
        <div class="flex items-center">
        <div class="ml-2 bg-[#F4F5F7] p-3 rounded-full">
          <img src="./assets/wallet1.png" alt="">
        </div>
        <div class="ml-4 bg-">
          <h2 class="font-bold">${data.name}</h2>
          <p class="text-[#08080890]">Today ${data.date} </p>
        </div>
      </div>
      </div>
    `
    transactionContainer.appendChild(div);
   } 
    
})

// Trogling features
document.getElementById('add-money').addEventListener('click', function(){
    toggleFeature('Add-money-parent')
    toogleButton('add-money');

    
    
})
document.getElementById('cash-out').addEventListener('click', function(){
    toggleFeature('cash-out-parent')
      toogleButton('cash-out');
    
    })
document.getElementById('transfer-money').addEventListener('click', function(){
    toggleFeature('transfer-money-parent')
     toogleButton('transfer-money');
  
    })
document.getElementById('get-bonus').addEventListener('click', function(){
   
  toggleFeature('get-bonus-parent')
   toogleButton('get-bonus');
    })
document.getElementById('pay-bill').addEventListener('click', function(){
     
  toggleFeature('pay-bill-parent')
   toogleButton('pay-bill');
    })
document.getElementById('transaction').addEventListener('click', function(){
     
  toggleFeature('transaction-parent')
   toogleButton('transaction');
    })
     