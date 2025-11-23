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
        const selectedBank = document.getElementById("all-bank").value;

        


        if(amount < 0){
            alert("vai! eta kono kotha! positive number dite hobe")
            return;
        }

        if(account.length === 11){
            if(pin === 1234){
                const sum = mainBalance + amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIDAndValue("main-balance", sum);
                
                const container = document.getElementById("transaction-container");

                const div = document.createElement("div");
                div.classList.add("bg-red-400")
                div.innerHTML = `
                <h1 class="text-yellow-300">Added Money from ${selectedBank}</h1>
                <h3>${amount}</h3>
                <p>account number : ${account}</p>
                `
                container.appendChild(div);
                // const p = document.createElement("p");
                // p.innerText = `
                // added ${amount} from ${account} account
                // `
                // container.appendChild(p);
            }
            else{
                console.log("pin thik nai")
            }
        }
        else{
            console.log("account number thik nai")
        }
})