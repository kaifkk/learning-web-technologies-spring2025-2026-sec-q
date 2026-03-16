let unitPrice = 1000;

let quantity = document.getElementById("quantity");
let totalPrice = document.getElementById("totalPriceSection");

quantity.addEventListener("input", () => {
    let quantityConvertToInt = parseInt(quantity.value);

    if(quantityConvertToInt < 0) {
        quantityConvertToInt = 0;
        quantity.value = 0;
        alert("Quantity must be a positive number");
    }

    let total = unitPrice * quantityConvertToInt;
    totalPrice.innerText = total;

    if(total > 1000) {
        alert("You are now eligible for gift coupon");
    }
})