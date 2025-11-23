// document.getElementById("add-money").style.display="block";
// document.getElementById("cashout").style.display="none";
// document.getElementById("add-money-box").addEventListener("click", function(){
//     document.getElementById("cashout").style.display="none";
//     document.getElementById("add-money").style.display="block";
// })

// document.getElementById("cashout-box").addEventListener("click", 
//     function(){
//         document.getElementById("cashout").style.display="block";
//         document.getElementById("add-money").style.display="none";
// })

// uporer kaj tai function likhe reusable kore kaj korbo

document.getElementById("cashout").style.display="none";
document.getElementById("transaction-history").style.display="none";
document.getElementById("add-money-box").addEventListener("click", 
    function(){
        handleToggle("add-money", "block")
        handleToggle("cashout", "none")
        handleToggle("transaction-history", "none")
        // document.getElementById("add-money").style.display = "block";
        // document.getElementById("cashout").style.display = "none";
    }
)

document.getElementById("cashout-box").addEventListener("click", 
    function(){
        handleToggle("add-money", "none")
        handleToggle("cashout", "block")
        handleToggle("transaction-history", "none")
    }
)

