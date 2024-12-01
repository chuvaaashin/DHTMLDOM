window.onload = function() {
    const button = document.getElementById('myButton');
    button.addEventListener('mouseover', function() {
        this.textContent = 'Вы навели на кнопку!';
    });
    button.addEventListener('mouseout', function() {
        this.textContent = 'Нажми на меня';
    });
};
