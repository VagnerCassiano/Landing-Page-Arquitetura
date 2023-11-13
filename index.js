const image = window.document.getElementById("image");
let currentImageIndex = 1;
const maxClicks = 2;
let clickCount = 0;

function updateImage() {
    image.setAttribute("src", `./imagem/imagem${currentImageIndex}.svg`);
}

function nextImage() {
    if (clickCount < maxClicks) {
        clickCount++;
        currentImageIndex = (currentImageIndex % 3) + 1;
        updateImage();
    }
}

function prevImage() {
    if (clickCount > 0) {
        clickCount--;
        currentImageIndex = (currentImageIndex - 2 + 3) % 3 + 1;
        updateImage();
    }
}