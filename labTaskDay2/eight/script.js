let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput');
    let gender = document.getElementsByName('gender');
    let day = document.getElementById('dateInput').value;
    let month = document.getElementById('monthInput').value;
    let year = document.getElementById('yearInput').value;
    let bloodGroup = document.getElementsByName('bloodGroup');
    let degree = document.getElementsByName('degree');
    let fileInput = document.getElementById('file');
    let isGenderSelected = false;
    let isBloodGroupSelected = false;
    let isDegreeSelected = false;

    if(name == '') {
        alert('name cannot be empty');
        return;
    }

    if (! ((name[0] >= 'a' && name[0] <= 'z') || (name[0] >= 'A' && name[0] <= 'Z'))) {
        alert("must start with a letter");
        return;
    }


    if (countWords(name) < 2) {
        alert("must contain at least two words");
        return;
    }

    for (let i = 0; i < name.length; i++) {

        if (! ((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] === '.' || name[i] === '-' || name[i] === " ")) {
            alert("can only contain a-z or A-z or dot(.) or dash(-)");
            return;
        }
    }

    if (email.value == '') {
        alert('email field cannot be empty');
        return;
    }

    if (!valid(email.value)) {
        alert("Enter a valid email address (i.e. anything@example.com)");
        return;
    }

    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            isGenderSelected = true;
        }
    }

    if(!isGenderSelected) {
        alert('gender must be selected');
        return;
    }

    if(day == "" || month == "" || year == "") {
        alert("you must fill the dob");
        return;
    }

    if(month < 1 || month > 12){
        alert("Invalid month");
        return;
    }

    if(day < 1 || day > 31){
        alert("Invalid day");
        return;
    }

    if(month == 2 && day > 29){
        alert("February cannot have more than 29 days");
        return;
    }

    if((month==4 || month==6 || month==9 || month==11) && day>30){
        alert("Invalid day for this month");
        return;
    }

    if(year < 1900 || year > 2100){
        alert("Invalid year");
        return;
    }

    for(let i = 0; i < bloodGroup.length; i++) {
        if(!bloodGroup[i].value == "") {
            isBloodGroupSelected = true;
        }
    }

    if(!isBloodGroupSelected) {
        alert('blood Group must be selected');
        return;
    }

    for(let i = 0; i < degree.length; i++) {
        if(degree[i].checked) {
            isDegreeSelected = true;
        }
    }

    if(!isDegreeSelected) {
        alert('degree must be selected');
        return;
    }

    if(!(fileInput.files && fileInput.files[0])) {
        alert('you must upload file');
        return;
    }


})


function countWords (str) {
    return str
        .trim()
        .split(" ")
        .filter(word => word !== "")
        .length
}

function valid(email) {
    let input = document.createElement('input');
    input.type = 'email';
    input.value = email;
    return input.checkValidity();
}