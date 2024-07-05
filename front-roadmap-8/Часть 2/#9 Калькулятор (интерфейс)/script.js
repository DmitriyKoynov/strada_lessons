const equalsButton = document.body.querySelector('.equals-button');
document.body.addEventListener('click', event => {
    console.log(`Вы ткнули на ${event.target.innerText}`);
});
equalsButton.addEventListener('click', event => {
    event.stopPropagation();
    alert(`А вот теперь вы ткнули на нужную кнопку!`);
});
