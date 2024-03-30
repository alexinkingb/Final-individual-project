let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e){
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = "80";
    }else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = "3";
    }
    else if (currentCurrency === "BYN") {
        newCurrency = "AUD";
        coefficient = "58";
    }
    else if (currentCurrency === 'AUD') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
        e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
}
}