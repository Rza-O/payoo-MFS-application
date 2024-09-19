// Search: form Submit loading page

// Step-1: Set Event Handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step-2: Prevent Default behavior(prevent reloading browser)
    event.preventDefault(); // vejal to beginner
    console.log('login button clicked');

    // Step-3: Get the Phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})