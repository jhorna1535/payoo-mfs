// console.log('button clicking file add')

/************* step-1 set even handler *******************/ 

document.getElementById('button-login')
.addEventListener('click',function(event){

    /********** step-2 prevent default behavior (not reload) ************/ 
    event.preventDefault();
    console .log('login button clicked')

    /*********** step-3 get the phone number ***************/ 

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)

})