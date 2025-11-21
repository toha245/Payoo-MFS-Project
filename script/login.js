
// step 1 = ID k dhorchi getElementById diye 

document.getElementById("login-btn").addEventListener("click", 
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin").value;
        // const convertedPin = parseInt(pin); 
        if(accountNumber.length === 11){
            if(parseInt(pin) === 1234){  
                // convertedPin === 1234 evabeo lekha jay
                window.location.href="./main.html";
            }
            else{
                alert("pin thik nai");
            }
        }
        else{
            alert("need valid account");
        }
})


// console.log();