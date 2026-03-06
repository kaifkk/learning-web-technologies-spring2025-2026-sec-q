let radioButton = document.getElementsByName('gender');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', validateRadio);

function validateRadio() {
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) return;
    }

    alert("Must select one");
}