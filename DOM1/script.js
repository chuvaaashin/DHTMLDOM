function changeImage() {
    const imageUrl = document.getElementById('imageURL').value;
    const image = document.getElementById('image');
    image.src = imageUrl;
}
