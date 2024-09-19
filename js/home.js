// add money to the account

//step-1 add an event handler to add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    // prevent page reload

    event.preventDefault();
 

//  step-2 get money to be added to the account balance


const addMoneyInput = document.getElementById('add-money-input').value;
console.log(addMoneyInput);

// get the pin number provided

const pinNumberInput = document.getElementById('add-pin-input').value;
 console.log( typeof pinNumberInput);

// step-3 verify  pin number

   if(pinNumberInput === '1234'){
    console.log('adding money to our account')

// step-4 get the current balance

  const balance = document.getElementById('account-balance').innerText;
  console.log( typeof balance)


//step-5 add money input with account balance
 
 const addMoneyNumber = parseFloat(addMoneyInput);
 
 const balanceNumber = parseFloat(balance);
 
 const newBalance = addMoneyNumber + balanceNumber;
 console.log(newBalance)

//  step-6 update the balance in the ui/dom

document.getElementById('account-balance').innerText = newBalance;
 



   }
   else{
    alert('try again later')
   }

});