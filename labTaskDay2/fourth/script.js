let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    let day = document.getElementById('dayId').value;
    let month = document.getElementById('monthId').value;
    let year = document.getElementById('yearId').value;

    if(day == "" || month == "" || year == "") {
        alert("you must fill all the inputs");
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

    alert("Valid Date of Birth");
});