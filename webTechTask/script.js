const res = document.getElementById("res");
const buttonContainer = document.querySelector(".buttons");

const buttons = [
    "C", "⌫", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "00", "0", ".", "="
];

buttons.forEach(value => {
    const btn = document.createElement("button");
    btn.textContent = value;
    buttonContainer.appendChild(btn);

    btn.addEventListener("click", () => handleInput(value));
});

function handleInput(value) {
    if (value === "C") {
        res.value = "";
    }
    else if (value === "⌫") {
        res.value = res.value.slice(0, -1);
    }
    else if (value === "=") {
        calculate();
    }
    else {
        res.value += value;
    }
}

function calculate() {
    try {
        let expression = res.value.split("x").join("*");
        res.value = eval(expression);
    } catch {
        res.value = "Error";
    }
}