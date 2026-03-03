let email = document.getElementById('emailInputField');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    if (email.value == '') {
        alert('email field cannot be empty');
        return;
    }

    if (!valid(email.value)) {
        alert("Enter a valid email address (i.e. anything@example.com)");
        return;
    }

}

function valid(email) {
    let input = document.createElement('input');
    input.type = 'email';
    input.value = email;
    return input.checkValidity();
}