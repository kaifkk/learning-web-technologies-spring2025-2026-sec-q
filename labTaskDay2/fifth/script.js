let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", () => {
    let degreeCheckBox = document.getElementsByName('degree');

    for(let i = 0; i < degreeCheckBox.length; i++) {
        if(degreeCheckBox[i].checked) {
            alert('success');
            return;
        }
    }

    alert('must select one');
})