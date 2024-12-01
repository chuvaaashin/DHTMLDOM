function changeTableBorder() {
    const thickness = document.getElementById('thickness').value;
    const color = document.getElementById('color').value;
    const table = document.getElementById('myTable');
    table.style.border = `${thickness} solid ${color}`;
}
