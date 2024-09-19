// console.log('button clicking file add')

/************* step-1 set even handler *******************/ 

document.getElementById('button-login')
.addEventListener('click',function(event){

    /********** step-2 prevent default behavior (not reload) ************/ 
    event.preventDefault();
   

    /*********** step-3 get the phone number ***************/ 

    const phoneNumber = document.getElementById('phone-number').value;


    /*********** step-3' get pin number **************/ 
     
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);



    /*********** step-4 validate phone and pin number **********/   
    // / ########### this just a temporary way ####################/ 
            
    if(phoneNumber==='014' && pinNumber==='1234'){
        console.log('you are log in');
      
        window.location.href = '/home.html'; 
    }

    /********* step-5 allow user to log in ****************/ 
    else{
        alert('something wrong');
    }

     

});