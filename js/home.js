// Add money to the account


// Step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent Page reload after submit
    event.preventDefault();

    //step-2: Get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //Get the PIN number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step-3: Verify the pin number(temporary way)
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');

        //Step-4: Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // Step-5: Add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // Step-6: Update the balance in the DOM/UI
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please Try again');
    }
});