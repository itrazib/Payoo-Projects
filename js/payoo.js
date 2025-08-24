console.log('added payoo . js')

// click button Event Handler
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault(); // automatic reload off kore
    const number = 1316959094;
    const pin = 1234;
    const inputNumber = document.getElementById('input-number').value; //provide string value
    const inputPin = document.getElementById('input-pin').value; //provide string value

    if(inputNumber == number && inputPin == pin)
       {
         console.log('Valid to next page'); 
         window.location.href = 'main.html' //next page e jaoyr jonno use korte hoy 
       }
    else
        alert('Invalid! please provide valid number and pin');
})