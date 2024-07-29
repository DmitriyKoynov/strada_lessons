const serverUrl = 'https://api.genderize.io';
const answer = document.body.querySelector('.answer');
const form = document.body.querySelector('.form');
const input = document.body.querySelector('.input');

let name = '';
let gender = '';

form.addEventListener('submit', predictMale);

function predictMale(event) {
    event.preventDefault();
    name = catchNameFromForm();
    let url = `${serverUrl}?name=${name}`;
    fetch(url)
        .then(response => {
            response.json();
        })
        .then(response => {
            gender = response.gender;
            showResult(name, gender);
            clearInput();
        })
        .catch(() => console.error('Имя должно состоять из латиницы без пробелов и цифр'));
}

function showResult(name, gender) {
    answer.textContent = `${name} is ${gender}`;
}

function catchNameFromForm() {
    return input.value;
}

function clearInput() {
    input.value = '';
}
