function changeColors() {
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = textColor;
    paragraph.style.backgroundColor = bgColor;
}
