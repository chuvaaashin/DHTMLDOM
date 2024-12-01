function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');
    result.textContent = num1 + num2;
}
