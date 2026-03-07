let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    let bloodGroup = document.getElementsByName('bloodGroup');

    for(let i = 0; i < bloodGroup.length; i++) {
        if(bloodGroup[i].value == "") {
            alert('you must select an option');
            return;
        }
    }

    alert('success');
})