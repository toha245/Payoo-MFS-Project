// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const amount = document.getElementById("amount").value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById('pin').value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);
   
//     if(convertedPin === 1234){
//         const sum = convertedMainBalance + convertedAmount;
//         document.getElementById('main-balance').innerText = sum;
//     }
//     else{
//         console.log('pin sothik na');
//     }
// })

// reapetetion komabo ei code diye
document.getElementById("add-money").addEventListener("click", 
    function(event){
        event.preventDefault();
        const amount = getInputValueById("amount");
        const pin = getInputValueById("pin");
        const account = document.getElementById("account-number").value;
        const mainBalance = getInnerTextById("main-balance");
        if(account.length === 11){
            if(pin === 1234){
                const sum = mainBalance + amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIDAndValue("main-balance", sum);
                console.log(setInnerTextByIDAndValue);
            }
            else{
                console.log("pin thik nai")
            }
        }
        else{
            console.log("account number thik nai")
        }
})