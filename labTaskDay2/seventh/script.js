let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    let fileInput = document.getElementById('file');
    let userId = document.getElementById('userId');

    if(!userId.value) {
        alert('you must enter userId');
        return;
    }

    if(userId.value < 0) {
        alert('userId must be a positive number');
        return;
    }

    if(!(fileInput.files && fileInput.files[0])) {
        alert('you must upload file');
        return;
    }

    alert('success');

})