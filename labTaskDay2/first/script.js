let submitBtn = document.getElementById('submitBtn');
let username = document.getElementById('nameInput');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    if (username.value == "") {
        alert("name field cannot be empty.");
        return;
    }

    let name = username.value;
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

}

function countWords (str) {
    return str
        .trim()
        .split(" ")
        .filter(word => word !== "")
        .length
}