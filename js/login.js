// Search: form Submit loading page

// Step-1: Set Event Handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step-2: Prevent Default behavior(prevent reloading browser)
    event.preventDefault(); // vejal to beginner
    // console.log('login button clicked');

    // Step-3: Get the Phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // Step-4: Validate phone and pin
    // This is temporary way. We'll not do it this way
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are Logged in')
        // Step-5: Allow User to use the website
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Phone number or PIN number')
    }
});