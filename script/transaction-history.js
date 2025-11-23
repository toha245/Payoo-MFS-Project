document.getElementById("transaction-box").addEventListener("click",
    function(){
        handleToggle("add-money", "none")
        handleToggle("cashout", "none")
        handleToggle("transaction-history", "block")
    }
)